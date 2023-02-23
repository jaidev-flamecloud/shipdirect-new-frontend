import { Button, Grid, Stack } from "@mui/material"
import React, { useEffect, useState } from "react"
import PageContainer from "../components/containers/PageContainer"
import Field from "../components/ui/Field"
import Section from "../components/ui/Section"
import CustomTable from "../components/ui/CustomTable"
import { TableCell, TableRow } from "@mui/material"
import api from "../config/axios"
import { toast } from "react-toastify"
import Loader from "../components/ui/Loader"
import StatusComp from "../components/common/StatusComp"
import TicketChat from "../components/modals/TicketChat"
import { formatDate } from "../utilities/misc"

const Support = () => {
  const [ticketsLoading, setTicketsLoading] = useState(false)
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState("All")
  const [sort, setSort] = useState("des")
  const [page, setPage] = useState(1)
  const limit = 10
  const [totalPages, setTotalPages] = useState()
  const [ticket, setTicket] = useState({})
  const [showTicket, setShowTicket] = useState(false)

  const getTickets = async () => {
    setTicketsLoading(true)
    await api
      .get(
        `/ticket/read?status=${filter}&sort=${sort}&page=${page}&limit=${limit}`
      )
      .then((res) => {
        setTickets(res.data.tickets)
        setTotalPages(res.data.totalPages)
      })
      .catch((err) => console.log(err))
      .finally(() => setTicketsLoading(false))
  }

  const createTicket = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = {
      order: e.target.order.value,
      message: e.target.message.value,
      subject: e.target.subject.value,
    }

    await api
      .post("/ticket/create", data)
      .then(() => {
        toast.success("Ticket created successfully")
        getTickets()
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  const updateTicket = async (ticket, status) => {
    setLoading(true)
    const data = {
      ticketId: ticket._id,
      status,
    }

    await api
      .put("/ticket/update", data)
      .then(() => {
        toast.success("Ticket updated successfully")
        getTickets()
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getTickets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, filter, sort])

  return (
    <PageContainer title="Open a Ticket">
      <Section sx={{ mb: 3 }}>
        <form onSubmit={createTicket}>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={8}>
              <Field
                name="subject"
                label="Title*"
                placeholder="Your Ticket Title here"
                required
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Field
                name="order"
                label="Order ID"
                placeholder="Your Order ID here"
              />
            </Grid>
          </Grid>
          <Field
            name="message"
            label="Message*"
            placeholder="Ticket message here"
            multiline
            rows={5}
            required
          />
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            mt={2}
          >
            <Stack
              direction={{ xs: "column", sm: "row", fontSize: 14 }}
              alignItems="center"
            >
              <Button type="button" variant="outlined" sx={{ mr: 2, px: 3 }}>
                Add Attachment (Upto 2MB)
              </Button>
              <span>
                <span style={{ color: "silver" }}>Formats accepted</span> :
                .png, .jpeg, .pdf
              </span>
            </Stack>

            <Button
              disabed={loading}
              type="submit"
              variant="contained"
              sx={{ px: 3 }}
            >
              {loading ? <Loader /> : "Open Ticket"}
            </Button>
          </Stack>
        </form>
      </Section>
      <CustomTable
        fields={[
          "ORDER ID",
          "TITLE",
          "STATUS",
          "LAST REPLY",
          "CREATED",
          "ACTION",
        ]}
        loading={ticketsLoading}
        pagination
        page={page}
        setPage={setPage}
        count={totalPages}
      >
        {tickets.map((ticket) => (
          <TableRow>
            <TableCell>{ticket.order_uuid || "N/A"}</TableCell>
            <TableCell>{ticket.subject}</TableCell>
            <TableCell>
              <StatusComp status={ticket.status} />
            </TableCell>
            <TableCell>
              {ticket.lastMessage ? formatDate(ticket.lastMessage) : "N/A"}
            </TableCell>
            <TableCell>{formatDate(ticket.createdAt)}</TableCell>
            <TableCell sx={{ color: "#3ABF7C" }}>
              <Button
                variant="contained"
                onClick={() => {
                  setTicket(ticket)
                  setShowTicket(true)
                }}
              >
                View
              </Button>
              {ticket.status === "open" ||
              ticket.status === "waiting for customer response" ? (
                <Button
                  color="error"
                  onClick={() => {
                    updateTicket(ticket, "close")
                  }}
                  sx={{ ml: 1 }}
                >
                  Close
                </Button>
              ) : (
                ""
              )}
            </TableCell>
          </TableRow>
        ))}
      </CustomTable>
      <TicketChat
        ticket={ticket}
        setTicket={setTicket}
        refresh={getTickets}
        back={() => setShowTicket(false)}
        updateTicket={updateTicket}
        open={showTicket}
        onClose={() => setShowTicket(false)}
        updating={loading}
      />
    </PageContainer>
  )
}

export default Support

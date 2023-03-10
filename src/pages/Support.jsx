import {
  Button,
  Grid,
  IconButton,
  Stack,
  useTheme,
  alpha,
  Box,
  Typography,
} from "@mui/material"
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
import CheckRoundedIcon from "@mui/icons-material/CheckRounded"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined"
import CloseIcon from "@mui/icons-material/Close"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"

const filters = [
  ["All", "All"],
  ["Open", "open"],
  ["Closed", "close"],
  ["Waiting for Customer Response", "Waiting for Customer Response"],
]

const FilterTabs = ({ filter, setFilter }) => {
  const theme = useTheme()
  return (
    <Stack direction="row" spacing={1}>
      {filters.map((f, i) => (
        <Box
          onClick={() => setFilter(i)}
          sx={{
            cursor: "pointer",
            px: 1,
            borderRadius: 0.8,
            border: i === filter && `solid 1px ${theme.palette.primary.main}`,
            bgcolor: i === filter && alpha(theme.palette.primary.main, 0.2),
            fontWeight: 500,
          }}
        >
          {f[0]}
        </Box>
      ))}
    </Stack>
  )
}

const Support = () => {
  const [ticketsLoading, setTicketsLoading] = useState(false)
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState(0)
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
        `/ticket/read?status=${filters[filter][1]}&sort=${sort}&page=${page}&limit=${limit}`
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

    const params = new FormData()
    params.append("order", e.target.order.value)
    params.append("message", e.target.message.value)
    params.append("subject", e.target.subject.value)
    params.append("attachment", fileUpload)

    await api
      .post("/ticket/create", params)
      .then(() => {
        toast.success("Ticket created successfully")
        setFileUpload(null)
        e.target.reset()
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
        setShowTicket(false)
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getTickets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, filter, sort])

  const theme = useTheme()

  const [fileUpload, setFileUpload] = useState(null)

  return (
    <PageContainer
      title={
        showTicket ? (
          <>
            <IconButton
              onClick={() => {
                setShowTicket(false)
                window.scrollTo(0, 0)
              }}
            >
              <ArrowBackIcon />
            </IconButton>{" "}
            {ticket?.subject}
          </>
        ) : (
          "Ticket Support"
        )
      }
      desc={
        showTicket
          ? ""
          : "Our support will reply to all your queries within 24 working hours"
      }
      end={
        showTicket &&
        ticket.status !== "close" && (
          <Button
            onClick={() => {
              updateTicket(ticket, "close")
            }}
            variant="contained"
            color="success"
            sx={{ color: "white", gap: 1 }}
          >
            {loading ? (
              <Loader />
            ) : (
              <>
                <CloseIcon sx={{ fontSize: 12 }} /> Close Ticket
              </>
            )}
          </Button>
        )
      }
    >
      {showTicket ? (
        <TicketChat
          ticket={ticket}
          setTicket={setTicket}
          refresh={getTickets}
          back={() => setShowTicket(false)}
          updateTicket={updateTicket}
          open={showTicket}
          onClose={() => {
            setShowTicket(false)
            window.scrollTo(0, 0)
          }}
          updating={loading}
        />
      ) : (
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
                <Button
                  type="button"
                  variant="outlined"
                  component="label"
                  sx={{
                    mr: 2,
                    px: 3,
                    bgcolor: alpha(theme.palette.primary.main, 0.1),
                  }}
                >
                  {fileUpload?.name || "Add Attachment (Upto 2MB)"}

                  <input
                    accept=".png, .jpeg, .jpg, .pdf"
                    type="file"
                    id="img"
                    hidden
                    name="img"
                    onChange={(e) => {
                      setFileUpload(e.target.files[0])
                    }}
                  />
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
                sx={{ px: 3, gap: 1 }}
              >
                {loading ? (
                  <Loader />
                ) : (
                  <>
                    Open Ticket
                    <ArrowForwardIcon fontSize="small" />
                  </>
                )}
              </Button>
            </Stack>
          </form>
        </Section>
      )}

      <CustomTable
        start={
          <Stack spacing={2}>
            <Typography fontSize={16} fontWeight={500}>
              Your Previous Tickets
            </Typography>
            <FilterTabs filter={filter} setFilter={setFilter} />
          </Stack>
        }
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
              <IconButton
                onClick={() => {
                  setTicket(ticket)
                  setShowTicket(true)
                  window.scrollTo(0, 0)
                }}
                title="View Details"
              >
                <VisibilityOutlinedIcon fontSize="small" />
              </IconButton>

              {ticket.status === "open" ||
              ticket.status === "waiting for customer response" ? (
                <IconButton
                  onClick={() => {
                    updateTicket(ticket, "close")
                  }}
                  title="View Details"
                >
                  <CheckRoundedIcon fontSize="small" />
                </IconButton>
              ) : (
                ""
              )}
            </TableCell>
          </TableRow>
        ))}
      </CustomTable>
    </PageContainer>
  )
}

export default Support

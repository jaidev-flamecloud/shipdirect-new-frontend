import { useState } from "react"
import ModalContainer from "../containers/ModalContainer"
import api from "../../config/axios"
import { toast } from "react-toastify"
import TicketChat from "./TicketChat"
import { Stack, Button, Typography } from "@mui/material"
import Loader from "../ui/Loader"
import CloseIcon from "@mui/icons-material/Close"

const TicketModal = ({ ticket, setTicket, ...props }) => {
  const [loading, setLoading] = useState(false)
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
        props.onClose()
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setLoading(false))
  }
  return (
    <ModalContainer {...props} title="Manual Payment Ticket" hideActions>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h6">{ticket.subject}</Typography>{" "}
        {ticket.status !== "close" && (
          <Button
            onClick={() => {
              updateTicket(ticket, "close")
              props.onClose()
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
        )}
      </Stack>
      <TicketChat
        ticket={ticket}
        setTicket={setTicket}
        updateTicket={updateTicket}
        manualPayment
        updating={loading}
      />
    </ModalContainer>
  )
}

export default TicketModal

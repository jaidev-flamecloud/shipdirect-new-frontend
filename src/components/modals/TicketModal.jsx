import { useState } from "react"
import ModalContainer from "../containers/ModalContainer"
import api from "../../config/axios"
import { toast } from "react-toastify"
import TicketChat from "./TicketChat"

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

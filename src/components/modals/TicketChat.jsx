import { Avatar, Button, Paper, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import ModalContainer from "../containers/ModalContainer"
import Field from "../ui/Field"
import api from "../../config/axios"
import { toast } from "react-toastify"
import { useRef } from "react"
import Loader from "../ui/Loader"
import { formatDate } from "../../utilities/misc"

const TicketChat = ({
  ticket,
  setTicket,
  back,
  refresh,
  updateTicket,
  updating,
  ...props
}) => {
  const msgContainer = useRef(null)
  const [loading, setLoading] = useState(false)

  const sendMessage = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = {
      ticketId: ticket._id,
      message: e.target.message.value,
    }

    await api
      .put("/ticket/message", data)
      .then((res) => {
        toast.success("Message sent successfully")
        setTicket(res.data.ticket)
        refresh()
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    if (msgContainer?.current) {
      msgContainer.current.scrollTop = msgContainer.current.scrollHeight
    }
  }, [ticket, msgContainer])

  return (
    <ModalContainer
      {...props}
      title={
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
        >
          {ticket.subject}{" "}
          {ticket.status !== "close" && (
            <Button
              onClick={() => {
                updateTicket(ticket, "close")
                back()
              }}
              variant="contained"
              color="error"
            >
              {updating ? <Loader /> : "Close Ticket"}
            </Button>
          )}
        </Stack>
      }
      hideActions
    >
      <Stack>
        <Stack
          ref={msgContainer}
          sx={{
            height: "20rem",
            scrollBehavior: "smooth",
            overflow: "auto",
            px: 2,
          }}
          spacing={3}
          mb={2}
        >
          {ticket?.messages?.map((msg, i) => (
            <Message
              key={i}
              sender={msg.username}
              time={formatDate(msg.timestamp)}
              body={msg.message}
              isMine={msg.username !== "admin"}
            />
          ))}
        </Stack>
        <form onSubmit={sendMessage}>
          <Stack direction="row" gap={2}>
            <Field name="message" placeholder="Type your message..." />
            <Button type="submit" variant="contained">
              {loading ? <Loader /> : "Send"}
            </Button>
          </Stack>
        </form>
      </Stack>
    </ModalContainer>
  )
}

const Message = ({ sender, time, body, isMine }) => {
  const msgBodyColorClass = isMine ? "primary.main" : "gray"
  return (
    <Stack spacing={1}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1}>
          <Avatar sx={{ bgcolor: "primary.main", width: 30, height: 30 }}>
            {sender[0]?.toUpperCase()}
          </Avatar>
          <Typography>{sender}</Typography>
        </Stack>
        <span className="text-muted">{time}</span>
      </Stack>
      <Paper
        sx={{ px: 2, py: 1, bgcolor: msgBodyColorClass, borderRadius: 999 }}
      >
        {body}
      </Paper>
    </Stack>
  )
}

export default TicketChat

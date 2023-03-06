import {
  alpha,
  Avatar,
  Button,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import { useEffect, useState } from "react"
import Field from "../ui/Field"
import api from "../../config/axios"
import { toast } from "react-toastify"
import { useRef } from "react"
import Loader from "../ui/Loader"
import { formatDate } from "../../utilities/misc"
import Section from "../ui/Section"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import CloseIcon from "@mui/icons-material/Close"
import ArrowBackIcon from "@mui/icons-material/ArrowBack"
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded"

const TicketChat = ({
  ticket,
  setTicket,
  back,
  refresh,
  updateTicket,
  updating,
  manualPayment,
  ...props
}) => {
  const theme = useTheme()
  const msgContainer = useRef(null)

  const sendMessage = async (e) => {
    e.preventDefault()

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
  }

  useEffect(() => {
    if (msgContainer?.current) {
      msgContainer.current.scrollTop = msgContainer.current.scrollHeight
    }
  }, [ticket, msgContainer])

  const [fileUpload, setFileUpload] = useState(null)

  return (
    <Section
      sx={{ mb: 3, bgcolor: "#fafafa" }}
      title={
        <Stack
          direction={"row"}
          alignItems="center"
          justifyContent="space-between"
          sx={{ gap: 1 }}
        >
          {!manualPayment && (
            <IconButton onClick={props.onClose}>
              <ArrowBackIcon />
            </IconButton>
          )}
          {ticket.subject}{" "}
        </Stack>
      }
      end={
        ticket.status !== "close" && (
          <Button
            onClick={() => {
              updateTicket(ticket, "close")
              back()
            }}
            variant="contained"
            color="success"
            sx={{ color: "white", gap: 1 }}
          >
            {updating ? (
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
      <Stack>
        <Stack
          ref={msgContainer}
          sx={{
            height: "20rem",
            scrollBehavior: "smooth",
            overflow: "auto",
            px: 2,
            borderBottom: "1px solid #e0e0e0",
            pb: 2,
          }}
          spacing={3}
          mb={0.5}
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
          {/* <Stack direction="row" gap={2}>
            <Field name="message" placeholder="Type your message..." />
            <Button type="submit" variant="contained">
              {loading ? <Loader /> : "Send"}
            </Button>
          </Stack> */}
          <Stack
            direction={{
              xs: "column",
              sm: manualPayment ? "column" : "row",
            }}
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            mt={2}
          >
            <Stack
              direction={{ xs: "column", sm: "row", fontSize: 14 }}
              alignItems="center"
              sx={{ flex: "none" }}
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
            <Stack direction="row" sx={{ width: "100%" }}>
              <Field name="message" placeholder="Send a message..." />
              <IconButton type="submit">
                <ArrowForwardIcon />
              </IconButton>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Section>
  )
}

const Message = ({ time, body, isMine }) => {
  const msgBodyColorClass = "#fff"
  return (
    <Stack spacing={1} sx={{ pl: isMine ? 20 : 4, pr: isMine ? 0 : 20 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ position: "relative" }}
        >
          {isMine ? (
            <Typography variant="body2">You</Typography>
          ) : (
            <>
              <Avatar
                src="/assets/images/logo-small.svg"
                sx={{
                  width: 30,
                  height: 30,
                  position: "absolute",
                  top: 2,
                  left: "-2.3rem",
                }}
              />
              <Typography variant="body2" color="primary" fontWeight={600}>
                ShipDirect Admin{" "}
              </Typography>
              <VerifiedRoundedIcon color="primary" fontSize="small" />
            </>
          )}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {time}
        </Typography>
      </Stack>
      <Paper elevation={0} sx={{ px: 2, py: 1, bgcolor: msgBodyColorClass }}>
        {body}
      </Paper>
    </Stack>
  )
}

export default TicketChat

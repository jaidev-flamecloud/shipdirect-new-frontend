import PageContainer from "../components/containers/PageContainer"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import { Stack } from "@mui/system"
import { useEffect, useState } from "react"
import api from "../config/axios"
import LoadingContainer from "../components/containers/LoadingContainer"

const Faqs = () => {
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(true)

  const readFaq = async () => {
    setLoading(true)
    await api
      .get("/faq/read")
      .then((res) => setFaqs(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    readFaq()
  }, [])

  return (
    <PageContainer title="Frequently Asked Questions">
      <LoadingContainer loading={loading}>
        <Stack spacing={2}>
          {faqs.map((faq, i) => (
            <Accordion key={i}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ fontSize: 18 }}>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Stack>
      </LoadingContainer>
    </PageContainer>
  )
}

export default Faqs

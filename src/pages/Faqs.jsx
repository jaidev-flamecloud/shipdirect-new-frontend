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
  return (
    <PageContainer
      title="Frequently Asked Questions"
      desc="We’ve got answers to all your questions"
    >
      <FaqContent />
    </PageContainer>
  )
}

export const FaqContent = () => {
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
    <LoadingContainer loading={loading}>
      <Stack spacing={2}>
        {faqs.map((faq, i) => (
          <Accordion key={i}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontSize: 16, fontWeight: 500 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="text.secondary">{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Stack>
    </LoadingContainer>
  )
}

export default Faqs

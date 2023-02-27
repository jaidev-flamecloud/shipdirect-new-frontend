import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import LandingLayout from "../../components/containers/LandingLayout"
import LandingSection from "../../components/ui/LandingSection"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import api from "../../config/axios"
import LoadingContainer from "../../components/containers/LoadingContainer"

const LandingFaqs = () => {
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
  return "Shipdirect"
  // <LandingLayout>
  //   <LandingSection sx={{ pb: "17rem" }}>
  //     <Toolbar />
  //     <Stack spacing={2} alignItems="center" textAlign="center" mb={3}>
  //       <Typography variant="h4" sx={{ fontWeight: 600 }}>
  //         Frequently Asked Questions
  //       </Typography>
  //       <Typography
  //         variant="body2"
  //         sx={{ width: "60%" }}
  //         color="text.secondary"
  //       >
  //         We’ve answered all the most Frequently Asked ones
  //       </Typography>{" "}
  //     </Stack>
  //     <LoadingContainer loading={loading}>
  //       <Stack spacing={2}>
  //         {faqs.map((faq, i) => (
  //           <Accordion key={i}>
  //             <AccordionSummary expandIcon={<ExpandMoreIcon />}>
  //               <Typography sx={{ fontSize: 18 }}>{faq.question}</Typography>
  //             </AccordionSummary>
  //             <AccordionDetails>
  //               <Typography>{faq.answer}</Typography>
  //             </AccordionDetails>
  //           </Accordion>
  //         ))}
  //       </Stack>
  //     </LoadingContainer>
  //   </LandingSection>
  // </LandingLayout>
}

export default LandingFaqs

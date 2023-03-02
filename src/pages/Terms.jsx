import dayjs from "dayjs"
import React, { useEffect, useState } from "react"
import LoadingContainer from "../components/containers/LoadingContainer"
import PageContainer from "../components/containers/PageContainer"
import api from "../config/axios"

const Tos = () => {
  const [terms, setTerms] = useState([])
  const [loading, setLoading] = useState(true)

  const readFaq = async () => {
    setLoading(true)
    await api
      .get("/admin-settings/tos")
      .then((res) => setTerms(res.data.termsOfService))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    readFaq()
  }, [])

  return (
    <LoadingContainer loading={loading}>
      <PageContainer
        title="Terms of Service"
        desc={`Last Updated: ${dayjs(terms?.updatedAt).format("MMM DD, YYYY")}`}
      >
        {/* <pre style={{ fontFamily: "inherit", width: "100%" }}>{terms?.tos}</pre> */}
        {terms?.tos}
      </PageContainer>
    </LoadingContainer>
  )
}

export default Tos

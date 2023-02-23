import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded"
import { Button, Grid, IconButton, Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useUserContext } from "../App"
import StatusComp from "../components/common/StatusComp"
import LoadingContainer from "../components/containers/LoadingContainer"
import ConfirmDuplicate from "../components/modals/ConfirmDuplicate"
import Section from "../components/ui/Section"
import api from "../config/axios"
import env from "../config/env"
import routes from "../config/routes"
import { copyToClipboard, formatDate } from "../utilities/misc"

const ViewLabel = () => {
  const { id } = useParams()
  const location = useLocation()
  const queryString = location.search
  const params = new URLSearchParams(queryString)
  const isNew = params.get("new")
  const navigate = useNavigate()
  const [order, setOrder] = useState({})
  const [loading, setLoading] = useState(false)
  const [duplicating, setDuplicating] = useState(false)
  const [duplicateConfirmShow, setDuplicateConfirmShow] = useState(false)

  const getOrder = async () => {
    setLoading(true)
    await api
      .get("/order/read/" + id)
      .then((res) => setOrder(res.data.orderDetails))
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setLoading(false))
  }

  const downloadPdf = async () => {
    await api
      .get(`/order/download/${id}`, env.downloadConfig)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", "label.pdf")
        document.body.appendChild(link)
        link.click()
      })
      .catch((err) => toast.error(err.response.data.message))
  }

  const { refresh } = useUserContext()

  const duplicateOrder = async () => {
    setDuplicating(true)
    await api
      .post("/order/duplicate/" + id, {})
      .then((res) => {
        toast.success(res.data.message)
        refresh()
        setDuplicateConfirmShow(false)
        navigate(routes.LABELS)
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setDuplicating(false))
  }

  useEffect(() => {
    getOrder()
    // if order is new refresh data after 5s
    if (isNew) setTimeout(getOrder, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LoadingContainer loading={loading}>
      <Grid container sx={{ pt: 3 }}>
        <Grid item sm={6} sx={{ mx: "auto" }}>
          <Section
            title={isNew ? "Label Created Successfully" : "Label details"}
            end={
              isNew ? (
                <Link to={"/labels"} className="yellow-text">
                  <Button>Go to My Labels</Button>
                </Link>
              ) : (
                <Link to={"/labels"} className="yellow-text">
                  <Button>Back</Button>
                </Link>
              )
            }
          >
            <Grid container spacing={2} mb={2}>
              <Detail label="ID" val={order?._id} half />
              <Detail
                half
                label="Tracking Number"
                val={
                  <Stack direction="row" alignItems={"center"} gap={2}>
                    {order?.tracking}
                    <IconButton
                      onClick={() => copyToClipboard(order?.tracking)}
                    >
                      <ContentCopyRoundedIcon />
                    </IconButton>
                  </Stack>
                }
              />
            </Grid>

            <Grid container spacing={2}>
              <Detail label="Type" val={order?.labelType?.name} />
              <Detail label="Weight" val={order?.Weight + " lbs"} />
              <Detail
                label="Status"
                val={<StatusComp status={order?.status} />}
              />
              <Detail
                label="Date and Time"
                val={formatDate(order?.createdAt)}
              />
              <Detail
                label="Sender"
                val={
                  <span>
                    {order?.FromName}
                    <br /> {order?.FromStreet}
                    <br />
                    {order?.FromStreet2 ? (
                      <>
                        {order?.FromStreet2}
                        <br />
                      </>
                    ) : (
                      ""
                    )}
                    {order?.FromCity}
                    <br /> {order?.FromState}, {order?.FromZip}
                    <br />
                    {order?.FromPhone}
                  </span>
                }
              />
              <Detail
                label="Recipient"
                val={
                  <span>
                    {order?.ToName}
                    <br /> {order?.ToStreet}
                    <br />
                    {order?.ToStreet2 ? (
                      <>
                        {order?.ToStreet2}
                        <br />
                      </>
                    ) : (
                      ""
                    )}
                    {order?.ToCity}
                    <br /> {order?.ToState}, {order?.ToZip}
                    <br />
                    {order?.ToPhone}
                  </span>
                }
              />
            </Grid>
            <Detail
              label="Tracking status"
              desc={order?.statusMessage || "N/A"}
            />
            <Stack direction="row" justifyContent={"space-between"} mt={3}>
              <Button variant="contained">${order?.price?.toFixed(2)}</Button>
              {order?.status === "completed" && (
                <Stack direction="row" gap={2}>
                  <Button
                    onClick={() => downloadPdf(order?._id)}
                    variant="outlined"
                  >
                    Download
                  </Button>
                  <Button
                    onClick={() => setDuplicateConfirmShow(true)}
                    variant="outlined"
                  >
                    Duplicate
                  </Button>
                </Stack>
              )}
            </Stack>
          </Section>
        </Grid>
        <ConfirmDuplicate
          open={duplicateConfirmShow}
          onClose={() => setDuplicateConfirmShow(false)}
          action={() => duplicateOrder(order?._id)}
          loading={duplicating}
        />
      </Grid>
    </LoadingContainer>
  )
}

const Detail = ({ label, val, desc, half }) => (
  <Grid item xs={half ? 12 : 6} sm={half ? 6 : 4}>
    <Stack style={{ fontSize: 15 }} gap={1}>
      <Typography sx={{ fontSize: 14 }} color="text.secondary">
        {label}
      </Typography>
      <Typography>{val}</Typography>
      <Typography>{desc}</Typography>
    </Stack>
  </Grid>
)

export default ViewLabel

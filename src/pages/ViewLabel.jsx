import { Button, Divider, Stack, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { toast } from "react-toastify"
import { useUserContext } from "../App"
import StatusComp from "../components/common/StatusComp"
import LoadingContainer from "../components/containers/LoadingContainer"
import PageContainer from "../components/containers/PageContainer"
import ConfirmDuplicate from "../components/modals/ConfirmDuplicate"
import Section from "../components/ui/Section"
import api from "../config/axios"
import env from "../config/env"
import routes from "../config/routes"
import { copyToClipboard, formatDate } from "../utilities/misc"
import NorthEastIcon from "@mui/icons-material/NorthEast"
import ConfirmRequestRefund from "../components/modals/ConfirmRequestRefund"

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
  const [loader, setLoader] = useState(false)
  const [requestRefundShow, setRequestRefundShow] = useState(false)

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

  const requestRefund = async (message, id) => {
    setLoader(true)

    const params = {
      message,
    }

    await api
      .post("/order/request-refund/" + id, params)
      .then((res) => {
        toast.success(res.data.message)
        setLoader(false)
        setRequestRefundShow(false)
        getOrder()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        setLoader(false)
      })
  }

  useEffect(() => {
    getOrder()
    // if order is new refresh data after 5s
    if (isNew) setTimeout(getOrder, 5000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <LoadingContainer loading={loading}>
      <PageContainer>
        <Section
          title={isNew ? "Label created successfully" : "Label Details"}
          end={
            <Link to={"/labels"} className="yellow-text">
              <Button>View all labels</Button>
            </Link>
          }
        >
          <Divider sx={{ bgcolor: "rgba(0,0,0,0.2)" }} />
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-between"
            mt={2}
          >
            <DetailComp label="Type" val={order?.labelType?.name} />
            <DetailComp label="Weight" val={order?.Weight + " lbs"} />

            <DetailComp
              label="Date and Time"
              val={formatDate(order?.createdAt)}
            />
            <DetailComp label="ID" val={order?._id} half />
            <DetailComp
              half
              label="Tracking Number"
              val={
                <Button onClick={() => copyToClipboard(order?.tracking)}>
                  {order?.tracking} <NorthEastIcon sx={{ fontSize: 13 }} />
                </Button>
              }
            />
            <DetailComp
              sx={{ color: "success.main" }}
              label="Amount"
              val={<>${order?.price?.toFixed(2)}</>}
            />
            <DetailComp
              label="Status"
              val={<StatusComp status={order?.status} />}
            />
          </Stack>
          <DetailComp
            sx={{ mb: 2 }}
            label="Notes:"
            val={order?.statusMessage || "N/A"}
          />
          <Divider sx={{ bgcolor: "rgba(0,0,0,0.2)" }} />
          <Typography mt={2}>Sender's Details</Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-between"
            mt={1}
            mb={2}
          >
            <DetailComp label="Contact name" val={order?.FromName} />
            <DetailComp label="Address Line A" val={order?.FromStreet} />
            <DetailComp label="Address Line B" val={order?.FromStreet2} />
            <DetailComp label="Phone Number" val={order?.FromPhone || "N/A"} />
            <DetailComp
              label="Company Name"
              val={order?.FromCompany || "None"}
            />
            <DetailComp label="Country" val={order?.FromCountry} />
            <DetailComp label="City" val={order?.FromCity} />
            <DetailComp label="State" val={order?.FromState} />
            <DetailComp label="Zip" val={order?.FromZip} />
          </Stack>
          <Divider sx={{ bgcolor: "rgba(0,0,0,0.2)" }} />
          <Typography mt={2}>Reciever's Details</Typography>
          <Stack
            direction="row"
            spacing={3}
            justifyContent="space-between"
            mt={1}
            mb={2}
          >
            <DetailComp label="Contact name" val={order?.ToName} />
            <DetailComp label="Address Line A" val={order?.ToStreet} />
            <DetailComp label="Address Line B" val={order?.ToStreet2} />
            <DetailComp label="Phone Number" val={order?.ToPhone || "N/A"} />
            <DetailComp label="Company Name" val={order?.ToCompany || "None"} />
            <DetailComp label="Country" val={order?.ToCountry} />
            <DetailComp label="City" val={order?.ToCity} />
            <DetailComp label="State" val={order?.ToState} />
            <DetailComp label="Zip" val={order?.ToZip} />
          </Stack>
          <Divider sx={{ bgcolor: "rgba(0,0,0,0.2)" }} />
          <Stack direction="row" alignItems={"center"} spacing={2} mt={2}>
            <Typography>Actions</Typography>
            <Button
              onClick={() => downloadPdf(order?._id)}
              variant="outlined"
              color="warning"
            >
              Download
            </Button>
            <Button
              onClick={() => setDuplicateConfirmShow(true)}
              variant="outlined"
              color="success"
            >
              Duplicate
            </Button>
            <Button
              onClick={() => setRequestRefundShow(true)}
              variant="outlined"
              color="error"
            >
              Request Refund
            </Button>
            <Button variant="outlined" color="primary">
              Track
            </Button>
          </Stack>
        </Section>
      </PageContainer>
      <ConfirmDuplicate
        open={duplicateConfirmShow}
        onClose={() => setDuplicateConfirmShow(false)}
        action={() => duplicateOrder(order?._id)}
        loading={duplicating}
      />
      <ConfirmRequestRefund
        open={requestRefundShow}
        onClose={() => setRequestRefundShow(false)}
        action={(e) => requestRefund(e, order._id)}
        loading={loader}
      />
    </LoadingContainer>
  )
}

const DetailComp = ({ label, val, desc, sx }) => (
  <Stack sx={{ fontSize: 15, ...sx }} gap={0.5}>
    <Typography sx={{ fontSize: 14 }} color="text.secondary">
      {label}
    </Typography>
    <Typography fontWeight={500}>{val}</Typography>
    <Typography fontWeight={500}>{desc}</Typography>
  </Stack>
)

export default ViewLabel

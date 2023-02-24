import {
  Button,
  Checkbox,
  Chip,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
  useTheme,
} from "@mui/material"
import { useEffect, useState } from "react"
import PageContainer from "../components/containers/PageContainer"
import CustomSelect from "../components/ui/CustomSelect"
import CustomTable from "../components/ui/CustomTable"
import Field from "../components/ui/Field"
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded"
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded"
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded"
import ReplyRoundedIcon from "@mui/icons-material/ReplyRounded"
import api from "../config/axios"
import env from "../config/env"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import ConfirmDuplicate from "../components/modals/ConfirmDuplicate"
import ConfirmRequestRefund from "../components/modals/ConfirmRequestRefund"
import StatusComp from "../components/common/StatusComp"
import { formatDate } from "../utilities/misc"
import dayjs from "dayjs"
import DateFilter from "../components/common/DateFilter"
import { useUserContext } from "../App"

const filters = [
  ["All", "All"],
  ["Paid", "paid"],
  ["Fulfilled", "completed"],
  ["Cancelled", "cancelled"],
]

const FilterTabs = ({ filter, setFilter }) => {
  const theme = useTheme()
  return (
    <Stack direction="row" spacing={2}>
      {filters.map((f, i) => (
        <Typography
          onClick={() => setFilter(i)}
          sx={{
            cursor: "pointer",
            p: 1,
            color: i !== filter && "silver",
            borderBottom:
              i === filter && `solid 2px ${theme.palette.primary.main}`,
          }}
        >
          {f[0]}
        </Typography>
      ))}
    </Stack>
  )
}

const Labels = () => {
  const [limit, setLimit] = useState("10")
  const [loading, setLoading] = useState(false)
  const [orders, setOrders] = useState([])
  const [filter, setFilter] = useState(0)
  const [sort, setSort] = useState("des")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [search, setSearch] = useState("")
  const [loader, setLoader] = useState("")
  const [selectedOrders, setSelectedOrders] = useState([])
  const [duplicateConfirmShow, setDuplicateConfirmShow] = useState(false)
  const [order, setOrder] = useState({})
  const [requestRefundShow, setRequestRefundShow] = useState(false)

  const getOrders = async (resetDate = false) => {
    setLoading(true)
    await api
      .get(
        `/order/read?status=${
          filters[filter][1]
        }&sort=${sort}&page=${page}&limit=${limit}&search=${search}&from=${
          dateRange.startDate && !resetDate
            ? dayjs(dateRange.startDate).format("YYYY-MM-DD")
            : ""
        }&to=${
          dateRange.endDate && !resetDate
            ? dayjs(dateRange.endDate).format("YYYY-MM-DD")
            : ""
        }`
      )
      .then((res) => {
        setOrders(res.data.orders)
        setTotalPages(res.data.totalPages)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }

  const downloadPdf = async (id) => {
    await api
      .get(`/order/download/${id}`, env.downloadConfig)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", "label.pdf") //or any other extension
        document.body.appendChild(link)
        link.click()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  const { refresh } = useUserContext()

  const duplicateOrder = async (id) => {
    setLoader(true)

    await api
      .post("/order/duplicate/" + id, {})
      .then((res) => {
        toast.success(res.data.message)
        refresh()
        setLoader(false)
        setDuplicateConfirmShow(false)
        getOrders()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        setLoader(false)
      })
  }

  const downloadPdfAll = async (e) => {
    e.preventDefault()

    const params = {
      orders: selectedOrders,
    }

    await api
      .post(`/order/bulk-download-selected`, params, env.downloadConfig)
      .then((response) => {
        //  download zip file
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", "label.zip") //or any other extension
        document.body.appendChild(link)
        link.click()
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.message)
        }
      })
  }

  const downloadPdfAllPDF = async (e) => {
    e.preventDefault()

    const params = {
      orders: selectedOrders,
    }

    await api
      .post(`/order/bulk-download-pdf`, params, env.downloadConfig)
      .then((response) => {
        //  download zip file
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", "label.pdf") //or any other extension
        document.body.appendChild(link)
        link.click()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }

  // request refund
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
        getOrders()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        setLoader(false)
      })
  }

  useEffect(() => {
    getOrders()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, sort, page, limit, search])

  // date range plugin

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  })

  return (
    <PageContainer title="My Labels" desc="Manage all your ordered labels">
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
        <Field
          placeholder="Search using From Name, To Name, or Tracking ID"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <DateFilter
          dateRange={dateRange}
          setDateRange={setDateRange}
          apply={getOrders}
        />
      </Stack>

      <CustomTable
        start={<FilterTabs filter={filter} setFilter={setFilter} />}
        end={
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1}
            alignItems="center"
            sx={{ fontSize: 14 }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <span style={{ flex: "none" }}>Sort by :</span>
              <CustomSelect
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                options={[
                  {
                    label: "Date Acscending",
                    value: "asc",
                  },
                  {
                    label: "Date Descending",
                    value: "des",
                  },
                ]}
              />
              <span style={{ flex: "none" }}>View orders :</span>
              <CustomSelect
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                options={["10", "25", "50"].map((x) => ({
                  label: x,
                  value: x,
                }))}
              />
            </Stack>
            {!!selectedOrders.length && (
              <Chip
                label={
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ fontSize: 14 }}
                  >
                    <span style={{ flex: "none" }}>
                      Selected : {selectedOrders.length}
                    </span>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={downloadPdfAllPDF}
                    >
                      PDF
                    </Button>
                    <Button
                      variant="contained"
                      color="success"
                      size="small"
                      onClick={downloadPdfAll}
                    >
                      ZIP
                    </Button>
                  </Stack>
                }
                sx={{ height: "100%", py: 1 }}
              />
            )}
          </Stack>
        }
        fields={[
          <Checkbox
            checked={selectedOrders.length === orders.length}
            onChange={(e) => {
              if (e.target.checked)
                setSelectedOrders(orders.map((order) => order._id))
              else setSelectedOrders([])
            }}
          />,
          "DATE AND TIME",
          "FROM",
          "TO",
          "TYPE",
          "TRACKING ID",
          "AMOUNT",
          "STATUS",
          "TRACKING STATUS",
          "ACTIONS",
        ]}
        dense
        loading={loading}
        pagination
        count={totalPages}
        page={page}
        setPage={setPage}
      >
        {orders.map((order, i) => (
          <TableRow key={i}>
            <TableCell>
              <Checkbox
                checked={selectedOrders.includes(order._id)}
                onChange={(e) => {
                  if (e.target.checked)
                    setSelectedOrders([...selectedOrders, order._id])
                  else
                    setSelectedOrders(
                      selectedOrders.filter((id) => id !== order._id)
                    )
                }}
              />
            </TableCell>
            <TableCell>{formatDate(order.createdAt)}</TableCell>
            <TableCell>{order.FromName}</TableCell>
            <TableCell>{order.ToName}</TableCell>
            <TableCell>{order.labelType?.name}</TableCell>
            <TableCell>{order.tracking}</TableCell>
            <TableCell>{"$" + order?.price?.toFixed(2)}</TableCell>
            <TableCell>
              <StatusComp status={order?.status} />
            </TableCell>
            <TableCell>
              {order.statusMessage?.split(",")[0]?.split("[")[1] ||
                order.statusMessage ||
                "N/A"}
            </TableCell>
            <TableCell>
              <Stack direction="row">
                <Link to={"/labels/" + order._id}>
                  <IconButton color="primary" title="View Details">
                    <VisibilityRoundedIcon fontSize="small" />
                  </IconButton>
                </Link>
                {order.status === "completed" && (
                  <>
                    <IconButton
                      title="Download"
                      onClick={() => downloadPdf(order._id)}
                      color="warning"
                    >
                      <DownloadRoundedIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      title="Duplicate"
                      onClick={() => {
                        setOrder(order)
                        setDuplicateConfirmShow(true)
                      }}
                      color="success"
                    >
                      <ContentCopyRoundedIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      title="Request refund"
                      onClick={() => {
                        setOrder(order)
                        setRequestRefundShow(true)
                      }}
                      color="error"
                    >
                      <ReplyRoundedIcon fontSize="small" />
                    </IconButton>
                  </>
                )}
              </Stack>
            </TableCell>
          </TableRow>
        ))}
      </CustomTable>
      <ConfirmDuplicate
        open={duplicateConfirmShow}
        onClose={() => setDuplicateConfirmShow(false)}
        action={() => duplicateOrder(order._id)}
        loading={loader}
      />
      <ConfirmRequestRefund
        open={requestRefundShow}
        onClose={() => setRequestRefundShow(false)}
        action={(e) => requestRefund(e, order._id)}
        loading={loader}
      />
    </PageContainer>
  )
}

export default Labels

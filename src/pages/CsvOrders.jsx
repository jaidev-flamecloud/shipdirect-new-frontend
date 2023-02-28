import {
  alpha,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
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
import Section from "../components/ui/Section"
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded"
import OptionCard from "../components/common/OptionCard"
import api from "../config/axios"
import { toast } from "react-toastify"
import env from "../config/env"
import Loader from "../components/ui/Loader"
import { formatDate } from "../utilities/misc"
import { useUserContext } from "../App"

const pricingItems = ["ups", "usps", "fedex"]

const CsvOrders = () => {
  const [selectedCourier, setSelectedCourier] = useState(pricingItems[0])

  const [loader, setLoader] = useState(false)
  const [csvpaydisabled, setCsvpaydisabled] = useState(true)
  const [csvPrice, setCsvPrice] = useState(0)
  const [validateLoader, setValidateLoader] = useState(false)
  const [CSV, setCSV] = useState("")
  const [types, setTypes] = useState([])
  const [activeUspsType, setActiveUspsType] = useState({})
  const [Weight, setWeight] = useState(0)
  const [csvOrders, setCsvOrders] = useState([])
  const [ordersLoading, setOrdersLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const theme = useTheme()

  useEffect(() => {
    readLabelTypes()
  }, [])

  useEffect(() => {
    readCsvOrders()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const readLabelTypes = async () => {
    await api
      .get("/labeltype/read")
      .then((res) => {
        setTypes(res.data.labelTypes)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const validateCSV = async (e) => {
    e.preventDefault()

    if (!activeUspsType) {
      toast.error("Please select a label type")
      return
    }

    if (Weight === 0) {
      toast.error("Please enter a weight")
      return
    }
    setValidateLoader(true)

    const params = new FormData()
    params.append("csv", CSV)
    params.append("type", activeUspsType._id)
    params.append("weight", Weight)

    await api
      .post("/order/validatecsv", params)
      .then((res) => {
        setValidateLoader(false)
        setCsvPrice(res.data.price)
        setCsvpaydisabled(false)
        toast.success("CSV validated successfully")
      })
      .catch((err) => {
        setValidateLoader(false)
        toast.error(err.response.data.message)
      })
  }

  const { refresh } = useUserContext()

  const createOrderFromCSV = async (e) => {
    e.preventDefault()
    setCsvpaydisabled(true)
    setLoader(true)

    const params = new FormData()
    params.append("csv", CSV)
    params.append("type", activeUspsType._id)
    params.append("weight", Weight)
    params.append("total_price", csvPrice)

    await api
      .post("/order/createOrderFromCSV", params)
      .then(() => {
        toast.success("Orders created successfully")
        refresh()
        setCsvpaydisabled(true)
        setCSV("")
        setWeight(0)
        setCsvPrice(0)
        setLoader(false)
        readCsvOrders()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        setLoader(false)
      })
  }

  const readCsvOrders = async () => {
    setOrdersLoading(true)
    await api
      .get(`/order/readcsvOrders?page=${page}&limit=7`)
      .then((res) => {
        setTotalPages(res.data.totalPages)
        setCsvOrders(res.data.csvOrders)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setOrdersLoading(false))
  }

  const downloadZip = async (id) => {
    await api
      .get(`/order/bulk-download/${id}`, env.downloadConfig)
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement("a")
        link.href = url
        link.setAttribute("download", "label.zip") //or any other extension
        document.body.appendChild(link)
        link.click()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
  }
  return (
    <PageContainer
      title="CSV Orders"
      desc="Place orders in bulk using CSV File"
      end={
        <a href="/assets/sample.csv" download>
          <Button variant="contained">Download Sample CSV</Button>
        </a>
      }
    >
      <Section sx={{ mb: 4 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={1}
          alignItems={{ xs: "stretch", sm: "center" }}
          mb={2}
        >
          <FormLabel style={{ flex: "none", fontWeight: 600, color: "#000" }}>
            Select Courier
          </FormLabel>
          <Grid container gap={2}>
            {pricingItems.map((p) => (
              <OptionCard
                imgSrc={
                  "/assets/images/" +
                  p +
                  (theme.palette.mode === "dark" ? "2" : "") +
                  ".svg"
                }
                name={p}
                active={selectedCourier === p}
                activate={() => setSelectedCourier(p)}
              />
            ))}
          </Grid>
        </Stack>
        <Grid container spacing={3} mb={2}>
          <Grid item xs={12} sm={6}>
            <CustomSelect
              label="Select Service"
              name="labeltype"
              onChange={(e) => {
                setActiveUspsType(
                  types.find((type) => type._id === e.target.value)
                )
              }}
              options={types
                .filter((type) =>
                  type.name.toLowerCase().includes(selectedCourier)
                )
                .map((type) => ({
                  label: type.name,
                  value: type._id,
                }))}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Field
              label="Package Weight (70 Lbs Max)*"
              type="number"
              value={Weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FormControl sx={{ height: "100%" }} fullWidth>
              <FormLabel sx={{ fontWeight: 600, color: "#000", mb: 0.6 }}>
                Upload CSV
              </FormLabel>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  height: "100%",
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  borderStyle: "dashed",
                }}
              >
                {CSV?.name || "+ Upload CSV File"}

                <input
                  accept=".csv"
                  type="file"
                  id="csv"
                  hidden
                  name="csv"
                  required
                  onChange={(e) => {
                    setCSV(e.target.files[0])
                  }}
                />
              </Button>
            </FormControl>
          </Grid>
        </Grid>
        <Divider />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          mt={2}
          sx={{ fontWeight: 500 }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              disabled={validateLoader}
              onClick={validateCSV}
              variant="outlined"
              color="success"
              sx={{
                mr: 2,
                flex: "none",
                bgcolor: alpha(theme.palette.success.main, 0.1),
                fontWeight: 600,
              }}
            >
              {validateLoader ? <Loader /> : "Validate CSV"}
            </Button>
            {/* <span style={{ color: "#3ABF7C" }}>
              Your CSV is successfully validated
            </span> */}
          </div>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span style={{ color: "silver" }}>Your Total :</span>
            <Typography color="primary" fontWeight={600}>
              {typeof csvPrice === "number" ? (
                <>${csvPrice?.toFixed(2)}</>
              ) : (
                "N/A"
              )}
            </Typography>
            <Button
              disabled={csvpaydisabled || typeof csvPrice !== "number"}
              onClick={createOrderFromCSV}
              variant="contained"
              sx={{ ml: 1, px: 3 }}
            >
              {loader ? <Loader /> : "Create Order"}
            </Button>
          </div>
        </Stack>
      </Section>
      {/* <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mb={2}>
        <Field placeholder="Search using Order ID" />
        <Box
          sx={{
            width: { sm: "40%" },
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <span style={{ flex: "none" }}>Filter by Date</span>
          <CustomSelect
            options={["US", "CA"].map((e) => ({ label: e, value: e }))}
          />
        </Box>
      </Stack> */}

      <CustomTable
        fields={[
          "ORDER ID ",
          "ORDER DATE",
          "NO. OF ORDERS",
          "LABEL TYPE",
          "PRICE",
          "ACTION",
        ]}
        loading={ordersLoading}
        count={totalPages}
        page={page}
        setPage={setPage}
      >
        {csvOrders?.map((order) => (
          <TableRow>
            <TableCell>{order._id}</TableCell>
            <TableCell>{formatDate(order.createdAt)}</TableCell>
            <TableCell>{order.orders?.length}</TableCell>
            <TableCell>{order.labelType?.name}</TableCell>
            <TableCell>${order.price}</TableCell>
            <TableCell>
              <IconButton
                color="warning"
                onClick={() => {
                  downloadZip(order._id)
                }}
              >
                <DownloadRoundedIcon fontSize="small" />
              </IconButton>
            </TableCell>
          </TableRow>
        ))}
      </CustomTable>
    </PageContainer>
  )
}

export default CsvOrders

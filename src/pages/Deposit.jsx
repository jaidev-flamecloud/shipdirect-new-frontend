import {
  Box,
  Button,
  Chip,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material"
import { useEffect, useState } from "react"
import PageContainer from "../components/containers/PageContainer"
import CustomTable from "../components/ui/CustomTable"
import Field from "../components/ui/Field"
import Section from "../components/ui/Section"
import OptionCard from "../components/common/OptionCard"
import api from "../config/axios"
import { toast } from "react-toastify"
import LoadingContainer from "../components/containers/LoadingContainer"
import { useUserContext } from "../App"
import Loader from "../components/ui/Loader"
import { copyToClipboard, formatDate } from "../utilities/misc"

import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded"
import StatusComp from "../components/common/StatusComp"
import env from "../config/env"

const gatewayMap = {
  Venmo: {
    icon: "venmo",
    bg: "#008CFF",
  },
  Zelle: {
    icon: "zelle",
    bg: "#6C1CD3",
  },
  "APPLE PAY": { icon: "apple pay", bg: "#FFF" },
}

const paymentMethods = [
  {
    name: "Cash App",
    val: "cashapp",
    imgSrc: "/assets/images/cashapp.svg",
  },
  {
    name: "Stripe",
    val: "stripe",
    imgSrc: "/assets/images/stripe.svg",
  },
]

const presetAmounts = [5, 25, 50, 100, 150, 250, 500, 1000]

const Deposit = () => {
  const { user } = useUserContext()
  const [deposits, setDeposits] = useState([])
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [showCashApp, setShowCashApp] = useState(false)

  const [loading, setLoading] = useState(false)
  const [cashAppID, setCashAppID] = useState("")
  const [url, setUrl] = useState("")
  const [amount, setAmount] = useState(0)
  const [invoice, setInvoice] = useState({})
  const [cashLoader, setCashLoader] = useState("")
  const [qr, setQr] = useState("")
  const [showCrypto, setShowCrypto] = useState(false)
  const [selectedPayementMethod, setSelectedPayementMethod] = useState(
    paymentMethods[0].val
  )
  const [depositsLoading, setDepositsLoading] = useState(false)
  const [CryptoData, setCryptoData] = useState({})
  const [cryptoCoin, setCryptoCoin] = useState([])
  const [cryptoLoader, setCryptoLoader] = useState(false)
  const [cryptoQr, setCryptoQr] = useState("")
  const [cryptoID, setCryptoID] = useState("")
  const [minConfirmations, setMinConfirmations] = useState("")
  const [minAmount, setMinAmount] = useState("")
  const [coinLoader, setCoinLoader] = useState(false)
  const [paySettings, setPaySettings] = useState({})
  const [gateway, setGateway] = useState({})
  const [showGateway, setShowGateway] = useState(false)

  const readCrypto = async () => {
    setCoinLoader(true)
    await api("/dashboard/crypto-coin")
      .then((res) => {
        setCryptoCoin(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setCoinLoader(false))
  }

  const readCashApp = async () => {
    await api("/invoice/read-cashapp")
      .then((res) => {
        setCashAppID(res.data.credentials.cashappId)
        setQr(res.data.credentials.qr)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getGateways = async () => {
    await api
      .get("/admin-settings/topup")
      .then((res) => {
        console.log(res.data.topup)
        setPaySettings(res.data.topup)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    readCrypto()
    readCashApp()
    getGateways()
  }, [])

  const getDeposits = async () => {
    setDepositsLoading(true)
    await api
      .get(`/invoice/read?page=${page}&limit=${8}`)
      .then((res) => {
        setDeposits(res.data.invoices)
        setTotalPages(res.data.totalPages)
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setDepositsLoading(false))
  }

  const AddBalance = async (e) => {
    e.preventDefault()
    setLoading(true)

    const data = {
      amount: e.target.amount.value,
      type: selectedPayementMethod,
    }

    await api
      .post("/invoice/create", data)
      .then((res) => {
        setLoading(false)
        getDeposits()
        if (data.type === "stripe") {
          window.location.href = res.data.session.url
        }
        if (data.type === "cashapp") {
          setUrl(res.data.data.hosted_url)
          setInvoice(res.data.data.invoice)
          setShowCashApp(true)
        } else {
          setInvoice(res.data.data.invoice)
          setShowGateway(true)
        }
      })
      .catch((err) => {
        setLoading(false)
        toast.error(err.response.data.message)
        console.log(err)
      })
  }

  const verifyCashAppPayment = async (e) => {
    e.preventDefault()
    setCashLoader(true)

    const params = {
      invoice: invoice._id,
      cashAppUrl: e.target.checkurl.value,
    }

    await api
      .post(`/invoice/verifyCashApp`, params)
      .then((res) => {
        setCashLoader(false)
        toast.success(res.data.message)
        getDeposits()
      })
      .catch((err) => {
        setCashLoader(false)
        toast.error(err.response.data.message)
        console.log(err)
      })
  }

  //  add balance Via Crypto Currency
  const AddBalanceCrypt = async (c) => {
    const params = {
      ticker: c,
    }
    try {
      setCryptoLoader(true)
      await api
        .post("/invoice/cryptoApi-init", params)
        .then((res) => {
          setCryptoID(res.data.address)
          setMinConfirmations(res.data.confirmations)
          setMinAmount(res.data.min)
          setCryptoQr(res.data.qrcode)
          setCryptoLoader(false)
          const bootstrap = window.bootstrap
          var myModal = new bootstrap.Modal(
            document.getElementById("CryptCoin"),
            {
              keyboard: false,
            }
          )
          myModal.show()
        })
        .catch((err) => {
          console.log(err)
          setCryptoLoader(false)
        })
    } catch (err) {
      setCryptoLoader(false)
      console.log(err)
    }
  }

  const addComment = async (e) => {
    e.preventDefault()

    const params = {
      invoice: invoice._id,
      comment: e.target.comment.value,
    }

    setCashLoader(true)

    await api
      .put(`/invoice/comment`, params)
      .then((res) => {
        setCashLoader(false)
        toast.success(res.data.message)
        getDeposits()
        setShowGateway(false)
      })
      .catch((err) => {
        setCashLoader(false)
        toast.error(err.response.data.message)
        console.log(err)
      })
  }

  useEffect(() => {
    getDeposits()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  const [presetAmount, setPresetAmount] = useState(null)

  useEffect(() => {
    if (presetAmount) {
      setAmount(presetAmount.toFixed(2))
    }
  }, [presetAmount])

  return (
    <PageContainer
      title="Deposit Balance"
      desc="Add Balance to your account for faster checkouts"
    >
      {showGateway ? (
        <GatewayConfirm
          back={() => setShowGateway(false)}
          gateway={gateway}
          cashLoader={cashLoader}
          addComment={addComment}
        />
      ) : showCrypto ? (
        <CryptoConfirm
          back={() => setShowCrypto(false)}
          CryptoData={CryptoData}
          cryptoID={cryptoID}
          cryptoQr={cryptoQr}
          minConfirmations={minConfirmations}
          minAmount={minAmount}
          cryptoLoader={cryptoLoader}
        />
      ) : showCashApp ? (
        <CashAppConfirm
          cashAppID={cashAppID}
          amount={amount}
          url={url}
          back={() => setShowCashApp(false)}
          qr={qr}
          invoice={invoice}
          cashLoader={cashLoader}
          verifyCashAppPayment={verifyCashAppPayment}
        />
      ) : (
        <>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <form onSubmit={AddBalance}>
                <Section sx={{ mb: 2 }}>
                  <Grid container mb={2} spacing={2}>
                    <Grid item xs={12} sm={4}>
                      <Field
                        label="Amount to add"
                        placeholder="0.00"
                        type="number"
                        name="amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                      />
                    </Grid>

                    <Grid item xs={12} sm={8}>
                      <FormControl fullWidth>
                        <FormLabel sx={{ fontWeight: 500, mb: 0.6 }}>
                          Quick add
                        </FormLabel>
                        <Stack
                          direction="row"
                          spacing={1}
                          flexWrap="wrap"
                          gap={1}
                        >
                          {presetAmounts.map((amount, i) => (
                            <OptionCard
                              key={i}
                              name={"$" + amount.toFixed(2)}
                              active={presetAmount === amount}
                              activate={() => setPresetAmount(amount)}
                              border
                            />
                          ))}
                        </Stack>
                      </FormControl>
                    </Grid>

                    <Grid item xs={12}>
                      <FormControl fullWidth>
                        <FormLabel sx={{ fontWeight: 500, mb: 0.6 }}>
                          Choose Payment Method
                        </FormLabel>
                        <Grid container spacing={1}>
                          {paymentMethods.map((method, i) => (
                            <Grid item xs={6} sm={1.5}>
                              <OptionCard
                                key={i}
                                {...method}
                                active={selectedPayementMethod === method.val}
                                activate={() =>
                                  setSelectedPayementMethod(method.val)
                                }
                                border
                              />
                            </Grid>
                          ))}
                          {paySettings?.manualMethods?.map((gateway, i) =>
                            gateway.method ? (
                              <Grid item xs={6} sm={1.5}>
                                <OptionCard
                                  key={i}
                                  name={gateway.method}
                                  val={gateway.method}
                                  imgSrc={
                                    "/assets/images/" +
                                    gatewayMap[gateway.method].icon +
                                    ".svg"
                                  }
                                  active={
                                    selectedPayementMethod === gateway.method
                                  }
                                  activate={() => {
                                    setSelectedPayementMethod(gateway.method)
                                    setGateway(gateway)
                                  }}
                                  border
                                />
                              </Grid>
                            ) : (
                              ""
                            )
                          )}
                        </Grid>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={8}>
                      <FormControl fullWidth>
                        <FormLabel sx={{ fontWeight: 500, mb: 0.6 }}>
                          Pay using cryptocurrency
                        </FormLabel>
                        <LoadingContainer loading={coinLoader}>
                          <Grid container spacing={1} sx={{ mt: 2 }}>
                            {cryptoCoin?.map((coin) => (
                              <Grid item xs={6} sm={1.5}>
                                <OptionCard
                                  sx={{ px: 2.5 }}
                                  key={coin.id}
                                  name={coin.name}
                                  onClick={() => {
                                    setShowCrypto(true)
                                    setCryptoData(coin)
                                    AddBalanceCrypt(coin.ticker)
                                    setShowCrypto(true)
                                  }}
                                  imgSrc={env.BASE_API_URL + "/" + coin.logo}
                                />
                              </Grid>
                            ))}
                          </Grid>
                        </LoadingContainer>
                      </FormControl>
                    </Grid>
                  </Grid>
                  <Divider />
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="space-between"
                    alignItems="center"
                    mt={2}
                  >
                    <Chip
                      label="Earn 5% bonus on selecting Crypto Payments"
                      color="primary"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: { xs: "column", sm: "row" },
                        gap: "10px",
                        alignItems: "center",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "center",
                        }}
                      >
                        <span style={{ color: "silver", flex: "none" }}>
                          Your Resulting Balance :
                        </span>
                        <Typography color="primary">
                          $
                          {(user.balance + parseFloat(amount || "0")).toFixed(
                            2
                          )}
                        </Typography>
                      </div>

                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ ml: 1, px: 3 }}
                      >
                        {loading ? <Loader /> : "Add Balance"}
                      </Button>
                    </Box>
                  </Stack>
                </Section>
              </form>
            </Grid>
          </Grid>

          <CustomTable
            title="Deposit History"
            fields={["#", "DATE AND TIME", "METHOD", "AMOUNT", "STATUS"]}
            loading={depositsLoading}
            pagination
            count={totalPages}
            page={page}
            setPage={setPage}
          >
            {deposits.map((deposit, i) => (
              <TableRow>
                <TableCell> {i + 1}</TableCell>
                <TableCell> {formatDate(deposit.createdAt)} </TableCell>
                <TableCell>
                  {" "}
                  {deposit.payment_method === "coinbase"
                    ? "Coinbase"
                    : deposit.payment_method === "cashapp"
                    ? "CashApp"
                    : deposit.payment_method === "stripe"
                    ? "Stripe"
                    : deposit.payment_method === "cryptApi"
                    ? "Crypto"
                    : "Manual"}
                </TableCell>
                <TableCell sx={{ color: "success.main" }}>
                  {" "}
                  ${deposit.amount?.toFixed(2)}
                </TableCell>

                <TableCell>
                  <StatusComp status={deposit?.status} />
                </TableCell>
              </TableRow>
            ))}
          </CustomTable>
        </>
      )}
    </PageContainer>
  )
}

const CashAppConfirm = ({
  cashAppID,
  amount,
  url,
  back,
  qr,
  invoice,
  cashLoader,
  verifyCashAppPayment,
}) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} sx={{ pt: 5, mx: "auto" }}>
        <Section
          title="CashApp Payment"
          end={<Button onClick={back}>Close</Button>}
        >
          <Stack alignItems={"center"}>
            <img
              src={env.BASE_API_URL + "/" + qr}
              alt=""
              style={{
                height: "200px",
                width: "200px",
              }}
            />
            <Typography sx={{ mt: 1 }} color="warning.main">
              {cashAppID}
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <Typography component={"span"} color="text.secondary">
                Amount:
              </Typography>{" "}
              <Typography component={"span"} color="success.main">
                $ {amount}
              </Typography>
            </Typography>

            <Typography sx={{ mb: 1 }}>
              <Typography component={"span"} color="text.secondary">
                Note:
              </Typography>{" "}
              <Typography component={"span"} color="warning.main">
                {url || "sdsdsd"}
              </Typography>
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 1 }}>
              {invoice._id}
            </Typography>

            <Typography variant="body2" color="text.secondary" sx={{ px: 3 }}>
              Send a CashApp payment to{" "}
              <Typography component={"span"} color="warning.main">
                {cashAppID}
              </Typography>{" "}
              by manually inputing the CashApp tag or scanning the QR code
              above. Set the amount to{" "}
              <Typography component={"span"} color="success.main">
                $ {amount}
              </Typography>{" "}
              and the note to{" "}
              <Typography component={"span"} color="warning.main">
                {url}
              </Typography>
              . When done, enter your Web Receipt URL or just the transaction ID
              from the URL below and click Process Payment!
            </Typography>

            <Box sx={{ px: 3, width: "100%", mt: 2 }}>
              <form onSubmit={verifyCashAppPayment} style={{ width: "100%" }}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Field
                      id="checkurl"
                      type="text"
                      name="checkurl"
                      placeholder="https://cash.app/payments/xxxxxxxxxxxxxxxxxxxxxxxxx/receipt"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    {" "}
                    <Button
                      variant="contained"
                      type="submit"
                      fullWidth
                      sx={{ height: "100%" }}
                    >
                      {cashLoader ? <Loader /> : "Process Payment"}
                    </Button>{" "}
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Stack>
        </Section>
      </Grid>{" "}
    </Grid>
  )
}

const CryptoConfirm = ({
  back,
  CryptoData,
  cryptoID,
  cryptoQr,
  minConfirmations,
  minAmount,
  cryptoLoader,
}) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} sx={{ pt: 5, mx: "auto" }}>
        <LoadingContainer loading={cryptoLoader}>
          <Section
            title="Finish Crypto Payment"
            end={<Button onClick={back}>Close</Button>}
          >
            <Typography className="fs-sm mb-2 d-block">
              {" "}
              Your {CryptoData?.ticker?.toUpperCase()} Deposit Address:{" "}
            </Typography>
            <Stack
              mt={1}
              spacing={2}
              direction="row"
              justifyContent={"space-between"}
            >
              <Field value={cryptoID} disabled />
              <IconButton onClick={() => copyToClipboard(cryptoID)}>
                <ContentCopyRoundedIcon />
              </IconButton>
            </Stack>
            <Stack mt={3} spacing={2} alignItems="center">
              <img
                // className="w-60 h-60"
                src={"data:image/png;base64," + cryptoQr}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />

              <Typography variant="body2" textAlign={"center"}>
                Please send only {CryptoData.name} to this deposit address.{" "}
                <br />
                {minConfirmations} Confirmation(s) required.
              </Typography>
              <Typography variant="body2" textAlign={"center"}>
                Send minimum {minAmount} {CryptoData?.ticker?.toUpperCase()} to
                this address.
              </Typography>
            </Stack>
          </Section>
        </LoadingContainer>
      </Grid>
    </Grid>
  )
}

const GatewayConfirm = ({ back, gateway, cashLoader, addComment }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} sx={{ pt: 5, mx: "auto" }}>
        <Section
          title={gateway?.name || "Gateway confirm"}
          end={<Button onClick={back}>Close</Button>}
        >
          <form onSubmit={addComment}>
            <Stack mt={3} spacing={2} alignItems="center">
              <img
                src={env.BASE_API_URL + "/" + gateway?.image}
                alt=""
                style={{ width: "200px", height: "200px" }}
              />

              <Typography variant="body2">{gateway?.description}</Typography>
              <Field
                name="comment"
                placeholder="Comments..."
                multiline
                rows={3}
              />
              <Button variant="contained" type="submit">
                {cashLoader ? <Loader /> : " Process payment"}
              </Button>
            </Stack>
          </form>
        </Section>
      </Grid>
    </Grid>
  )
}

export default Deposit

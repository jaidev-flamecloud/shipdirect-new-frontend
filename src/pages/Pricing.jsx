import {
  alpha,
  Button,
  Chip,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import { useEffect, useState } from "react"
import LoadingContainer from "../components/containers/LoadingContainer"
import PageContainer from "../components/containers/PageContainer"
import api from "../config/axios"
import Section from "../components/ui/Section"
import { useUserContext } from "../App"
import { toast } from "react-toastify"
import Loader from "../components/ui/Loader"
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded"
import ConfirmUpgrade from "../components/modals/ConfirmUpgrade"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"

const pricingItems = [
  { name: "usps", icon: "courier-icon-01" },
  { name: "ups", icon: "courier-icon-03" },
  { name: "fedex", icon: "courier-icon-02" },
]
const Pricing = () => {
  const [loader, setLoader] = useState(false)
  const [userData, setUserData] = useState({})
  const [showConfirm, setShowConfirm] = useState(false)
  const { refresh } = useUserContext()
  const [premium, setPremium] = useState({})

  const fetchPremiumDetails = async () => {
    await api
      .get("/admin-settings/premium")
      .then((res) => setPremium(res.data.premium))
      .catch((err) => console.log(err))
  }

  const checkSubscription = async () => {
    await api
      .get("/subscription/premium")
      .then((res) => setUserData(res.data.user))
      .catch((err) => console.log(err))
  }

  const subscribe = async () => {
    setLoader(true)

    await api
      .post("/subscription/premium", {})
      .then((res) => {
        setShowConfirm(false)
        refresh()
        setLoader(false)
        toast.success(res.data.message)
        checkSubscription()
      })
      .catch((err) => {
        console.log(err)
        setLoader(false)
        toast.error(err.response.data.message)
      })
  }

  const unsubscribe = async () => {
    setLoader(true)

    await api
      .delete("/subscription/premium")
      .then((res) => {
        refresh()
        setLoader(false)
        toast.success(res.data.message)
        checkSubscription()
      })
      .catch((err) => {
        console.log(err)
        setLoader(false)
        toast.error(err.response.data.message)
      })
  }

  useEffect(() => {
    checkSubscription()
    fetchPremiumDetails()
  }, [])

  const theme = useTheme()

  return (
    <PageContainer
      title="Upgrade to Premium"
      desc="Save on all your purchases with our premium membership"
    >
      <Section sx={{ mb: 2, py: 2.5, fontWeight: 600 }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <div>
            <Typography fontWeight={600} display="inline" variant="h6">
              Subscription Status
            </Typography>
            {userData.premiumRecurring ? (
              <Chip
                label="PREMIUM"
                color="primary"
                sx={{ ml: 2 }}
                size="small"
              />
            ) : (
              <Chip label="REGULAR" sx={{ ml: 2 }} size="small" />
            )}
          </div>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            // divider={<Divider orientation="vertical" flexItem />}
            spacing={1.5}
          >
            <div>
              <span style={{ color: "silver" }}>Start Date : </span>{" "}
              {userData.premiumStartDate
                ? new Date(userData.premiumStartDate).toLocaleDateString()
                : "NA"}
            </div>
            <div>
              <span style={{ color: "silver" }}>Expiry Date : </span>{" "}
              {userData.premiumExpiry
                ? new Date(userData.premiumExpiry).toLocaleDateString()
                : "N/A"}
            </div>
          </Stack>
        </Stack>
      </Section>
      <PricingComp />
      <Section
        sx={{
          mt: 3,
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          border: `solid 2px ${theme.palette.primary.main}`,
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            color: "primary.main",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          {userData.premiumRecurring ? (
            <div>Subscribed to Premium</div>
          ) : (
            <div>
              Upgrade to Premium :{" "}
              <span style={{ fontSize: 18 }}>
                ${premium?.premiumPrice?.toFixed(2)}
              </span>{" "}
              per month
            </div>
          )}
          {userData.premiumRecurring ? (
            <Button
              onClick={unsubscribe}
              variant="contained"
              color="error"
              sx={{ px: 3 }}
            >
              {loader ? <Loader /> : "Cancel Subscription"}
            </Button>
          ) : (
            <Button
              onClick={() => setShowConfirm(true)}
              variant="contained"
              color="primary"
              sx={{ px: 3 }}
            >
              Upgrade now <KeyboardArrowRightIcon />
            </Button>
          )}
        </Stack>{" "}
      </Section>
      <ConfirmUpgrade
        open={showConfirm}
        onClose={() => setShowConfirm(false)}
        action={subscribe}
        loading={loader}
      />
    </PageContainer>
  )
}

export const PricingComp = () => {
  const [types, setTypes] = useState([])
  const [loading, setLoading] = useState(false)

  const readLabelTypes = async () => {
    setLoading(true)
    await api
      .get("/labeltype/read")
      .then((res) => setTypes(res.data.labelTypes))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    readLabelTypes()
  }, [])
  return (
    <LoadingContainer loading={loading}>
      <Grid container spacing={2} mt={3}>
        {pricingItems.map((p) => (
          <PricingBlock
            name={p}
            types={types?.filter((type) =>
              type.name.toLowerCase().includes(p.name)
            )}
          />
        ))}
      </Grid>
    </LoadingContainer>
  )
}

const PricingBlock = ({ types, name }) => {
  const theme = useTheme()
  return (
    <Grid item xs={12} sm={4}>
      <Section sx={{ p: 3 }}>
        <div>
          <img
            src={`/assets/images/${
              name.icon + (theme.palette.mode === "dark" ? "2" : "")
            }.svg`}
            alt="name"
            style={{ height: "1.8rem" }}
          />
        </div>

        <Stack direction="row" spacing={5} mt={2}>
          <Stack spacing={1} sx={{ width: "50%" }}>
            <Chip
              label="FOR REGULARS"
              size="large"
              sx={{ borderRadius: 1, width: "100%", mb: 2 }}
            />
            {types?.map((type) =>
              type?.normalPrices?.length ? (
                <div>
                  <Typography color="text.secondary" fontWeight={500}>
                    {type?.name}
                  </Typography>
                  {type.normalPrices.map((price, i) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-between"
                      alignItems={"center"}
                      mb={0.3}
                    >
                      <Typography variant="body1">
                        {price?.fromWeight}-{price?.toWeight}{" "}
                        {type?.uid?.includes("firstclass") ? "Oz" : "Lbs"}
                      </Typography>{" "}
                      <Typography variant="h6" fontWeight={600}>
                        {"$" + price?.price?.toFixed(2)}
                      </Typography>
                    </Stack>
                  ))}
                </div>
              ) : (
                ""
              )
            )}
          </Stack>
          <Stack spacing={1} sx={{ width: "50%" }}>
            <Chip
              icon={<VerifiedRoundedIcon fontSize="small" />}
              label="FOR PREMIUM"
              size="large"
              sx={{ borderRadius: 1, width: "100%", mb: 2 }}
              color="primary"
            />
            {types?.map((type) =>
              type?.premiumPrices?.length ? (
                <div>
                  <Typography color="text.secondary" fontWeight={500}>
                    {type?.name}
                  </Typography>
                  {type.premiumPrices.map((price, i) => (
                    <Stack
                      direction="row"
                      spacing={2}
                      justifyContent="space-between"
                      alignItems={"center"}
                    >
                      <Typography variant="body1">
                        {price?.fromWeight}-{price?.toWeight}{" "}
                        {type?.uid?.includes("firstclass") ? "Oz" : "Lbs"}
                      </Typography>{" "}
                      <Typography
                        variant="h6"
                        color={"primary"}
                        fontWeight={600}
                      >
                        {"$" + price?.price?.toFixed(2)}
                      </Typography>
                    </Stack>
                  ))}
                </div>
              ) : (
                ""
              )
            )}
          </Stack>
        </Stack>
      </Section>
    </Grid>
  )
}

export default Pricing

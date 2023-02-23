import { alpha, Grid, Stack, Typography, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import LoadingContainer from "../components/containers/LoadingContainer"
import PageContainer from "../components/containers/PageContainer"
import api from "../config/axios"

const pricingItems = ["ups", "usps", "fedex"]

const Pricing = () => {
  return (
    <PageContainer title="Pricing">
      <PricingComp />
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
            types={types.filter((type) => type.uid.includes(p))}
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
      <Stack
        spacing={2}
        sx={{
          bgcolor: alpha(theme.palette.primary.main, 0.1),
          borderRadius: 1,
          p: 3,
        }}
      >
        <div>
          <img
            src={`/assets/images/${
              name + (theme.palette.mode === "dark" ? "2" : "")
            }.svg`}
            alt="name"
            style={{ height: "2rem" }}
          />
        </div>

        {types?.map((type) => (
          <div>
            <Typography color="text.secondary">{type?.name}</Typography>
            {type.prices.map((price) => (
              <Stack direction="row" spacing={2} justifyContent="space-between">
                <Typography variant="h6">
                  {price?.fromWeight}-{price?.toWeight}{" "}
                  {type?.uid?.includes("first_class") ? "Oz" : "Lbs"}
                </Typography>{" "}
                <Typography variant="h6">
                  {"$" + price?.price?.toFixed(2)}
                </Typography>
              </Stack>
            ))}
          </div>
        ))}
      </Stack>
    </Grid>
  )
}

export default Pricing

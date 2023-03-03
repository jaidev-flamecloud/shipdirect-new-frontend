import { Paper, Typography } from "@mui/material"
import React from "react"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { Link, useLocation } from "react-router-dom"
import routes from "../../config/routes"

const pathMap = {
  profile: "My Profile",
  api: "API",
  tos: "Terms of Service",
  labels: "My Labels",
  faqs: "FAQs",
  pricing: "Pricing",
  "address-book": "Address Book",
  "csv-orders": "CSV Orders ",
  deposit: "Deposit Balance",
  transactions: "Transaction Log",
  support: "Ticket Support",
  referrals: "Referrals",
  "create-label": "Create Label",
}

const BreadCrumb = () => {
  const location = useLocation()

  return (
    <Paper
      sx={{
        py: 1,
        px: 2,
        display: {
          xs: "none",
          sm: "flex",
        },
        justifyContent: "center",
        alignItems: "center",
        gap: 0.2,
      }}
      elevation={0}
    >
      <Link to="/">
        <img src="/assets/images/bulk/home-2.svg" alt="Home" />
      </Link>

      {location.pathname !== "/" && (
        <>
          <KeyboardArrowRightIcon />
          <Link to={"/"}>
            <Typography fontWeight={600}>
              {pathMap[location.pathname.split("/")[1]]}
            </Typography>
          </Link>
        </>
      )}
    </Paper>
  )
}

export default BreadCrumb

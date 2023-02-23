import { Button, Stack, Toolbar, Typography } from "@mui/material"
import React from "react"
import LandingLayout from "../../components/containers/LandingLayout"
import LandingSection from "../../components/ui/LandingSection"

const NotFound = () => {
  return (
    <LandingLayout>
      <LandingSection sx={{ pb: "17rem" }}>
        <Toolbar />
        <Stack spacing={2} alignItems="center" textAlign="center" mb={3}>
          <img src="/assets/images/not_found.svg" alt="404" />
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Error 404
          </Typography>
          <Typography
            variant="body2"
            sx={{ width: "60%" }}
            color="text.secondary"
          >
            This was not supposed to happen
          </Typography>{" "}
          <Button variant="contained" size="large" sx={{px:5}}>
          Go Back to Homepage
          </Button>
        </Stack>
      </LandingSection>
    </LandingLayout>
  )
}

export default NotFound

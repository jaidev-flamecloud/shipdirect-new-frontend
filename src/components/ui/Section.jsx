import { Paper, Stack, Typography } from "@mui/material"
import React from "react"

const Section = ({ title, sx, end, mb0, children }) => {
  return (
    <Paper elevation={0} sx={{ p: 2, border: "1px solid #e0e0e0", ...sx }}>
      {title && (
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={mb0 ? 0 : 2}
        >
          <Typography fontSize={16} fontWeight={500}>
            {title}
          </Typography>
          {end}
        </Stack>
      )}

      {children}
    </Paper>
  )
}

export default Section

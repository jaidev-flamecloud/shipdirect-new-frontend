import { Paper } from "@mui/material"
import React from "react"

const LandingSection = ({ children, bg, sx = {}, bgImg, svg, id }) => {
  return (
    <Paper
      id={id}
      elevation={0}
      sx={{
        px: { xs: 2, sm: 20 },
        py: 10,
        borderRadius: 0,
        bgcolor: bg,
        backgroundImage: `url('/assets/images/${bgImg}.${
          svg ? "svg" : "png"
        }')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "relative",
        ...sx,
      }}
    >
      {children}
    </Paper>
  )
}

export default LandingSection

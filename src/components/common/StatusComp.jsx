import { Chip } from "@mui/material"
import React from "react"
import { statusMap } from "../../utilities/misc"

const StatusComp = ({ status }) => {
  return (
    <Chip
      label={statusMap[status]?.text}
      color={statusMap[status]?.color.split(".")[0] || "error"}
      sx={{ borderRadius: 0.8 }}
    />
  )
}

export default StatusComp

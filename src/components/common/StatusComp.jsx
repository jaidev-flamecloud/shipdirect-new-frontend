import { Stack } from "@mui/material"
import React from "react"
import { statusMap } from "../../utilities/misc"

const StatusComp = ({ status }) => {
  return (
    <Stack
      direction="row"
      gap={0.6}
      alignItems="center"
      sx={{
        color: statusMap[status]?.color || "error.main",
      }}
    >
      {statusMap[status]?.icon || ""} {statusMap[status]?.text || status}
    </Stack>
  )
}

export default StatusComp

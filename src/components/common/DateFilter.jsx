import { Box, Button, IconButton, Popover, Stack } from "@mui/material"
import React from "react"
import dayjs from "dayjs"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { DateRangePicker } from "react-date-range"
import ClearIcon from "@mui/icons-material/Clear"
import { useState } from "react"

const DateFilter = ({ dateRange, setDateRange, apply }) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const handleClick = (event) => setAnchorEl(event.currentTarget)
  const handleClose = () => setAnchorEl(null)
  const open = Boolean(anchorEl)
  const id = open ? "simple-popover" : undefined
  const handleChange = (ranges) =>
    setDateRange({
      ...ranges.selection,
    })

  return (
    <Box
      sx={{
        width: { sm: "50%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 2,
      }}
    >
      <span style={{ flex: "none" }}>Filter by Date</span>
      <Button sx={{ flex: "none" }} variant="outlined" onClick={handleClick}>
        {(dateRange.startDate
          ? dayjs(dateRange.startDate).format("MMM D, YYYY")
          : "Not set") +
          " - " +
          (dateRange.endDate
            ? dayjs(dateRange.endDate).format("MMM D, YYYY")
            : "Not set")}
      </Button>
      {dateRange.startDate && (
        <IconButton
          size="small"
          color="error"
          onClick={() => {
            setDateRange({
              ...dateRange,
              startDate: null,
              endDate: null,
            })
            apply(true)
          }}
        >
          <ClearIcon fontSize="small" />
        </IconButton>
      )}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <DateRangePicker ranges={[dateRange]} onChange={handleChange} />
        <Stack
          p={1}
          direction={"row"}
          spacing={2}
          justifyContent={"flex-end"}
          sx={{ bgcolor: "#fff" }}
        >
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button
            onClick={() => {
              apply()
              handleClose()
            }}
            variant="contained"
          >
            Apply
          </Button>
        </Stack>
      </Popover>
    </Box>
  )
}

export default DateFilter

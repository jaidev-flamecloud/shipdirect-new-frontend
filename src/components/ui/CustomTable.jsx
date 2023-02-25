import { Pagination, Paper, Stack, Typography } from "@mui/material"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import LoadingContainer from "../containers/LoadingContainer"

export default function CustomTable({
  title,
  start,
  end,
  sx,
  fields,
  children,
  loading,
  dense = true,
  pagination,
  count,
  page,
  setPage,
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 0,
        pb: 1,
        overflow: "hidden",
        border: "1px solid #e0e0e0",
        ...sx,
      }}
    >
      {(title || start || end) && (
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          p={2}
        >
          {start}
          {title && <Typography variant="h6">{title}</Typography>}

          {end}
        </Stack>
      )}
      <LoadingContainer loading={loading}>
        <TableContainer>
          <Table size={dense && "small"} sx={{ overflow: "auto !important" }}>
            <TableHead sx={{ bgcolor: "rgba(255,255,255,0.04)" }}>
              <TableRow>
                {fields.map((field) => (
                  <TableCell key={field}>{field}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>{children}</TableBody>
          </Table>
        </TableContainer>
      </LoadingContainer>
      {pagination && (
        <Stack alignItems={"center"} sx={{ pt: 3, pb: 2 }}>
          <Pagination
            count={count}
            page={page}
            onChange={(_, v) => setPage(v)}
          />
        </Stack>
      )}
    </Paper>
  )
}

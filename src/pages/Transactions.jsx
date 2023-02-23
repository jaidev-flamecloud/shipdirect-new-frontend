import PageContainer from "../components/containers/PageContainer"
import CustomTable from "../components/ui/CustomTable"
import { Stack, TableCell, TableRow, Typography, useTheme } from "@mui/material"
import { useEffect, useState } from "react"
import api from "../config/axios"
import { formatDate } from "../utilities/misc"
import dayjs from "dayjs"
import DateFilter from "../components/common/DateFilter"

const filters = [
  ["All", "All"],
  ["Order", "Order created"],
  ["CSV Order", "CSV Order created"],
  ["Deposit", "Deposit"],
  ["Refund", "Refund Accepted"],
]

const FilterTabs = ({ filter, setFilter }) => {
  const theme = useTheme()
  return (
    <Stack direction="row" spacing={2}>
      {filters.map((f, i) => (
        <Typography
          onClick={() => setFilter(i)}
          sx={{
            cursor: "pointer",
            p: 1,
            color: i !== filter && "silver",
            borderBottom:
              i === filter && `solid 2px ${theme.palette.primary.main}`,
          }}
        >
          {f[0]}
        </Typography>
      ))}
    </Stack>
  )
}

const Transactions = () => {
  const [filter, setFilter] = useState(0)
  const [transactions, setTransactions] = useState([])
  const [laoding, setLaoding] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const readTransactions = async (resetDate = false) => {
    setLaoding(true)
    await api
      .get(
        `/log/read?type=${filters[filter][1]}&page=${page}&from=${
          dateRange.startDate && !resetDate
            ? dayjs(dateRange.startDate).format("YYYY-MM-DD")
            : ""
        }&to=${
          dateRange.endDate && !resetDate
            ? dayjs(dateRange.endDate).format("YYYY-MM-DD")
            : ""
        }`
      )
      .then((res) => {
        setTransactions(res.data.logs)
        setTotalPages(res.data.totalPages)
      })
      .finally(() => setLaoding(false))
  }

  useEffect(() => {
    readTransactions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter, page])

  // date range plugin

  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
    key: "selection",
  })

  return (
    <PageContainer title="Your Transaction History">
      <CustomTable
        start={<FilterTabs filter={filter} setFilter={setFilter} />}
        end={
          <DateFilter
            dateRange={dateRange}
            setDateRange={setDateRange}
            apply={readTransactions}
          />
        }
        fields={[
          "# ",
          "DATE AND TIME",
          "TYPE",
          "DESCRIPTION",
          "AMOUNT",
          "BALANCE",
        ]}
        loading={laoding}
        pagination
        count={totalPages}
        page={page}
        setPage={setPage}
      >
        {transactions.map((transaction, i) => (
          <TableRow>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{formatDate(transaction.createdAt)}</TableCell>
            <TableCell>{transaction.type}</TableCell>
            <TableCell>{transaction.action}</TableCell>
            <TableCell
              sx={{
                color:
                  transaction.amount > 0
                    ? "success.main"
                    : transaction.amount < 0
                    ? "error.main"
                    : "",
              }}
            >
              {transaction.amount > 0 ? "+$" : "$"}{" "}
              {transaction.amount.toFixed(2)}
            </TableCell>
            <TableCell>{"$" + transaction.balance.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </CustomTable>
    </PageContainer>
  )
}

export default Transactions

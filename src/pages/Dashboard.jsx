import {
  Button,
  Grid,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material"
import React, { useEffect, useState } from "react"
import Section from "../components/ui/Section"
import InventoryIcon from "@mui/icons-material/Inventory"
import PageContainer from "../components/containers/PageContainer"
import Field from "../components/ui/Field"
import { Link } from "react-router-dom"
import routes from "../config/routes"
import CustomTable from "../components/ui/CustomTable"
import StatCard from "../components/common/StatCard"
import api from "../config/axios"
import LoadingContainer from "../components/containers/LoadingContainer"
import { useUserContext } from "../App"
import { formatDate, statusMap } from "../utilities/misc"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer"
import PushPinIcon from "@mui/icons-material/PushPin"

const Dashboard = () => {
  const { user } = useUserContext()
  const [stats, setStats] = useState({})
  const [statsLoading, setStatsLoading] = useState(false)
  const [announcement, setAnnouncement] = useState("")

  const fetchStats = async () => {
    setStatsLoading(true)
    await api
      .get("/auth/readStats")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err))
      .finally(() => setStatsLoading(false))
  }

  // read announcement
  const readAnnouncement = async () => {
    await api("/announcement/read")
      .then((rsp) => setAnnouncement(rsp.data))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    fetchStats()
    readAnnouncement()
  }, [])
  return (
    <PageContainer
      title={"Hello " + user.username}
      desc="Manage all your orders, labels and transactions securely at one place"
    >
      {announcement?.status && (
        <Section
          sx={{ mb: 3, bgcolor: "success.main", color: "#fff" }}
          title={
            <Stack direction="row" alignItems="center" spacing={1}>
              <PushPinIcon />
              <Typography variant="h6" display={"inline"}>
                {announcement?.title}
              </Typography>
            </Stack>
          }
        >
          <Typography variant="body">{announcement?.announcement}</Typography>
        </Section>
      )}

      {
        <LoadingContainer loading={statsLoading}>
          <Grid container spacing={2} mb={2}>
            <Grid item xs={12} sm={3}>
              <StatCard
                icon={<InventoryIcon />}
                name="Your Orders"
                value={stats.orders}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <StatCard
                icon={<AccountBalanceWalletIcon />}
                name="Your Balance"
                value={"$" + stats.balance?.toFixed(2)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <StatCard
                icon={<AttachMoneyIcon />}
                name="Balance Spent"
                value={"$" + stats.totalSpent?.toFixed(2)}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <StatCard
                icon={<QuestionAnswerIcon />}
                name="Your Tickets "
                value={stats.tickets}
              />
            </Grid>
          </Grid>
        </LoadingContainer>
      }

      <Grid container spacing={2}>
        {/* <Grid item xs={12} sm={4}>
          <Section title="My Profile">
            <Stack spacing={2}>
              <Field disabled value={user.username} label="Username" />
              <Field disabled value={user.email} label="Email Address" />
              <Field
                disabled
                value={formatDate(user.createdAt)}
                label="Joined"
              />
              <Link to="/change-password">
                <Button fullWidth variant="outlined">
                  Reset Password
                </Button>
              </Link>
            </Stack>
          </Section>
        </Grid> */}
        <Grid item xs={12} sm={6}>
          <LoadingContainer loading={statsLoading}>
            <CustomTable
              title="Recent Orders"
              end={
                <Link to={routes.LABELS}>
                  <Typography color="primary">View All</Typography>
                </Link>
              }
              fields={["TYPE", "FROM", "TO", "PRICE"]}
            >
              {stats?.latestOrders?.slice(0, 4)?.map((order) => (
                <TableRow>
                  <TableCell>{order.labelType?.name}</TableCell>
                  <TableCell>{order.FromName}</TableCell>
                  <TableCell>{order.ToName}</TableCell>
                  <TableCell sx={{ color: "#3ABF7C" }}>
                    ${order.price?.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </CustomTable>
          </LoadingContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LoadingContainer loading={statsLoading}>
            <CustomTable
              title="Recent Transactions"
              end={
                <Link to={routes.TRANSACTIONS}>
                  <Typography color="primary">View All</Typography>
                </Link>
              }
              fields={["AMOUNT", "DESCRIPTION", "STATUS"]}
            >
              {stats?.latestInvoices?.map((deposit) => (
                <TableRow>
                  <TableCell sx={{ color: "#3ABF7C" }}>
                    {" "}
                    ${deposit.amount?.toFixed(2)}
                  </TableCell>
                  <TableCell>{deposit.payment_method}</TableCell>
                  <TableCell
                    sx={{
                      color: statusMap[deposit?.status]?.color || "error.main",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "5px",
                        alignItems: "center",
                      }}
                    >
                      {statusMap[deposit?.status]?.icon || ""} {deposit?.status}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </CustomTable>
          </LoadingContainer>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Dashboard

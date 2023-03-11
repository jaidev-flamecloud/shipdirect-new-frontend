import { Grid, TableCell, TableRow, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import PageContainer from "../components/containers/PageContainer"
import { Link } from "react-router-dom"
import routes from "../config/routes"
import CustomTable from "../components/ui/CustomTable"
import StatCard from "../components/common/StatCard"
import api from "../config/axios"
import LoadingContainer from "../components/containers/LoadingContainer"
import { useUserContext } from "../App"
import { formatDate } from "../utilities/misc"
import StatusComp from "../components/common/StatusComp"
import Icon from "../components/common/Icon"
import Section from "../components/ui/Section"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Colors,
} from "chart.js"
import { Line, Pie } from "react-chartjs-2"

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Colors
)

const Dashboard = () => {
  const { user } = useUserContext()
  const [stats, setStats] = useState({})
  const [statsLoading, setStatsLoading] = useState(false)
  const [orderGraphData, setOrderGraphData] = useState(null)
  const [labelGraphData, setLabelGraphData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loading2, setLoading2] = useState(true)

  const fetchStats = async () => {
    setStatsLoading(true)
    await api
      .get("/auth/readStats")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err))
      .finally(() => setStatsLoading(false))
  }

  const fetchOrderGraphData = async () => {
    setLoading(true)
    await api
      .get("/user/readOrdersReports")
      .then((res) => setOrderGraphData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  const fetchLabelGraphData = async () => {
    setLoading2(true)
    await api
      .get("/user/readUserLabelsChart")
      .then((res) => setLabelGraphData(res.data.labelTypesData))
      .catch((err) => console.log(err))
      .finally(() => setLoading2(false))
  }

  useEffect(() => {
    fetchStats()
    fetchOrderGraphData()
    fetchLabelGraphData()
  }, [])

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "Septemper",
    "October",
    "November",
    "December",
  ]

  return (
    <PageContainer
      title={"Hello " + user.username + "!!!"}
      desc="Manage all your orders, labels and transactions securely at one place"
    >
      <LoadingContainer loading={statsLoading}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={3}>
            <StatCard
              icon={<Icon path="bulk/receipt-2" />}
              name="Orders Placed       "
              value={stats.orders}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatCard
              icon={<Icon path="bulk/wallet" />}
              name="Your Balance"
              value={"$" + stats.balance?.toFixed(2)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatCard
              icon={<Icon path="bulk/coin" />}
              name="Balance Spent"
              value={"$" + stats.totalSpent?.toFixed(2)}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <StatCard
              icon={<Icon path="bulk/ticket" />}
              name="Open Tickets"
              value={stats.tickets}
            />
          </Grid>
        </Grid>
      </LoadingContainer>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} sm={6}>
          <LoadingContainer loading={statsLoading}>
            <CustomTable
              title="Your Recent Orders"
              end={
                <Link to={routes.LABELS}>
                  <Typography color="primary" fontWeight={600} variant="body2">
                    View All Orders
                  </Typography>
                </Link>
              }
              fields={["DATE & TIME", "TYPE", "FROM", "TO", "AMOUNT", "STATUS"]}
            >
              {stats?.latestOrders?.slice(0, 4)?.map((order) => (
                <TableRow>
                  <TableCell>{formatDate(order.createdAt)}</TableCell>
                  <TableCell>{order.labelType?.name}</TableCell>
                  <TableCell>{order.FromName}</TableCell>
                  <TableCell>{order.ToName}</TableCell>
                  <TableCell sx={{ color: "#3ABF7C" }}>
                    ${order.price?.toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <StatusComp status={order.status} />{" "}
                  </TableCell>
                </TableRow>
              ))}
            </CustomTable>
          </LoadingContainer>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LoadingContainer loading={statsLoading}>
            <CustomTable
              title="Your Recent Transactions"
              end={
                <Link to={routes.TRANSACTIONS}>
                  <Typography color="primary" fontWeight={600} variant="body2">
                    View All Transactions
                  </Typography>
                </Link>
              }
              fields={["DATE & TIME", "AMOUNT", "DESCRIPTION", "STATUS"]}
            >
              {stats?.latestInvoices?.map((deposit) => (
                <TableRow>
                  <TableCell>{formatDate(deposit.createdAt)}</TableCell>
                  <TableCell sx={{ color: "#3ABF7C" }}>
                    {" "}
                    ${deposit.amount?.toFixed(2)}
                  </TableCell>
                  <TableCell>{deposit.payment_method}</TableCell>
                  <TableCell>
                    <StatusComp status={deposit.status} />
                  </TableCell>
                </TableRow>
              ))}
            </CustomTable>
          </LoadingContainer>
        </Grid>
      </Grid>
      <LoadingContainer loading={loading || loading2}>
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} sm={6}>
            <Section title="Total Shipments">
              <Typography>
                Total Orders: {orderGraphData?.OrdersCount} , Total Costs: ${" "}
                {orderGraphData?.totalCosts?.toFixed(2)}
              </Typography>
              <Line
                style={{ width: "100%" }}
                options={{
                  scales: {
                    y: {
                      ticks: {
                        precision: 0,
                      },
                    },
                  },
                }}
                datasetIdKey="id"
                data={{
                  labels,
                  datasets: [
                    {
                      id: 1,
                      label: "Shipments",
                      data: labels.map(
                        (month) => orderGraphData?.monthwise[month] || 0
                      ),
                    },
                  ],
                }}
              />
            </Section>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Section title="Top Labels">
              <Pie
                style={{ width: "100%" }}
                datasetIdKey="id"
                data={{
                  labels: labelGraphData?.map((l) => l.labelType),
                  datasets: [
                    {
                      id: 1,
                      label: "Labels",
                      data: labelGraphData?.map((l) => l.count),
                    },
                  ],
                }}
              />
            </Section>
          </Grid>
        </Grid>
      </LoadingContainer>
    </PageContainer>
  )
}

export default Dashboard

import { Grid, IconButton, Stack, TableCell, TableRow } from "@mui/material"
import StatCard from "../components/common/StatCard"
import PageContainer from "../components/containers/PageContainer"
import Field from "../components/ui/Field"
import Section from "../components/ui/Section"
import InventoryIcon from "@mui/icons-material/Inventory"
import CustomTable from "../components/ui/CustomTable"
import api from "../config/axios"
import { useEffect, useState } from "react"
import { useUserContext } from "../App"
import { copyToClipboard, formatDate } from "../utilities/misc"
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded"
import LoadingContainer from "../components/containers/LoadingContainer"
import GroupIcon from "@mui/icons-material/Group"
import TollIcon from "@mui/icons-material/Toll"

const Referrals = () => {
  const [users, setUsers] = useState([])
  const [stats, setStats] = useState({})
  const [loading, setLoading] = useState(false)
  const [loadingStats, setLoadingStats] = useState(false)
  const [comissions, setComissions] = useState([])
  const [commisionsLoading, setCommisionsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const readStats = async () => {
    setLoadingStats(true)
    await api
      .get("/referral/readStats")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoadingStats(false))
  }

  const readComissions = async () => {
    setCommisionsLoading(true)
    await api
      .get(`/referral/readReferralOrders?page=${page}&limit=10`)
      .then((res) => {
        setComissions(res.data.referralOrders)
        setTotalPages(res.data.pages)
      })
      .catch((err) => console.log(err))
      .finally(() => setCommisionsLoading(false))
  }

  const readReferrals = async () => {
    setLoading(true)
    await api
      .get("/referral/read")
      .then((res) => setUsers(res.data.referrals))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    readStats()
    readReferrals()
    readComissions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { user } = useUserContext()

  const REF_LINK =
    window.location.protocol +
    "//" +
    window.location.host +
    "/register?ref=" +
    user.referralToken

  return (
    <PageContainer title="Your Referrals">
      <Section sx={{ mb: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems={"flex-end"}
          spacing={2}
        >
          <Field label="Your Referal Link" value={REF_LINK} disabled />
          <IconButton onClick={() => copyToClipboard(REF_LINK)}>
            <ContentCopyRoundedIcon />
          </IconButton>
        </Stack>
      </Section>
      <Section title="Referral Analytics" sx={{ mb: 3 }}>
        <LoadingContainer loading={loadingStats}>
          <Grid container spacing={2}>
            {/* <Grid item xs={12} sm={4}>
            <StatCard
              icon={<InventoryIcon />}
              name="Referral Earning %"
              value={
                <>
                  5% <br />
                  <Typography variant="caption">
                    of Sales via Your Referred User
                  </Typography>
                </>
              }
            />
          </Grid> */}
            <Grid item xs={12} sm={4}>
              <StatCard
                icon={<GroupIcon />}
                name="Total Referred"
                value={stats.referrals}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <StatCard
                icon={<TollIcon />}
                name="Total Referral Points"
                value={stats.refPoints?.toFixed(2)}
              />
            </Grid>
          </Grid>
        </LoadingContainer>
      </Section>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <CustomTable
            title="Users Referred"
            fields={["# ", "USERNAME", "EMAIL", "JOINED"]}
            loading={loading}
          >
            {users.map((user, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{formatDate(user.createdAt)}</TableCell>
              </TableRow>
            ))}
          </CustomTable>
        </Grid>
        <Grid item xs={12} sm={6}>
          {" "}
          <CustomTable
            title={"Referral Commission"}
            fields={["# ", "USERNAME", "TYPE", "POINTS"]}
            loading={commisionsLoading}
          >
            {comissions.map((order, index) => (
              <TableRow>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{order.user?.username}</TableCell>
                <TableCell>{order.order?.labelType?.name}</TableCell>
                <TableCell>{order.points?.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </CustomTable>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default Referrals

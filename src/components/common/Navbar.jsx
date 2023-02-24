import {
  AppBar,
  Box,
  Button,
  IconButton,
  Paper,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"
import Divider from "@mui/material/Divider"
import IconBtn from "../ui/IconBtn"
import ColorModeToggle from "./ColorModeToggle"
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined"
import PersonRoundedIcon from "@mui/icons-material/PersonRounded"
import WatchLaterRoundedIcon from "@mui/icons-material/WatchLaterRounded"
import AddRoundedIcon from "@mui/icons-material/AddRounded"
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { Link, useNavigate } from "react-router-dom"
import routes from "../../config/routes"
import MenuIcon from "@mui/icons-material/Menu"
import { useUserContext } from "../../App"
import { useEffect } from "react"
import { useState } from "react"
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"
import { formatDate } from "../../utilities/misc"

const Navbar = ({ drawerWidth, toggle, toggleMiniDrawer, miniDrawer }) => {
  const { user, setUser } = useUserContext()

  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem("token")
    setUser(null)
    navigate("/login")
  }
  const theme = useTheme()

  const [liveTime, setLiveTime] = useState(formatDate())

  useEffect(() => {
    const liveTimeInterval = setInterval(() => setLiveTime(formatDate()), 30000)
    return () => {
      clearInterval(liveTimeInterval)
    }
  }, [])

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        bgcolor: "transparent",
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Stack direction="row" alignItems="center">
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggleMiniDrawer}
              sx={{ mr: 1, display: { xs: "none", sm: "flex" } }}
            >
              {miniDrawer ? (
                <ChevronRightRoundedIcon />
              ) : (
                <ChevronLeftRoundedIcon />
              )}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={toggle}
              sx={{ mr: 1, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              sx={{ display: { xs: "none", sm: "block" } }}
              variant="body1"
              noWrap
              component="div"
            >
              Dashboard
            </Typography>
          </Stack>

          <Stack
            sx={{ display: { xs: "flex", sm: "none" } }}
            direction="row"
            spacing={1}
            alignItems="stretch"
          >
            <Link to={routes.ADD_LABEL}>
              <Button variant="contained" sx={{ height: "100%" }} size="small">
                <AddRoundedIcon fontSize="small" />
                <Typography variant="body2" sx={{ ml: 0.5 }}>
                  Label
                </Typography>
              </Button>
            </Link>
            <Link to="/deposit">
              <Button
                variant="contained"
                color="success"
                sx={{
                  color: "white",
                  height: "100%",
                }}
              >
                <AccountBalanceWalletRoundedIcon fontSize="small" />
                <Typography variant="body2">
                  ${user.balance.toFixed(2)}
                </Typography>
              </Button>
            </Link>

            <ColorModeToggle />
            <IconBtn onClick={logOut} color="error" bg="#f00">
              <LogoutOutlinedIcon />
            </IconBtn>
          </Stack>

          <Stack
            sx={{ display: { xs: "none", sm: "flex" } }}
            direction="row"
            spacing={2}
            alignItems="stretch"
          >
            <Box sx={{ display: { xs: "none", sm: "flex" } }}>
              <Link to={routes.ADD_LABEL}>
                <Button variant="contained" sx={{ height: "100%" }}>
                  <AddRoundedIcon fontSize="small" />
                  <Typography variant="body2" sx={{ ml: 0.5 }}>
                    Create New Label
                  </Typography>
                </Button>
              </Link>
            </Box>
            <Link to="/deposit">
              <Button
                variant="outlined"
                color="success"
                sx={{
                  "&:hover": {
                    backgroundColor: "#c3ecd0",
                    borderWidth: 2,
                  },
                  backgroundColor: "#c3ecd0",
                  color: "black",
                  display: { xs: "none", sm: "flex" },
                  height: "100%",
                  borderWidth: 2,
                }}
              >
                <AccountBalanceWalletRoundedIcon
                  fontSize="small"
                  color="success"
                />
                <Typography variant="body2" sx={{ mx: 0.5 }}>
                  Balance : ${user.balance.toFixed(2)}
                </Typography>
                <ArrowForwardRoundedIcon fontSize="small" />
              </Button>
            </Link>

            <Paper
              elevation={0}
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                px: 2,
                gap: 1,
              }}
            >
              <WatchLaterRoundedIcon />
              <Typography variant="body2">{liveTime}</Typography>
            </Paper>

            <Stack direction="row" spacing={2} alignItems="stretch">
              <Paper
                onClick={() => navigate("/change-password")}
                elevation={0}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  px: 2,
                  gap: 1,
                  cursor: "pointer",
                }}
              >
                <PersonRoundedIcon />
                <Typography variant="body2">{user.username}</Typography>
              </Paper>
              <IconBtn onClick={logOut} color="error" bg="#f00">
                <LogoutOutlinedIcon />
              </IconBtn>
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

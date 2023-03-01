import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight"
import { Link, useNavigate } from "react-router-dom"
import routes from "../../config/routes"
import { useUserContext } from "../../App"
import { useEffect } from "react"
import { useState } from "react"
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded"
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded"
import { formatDate } from "../../utilities/misc"
import Icon from "./Icon"

const Navbar = ({ drawerWidth, toggle, toggleMiniDrawer, miniDrawer }) => {
  const { user, setUser } = useUserContext()

  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem("token")
    setUser(null)
    navigate("/")
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
        py: 1,
        px: { xs: 1, sm: 5 },
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
              size="small"
              sx={{
                mr: 1,
                display: { xs: "none", sm: "flex" },
                bgcolor: "#fff",
                border: "1px solid #e0e0e0",
              }}
            >
              {miniDrawer ? (
                <ChevronRightRoundedIcon />
              ) : (
                <ChevronLeftRoundedIcon />
              )}
            </IconButton>
            <IconButton
              color="inherit"
              edge="start"
              onClick={toggle}
              size="small"
              sx={{
                mr: 1,
                display: { xs: "flex", sm: "none" },
                bgcolor: "#fff",
                border: "1px solid #e0e0e0",
              }}
            >
              <ChevronRightRoundedIcon />
            </IconButton>
            <Box sx={{ mr: 1, mt: 1, display: { sm: "none" } }}>
              <img
                src={`/assets/images/logo.svg`}
                alt="logo"
                style={{ margin: "0 auto", width: "9rem" }}
              />
            </Box>
            {/* <Typography
              sx={{ display: { xs: "none", sm: "block" } }}
              variant="body1"
              noWrap
              component="div"
            >
              Dashboard
            </Typography> */}
          </Stack>

          <Stack
            sx={{ display: { xs: "flex", sm: "none" } }}
            direction="row"
            spacing={1}
            alignItems="stretch"
          >
            <Link to={routes.ADD_LABEL}>
              <Button variant="contained" sx={{ height: "100%" }} size="small">
                <Icon path="bulk/box" />
                <Typography variant="body2" sx={{ ml: 0.5 }}>
                  Label
                </Typography>
              </Button>
            </Link>
            {/* <Link to="/deposit">
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
            </Link> */}

            {/* <ColorModeToggle /> */}
            <IconButton
              sx={{
                backgroundColor: "#fff",
                borderRadius: `${theme.shape.borderRadius}px !important`,
              }}
              onClick={logOut}
            >
              <Icon path="bulk/login" />
            </IconButton>
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
                  <Icon path="bulk/box" />
                  <Typography variant="body2" sx={{ ml: 0.5 }}>
                    Create Label
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
                  alignItems: "center",
                }}
              >
                <Icon path="bulk/wallet-1" />
                <Typography variant="body2" sx={{ ml: 1 }}>
                  <span style={{ fontWeight: 600 }}>Balance</span> : $
                  {user.balance.toFixed(2)}
                </Typography>
                <KeyboardArrowRightIcon fontSize="small" />
              </Button>
            </Link>

            <IconButton
              sx={{
                backgroundColor: "#fff",
                borderRadius: `${theme.shape.borderRadius}px !important`,
                gap: 0.5,
                px: 1.8,
                color: "#000",
              }}
            >
              <Icon path="bulk/calendar" />
              <Typography variant="body2">{liveTime}</Typography>
            </IconButton>

            <Stack direction="row" spacing={2} alignItems="stretch">
              <IconButton
                onClick={() => navigate("/profile")}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: `${theme.shape.borderRadius}px !important`,
                  gap: 0.5,
                  px: 1.8,
                  color: "#000",
                }}
              >
                <Icon path="bulk/user" />
                <Typography variant="body2">{user.username}</Typography>
              </IconButton>

              <IconButton
                onClick={logOut}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: `${theme.shape.borderRadius}px !important`,
                }}
              >
                <Icon path="bulk/login" />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar

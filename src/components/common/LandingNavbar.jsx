import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import IconButton from "@mui/material/IconButton"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemText from "@mui/material/ListItemText"
import MenuIcon from "@mui/icons-material/Menu"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { cloneElement, useState } from "react"
import { Divider, Stack, useScrollTrigger, useTheme } from "@mui/material"
import { Link } from "react-router-dom"

import ColorModeToggle from "./ColorModeToggle"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { scrollTo } from "../../pages/landing/Landing"

const drawerWidth = 240

function ElevationScroll(props) {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })

  return cloneElement(children, {
    sx: { bgcolor: trigger ? "background.paper" : "transparent" },
    elevation: trigger ? 1 : 0,
  })
}

const navLinks = [
  {
    name: "Pricing",
    scroll: "pricing",
    link: "/",
  },
  {
    name: "FAQs",
    link: "/faqs",
  },
  {
    name: "Terms",
    link: "/terms",
  },
  {
    name: "Privacy",
    link: "/terms",
  },
]

const LandingNavbar = (props) => {
  const { window } = props
  const container =
    window !== undefined ? () => window().document.body : undefined

  const theme = useTheme()

  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)

  return (
    <>
      <ElevationScroll {...props}>
        <AppBar component="nav">
          <Toolbar sx={{ px: { sm: 20 }, py: { xs: 1, sm: 2 } }}>
            <Stack
              sx={{ width: "100%" }}
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 6 }}
                alignItems="center"
              >
                <IconButton
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Link to="/">
                  <img
                    src={`/assets/images/logo-${theme.palette.mode}.svg`}
                    alt="logo"
                    className="logo"
                  />
                </Link>

                <Stack
                  sx={{ display: { xs: "none", sm: "flex" } }}
                  direction="row"
                  spacing={6}
                  alignItems="center"
                >
                  {navLinks.map(({ name, link, scroll }) => (
                    <Link
                      to={link}
                      onClick={() => {
                        if (scroll) {
                          setTimeout(() => {
                            scrollTo(scroll)
                          }, 500)
                        }
                      }}
                    >
                      <Typography color="text.primary">{name}</Typography>
                    </Link>
                  ))}
                </Stack>
              </Stack>

              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                  <Link to={"/login"}>
                    <Button>Log In</Button>
                  </Link>
                </Box>

                <Link to={"/register"}>
                  <Button variant="contained" sx={{ px: { sm: 4 } }}>
                    Get Started <ArrowForwardRoundedIcon fontSize="small" />
                  </Button>
                </Link>

                <ColorModeToggle sx={{ display: { xs: "none", sm: "flex" } }} />
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            {/* <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider /> */}
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="center"
              spacing={2}
              p={2}
            >
              {" "}
              <img
                src={`/assets/images/logo-${theme.palette.mode}.svg`}
                alt="logo"
                className="logo"
              />
            </Stack>
            <Divider />
            <Stack
              direction="row"
              alignItems={"center"}
              justifyContent="center"
              spacing={2}
              p={2}
            >
              <Link to={"/register"}>
                <Button variant="contained" sx={{ px: { sm: 4 } }}>
                  Get Started <ArrowForwardRoundedIcon fontSize="small" />
                </Button>
              </Link>

              <ColorModeToggle />
            </Stack>
            <Divider />
            <List>
              {navLinks.map(({ name, link, scroll }) => (
                <Link
                  to={link}
                  onClick={() => {
                    if (scroll) {
                      setTimeout(() => {
                        scrollTo(scroll)
                      }, 500)
                    }
                  }}
                >
                  <ListItem key={name} disablePadding>
                    <ListItemButton sx={{ textAlign: "center" }}>
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </Box>
        </Drawer>
      </Box>
    </>
  )
}

export default LandingNavbar

import { Outlet } from "react-router-dom"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Navbar from "../common/Navbar"
import SideBar from "../common/SideBar"
import { useState } from "react"
import { Typography } from "@mui/material"

const expandedDrawerWidth = 240
const miniDrawerWidth = 100

export default function AppLayout(props) {
  const [miniDrawer, setMiniDrawer] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const toggleMiniDrawer = () => setMiniDrawer(!miniDrawer)

  return (
    <Box sx={{ display: "flex" }}>
      <Navbar
        drawerWidth={miniDrawer ? miniDrawerWidth : expandedDrawerWidth}
        toggle={handleDrawerToggle}
        miniDrawer={miniDrawer}
        toggleMiniDrawer={toggleMiniDrawer}
      />
      <SideBar
        drawerWidth={miniDrawer ? miniDrawerWidth : expandedDrawerWidth}
        mobileOpen={mobileOpen}
        toggle={handleDrawerToggle}
        miniDrawer={miniDrawer}
      />
      <Box
        component="main"
        sx={{
          position: "relative",
          flexGrow: 1,
          bgcolor: "background.default",
          pt: { xs: 2, sm: 3 },
          pb: 5,
          px: { xs: 2, sm: 8 },
          minHeight: "100vh",
          width: {
            xs: "100vw",
            sm: `calc(100% - ${
              miniDrawer ? miniDrawerWidth : expandedDrawerWidth
            }px)`,
          },
        }}
      >
        <Toolbar />
        <Outlet />
        <Typography
          mt={3}
          color="text.secondary"
          variant="body2"
          sx={{ position: "absolute", left: 76, bottom: 10 }}
        >
          Copyright © 2023 ShipDirect. All rights reserved
        </Typography>
      </Box>
    </Box>
  )
}

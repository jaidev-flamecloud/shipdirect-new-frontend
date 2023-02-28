import { Outlet } from "react-router-dom"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Navbar from "../common/Navbar"
import SideBar from "../common/SideBar"
import { useState } from "react"

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
          flexGrow: 1,
          bgcolor: "background.default",
          py: { xs: 2, sm: 3 },
          px: { xs: 2, sm: 8 },
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
      </Box>
    </Box>
  )
}

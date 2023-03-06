import { Outlet } from "react-router-dom"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Navbar from "../common/Navbar"
import SideBar from "../common/SideBar"
import { useEffect, useState } from "react"
import { Alert, AlertTitle, Typography } from "@mui/material"
import api from "../../config/axios"

const expandedDrawerWidth = 240
const miniDrawerWidth = 100

export default function AppLayout(props) {
  const [miniDrawer, setMiniDrawer] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const handleDrawerToggle = () => setMobileOpen(!mobileOpen)
  const toggleMiniDrawer = () => setMiniDrawer(!miniDrawer)

  const [banner, setBanner] = useState(null)

  const getBanner = () => {
    api.get("/admin-settings/globalBanner").then((res) => {
      setBanner(res.data.globalBanner)
    })
  }

  const [contact, setContact] = useState({})

  const getContact = () => {
    api.get("/admin-settings/contact").then((res) => {
      setContact(res.data.contact)
    })
  }

  useEffect(() => {
    getBanner()
    getContact()
  }, [])

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
        contact={contact}
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
        {banner?.isEnabled && (
          <Alert sx={{ mb: 2 }} severity={banner.style}>
            <AlertTitle>{banner.title}</AlertTitle>
            {banner.body}
          </Alert>
        )}
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

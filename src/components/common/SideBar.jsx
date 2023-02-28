import Drawer from "@mui/material/Drawer"
import Toolbar from "@mui/material/Toolbar"
import {
  alpha,
  Box,
  Button,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material"
import routes from "../../config/routes"
import { Link, useLocation } from "react-router-dom"
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined"
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined"
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined"
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined"
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined"
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined"
import ForumOutlinedIcon from "@mui/icons-material/ForumOutlined"
import CodeRoundedIcon from "@mui/icons-material/CodeRounded"
import PersonRoundedIcon from "@mui/icons-material/PersonRounded"

const contactLinks = [
  {
    icon: "Telegram",
    link: "#",
  },
  {
    icon: "Discord",
    link: "#",
  },
  {
    icon: "Zalo",
    link: "#",
  },
  // {
  //   icon: "Linkedin",
  //   link: "#",
  // },
  // {
  //   icon: "Instagram",
  //   link: "#",
  // },
  {
    icon: "Reddit",
    link: "#",
  },
]

const navItems = [
  {
    name: "Dashboard",
    icon: <DashboardOutlinedIcon />,
    link: routes.HOME,
  },
  {
    name: "Pricing",
    icon: <PaidOutlinedIcon />,
    link: routes.PRICING,
  },
  {
    name: "My Labels",
    icon: <InboxOutlinedIcon />,
    link: routes.LABELS,
  },
  {
    name: "CSV Orders",
    icon: <ArticleOutlinedIcon />,
    link: routes.CSV,
  },
  {
    name: "Address Book",
    icon: <HomeOutlinedIcon />,
    link: routes.ADDRESSES,
  },
  {
    name: "Deposit Balance",
    icon: <AccountBalanceWalletOutlinedIcon />,
    link: routes.DEPOSIT,
  },
  {
    name: "Transactions",
    icon: <DescriptionOutlinedIcon />,
    link: routes.TRANSACTIONS,
  },
  {
    name: "Referrals",
    icon: <GroupsOutlinedIcon />,
    link: routes.REFERRALS,
  },
  {
    name: "FAQs",
    icon: <LiveHelpOutlinedIcon />,
    link: routes.FAQS,
  },
  {
    name: "Support",
    icon: <ForumOutlinedIcon />,
    link: routes.SUPPORT,
  },
  {
    name: "API",
    icon: <CodeRoundedIcon />,
    link: "/api",
  },
]

const NavItem = ({ name, icon, link, active, toggle, miniDrawer }) => {
  const theme = useTheme()
  return (
    <Link to={link} onClick={toggle}>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent={miniDrawer ? "center" : "flex-start"}
        sx={{
          "&:hover": {
            bgcolor: alpha(theme.palette.primary.main, 0.1),
            color: theme.palette.primary.main,
          },
          bgcolor: active && alpha(theme.palette.primary.main, 0.1),
          // color: active && theme.palette.primary.main,
          transitionDuration: "0.3s",
          p: 1,
          borderRadius: 1,
        }}
      >
        {icon}
        {!miniDrawer && (
          <Typography sx={{ fontWeight: 500 }}>{name}</Typography>
        )}
      </Stack>
    </Link>
  )
}

const DrawerContent = ({ toggle, miniDrawer }) => {
  const location = useLocation()
  const theme = useTheme()
  return (
    <Stack justifyContent={"space-between"} sx={{ height: "100%" }}>
      <div>
        <Toolbar sx={{ px: 3 }}>
          <img
            src={`/assets/images/logo${miniDrawer ? "-small" : ""}.svg`}
            alt="logo"
            className={miniDrawer ? "mini-logo" : "logo"}
            style={{ margin: "0 auto" }}
          />
        </Toolbar>

        <Stack spacing={1} px={3} pb={2}>
          <Divider />
          <Stack spacing={1.4} sx={{ py: 0.7 }}>
            <Button
              sx={{
                justifyContent: "flex-start",
                color: "#000",
                border: "1px solid #e0e0e0",
                fontSize: 13,
                bgcolor: "#fafafa",
                px: 1.5,
                fontWeight: 500,
                gap: 1,
              }}
            >
              <PersonRoundedIcon /> Regular Member
            </Button>
            <Button
              variant="outlined"
              sx={{
                fontWeight: 500,
                fontSize: 13,
                bgcolor: alpha(theme.palette.primary.main, 0.1),
              }}
            >
              Upgrade to Premium
            </Button>
          </Stack>
          <Divider />
          {navItems.map((navItem) => (
            <NavItem
              {...navItem}
              toggle={toggle}
              r={theme.shape.borderRadius}
              active={navItem.link === location.pathname}
              miniDrawer={miniDrawer}
            />
          ))}
          <Divider />
        </Stack>
      </div>

      <Stack spacing={1} px={miniDrawer ? 2 : 3} pb={1}>
        {!miniDrawer && (
          <Typography color="text.secondary">Connect with us</Typography>
        )}
        <Stack
          direction={"row"}
          justifyContent="space-around"
          alignItems={"center"}
          flexWrap="wrap"
          gap={1}
        >
          {contactLinks.map((c) => (
            <a href={c.link} target="_blank" rel="noreferrer">
              <img
                src={`/assets/images/${
                  c.icon + (theme.palette.mode === "dark" ? "1" : "")
                }.svg`}
                alt={c.DrawerContenticon}
              />
            </a>
          ))}
        </Stack>
      </Stack>
    </Stack>
  )
}

const SideBar = ({ drawerWidth, window, toggle, mobileOpen, miniDrawer }) => {
  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box
      component="nav"
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
      }}
    >
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={toggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            borderRight: "solid 2px rgba(0,0,0,0.1)",
          },
        }}
      >
        <DrawerContent toggle={toggle} />
      </Drawer>
      <Drawer
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "solid 2px rgba(0,0,0,0.1)",
            transition: "width 0.3s",
            overflow: "hidden",
          },
        }}
        variant="permanent"
        open
      >
        <DrawerContent miniDrawer={miniDrawer} />
      </Drawer>
    </Box>
  )
}

export default SideBar

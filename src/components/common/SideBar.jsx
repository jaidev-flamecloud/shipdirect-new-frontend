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
import PersonRoundedIcon from "@mui/icons-material/PersonRounded"
import { useUserContext } from "../../App"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import Icon from "./Icon"
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded"

const contactLinks = [
  {
    icon: "Telegram",
    name: "telegram",
  },

  {
    icon: "Instagram",
    name: "instagram",
  },
  {
    icon: "Discord",
    name: "discord",
  },
  {
    icon: "Twitter",
    name: "twitter",
  },
  {
    icon: "Tik",
    link: "tiktok",
  },
]

const navItems = [
  {
    type: "header",
    name: "MAIN MENU",
  },
  {
    name: "Dashboard",
    icon: "home",
    link: routes.HOME,
  },
  {
    name: "My Labels",
    icon: "receipt-2",
    link: routes.LABELS,
  },
  {
    name: "CSV Orders",
    icon: "document-text",
    link: routes.CSV,
  },
  {
    name: "Address Book",
    icon: "house-2",
    link: routes.ADDRESSES,
  },
  {
    type: "header",
    name: "DEPOSITS",
  },
  {
    name: "Pricing",
    icon: "dollar-circle",
    link: routes.PRICING,
  },
  {
    name: "Deposit Balance",
    icon: "wallet",
    link: routes.DEPOSIT,
  },
  {
    name: "Transactions Log",
    icon: "receipt-item",
    link: routes.TRANSACTIONS,
  },
  {
    type: "header",
    name: "REWARDS",
  },
  {
    name: "Referrals",
    icon: "people",
    link: routes.REFERRALS,
  },
  {
    type: "header",
    name: "SUPPORT",
  },
  {
    name: "FAQs",
    icon: "message-question",
    link: routes.FAQS,
  },
  {
    name: "Ticket Support",
    icon: "ticket",
    link: routes.SUPPORT,
  },
  {
    name: "API",
    icon: "code-circle",
    link: "/api",
  },
]

const NavItem = ({
  name,
  type,
  icon,
  link,
  active,
  toggle,
  miniDrawer,
  contact,
}) => {
  const theme = useTheme()
  return type ? (
    miniDrawer ? (
      ""
    ) : (
      <Typography
        variant="body2"
        color={alpha("#000", 0.4)}
        fontWeight={700}
        pt={1}
      >
        {name}
      </Typography>
    )
  ) : (
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
        <Icon path={`${active ? "bulk" : "outline"}/${icon}`} />
        {!miniDrawer && (
          <Typography sx={{ fontWeight: active ? 600 : 500, fontSize: 15 }}>
            {name}
          </Typography>
        )}
      </Stack>
    </Link>
  )
}

const DrawerContent = ({ toggle, miniDrawer, contact }) => {
  const location = useLocation()
  const theme = useTheme()
  const { user } = useUserContext()

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

        <Stack spacing={0.7} px={3} pb={2}>
          <Stack spacing={1} sx={{ display: miniDrawer ? "none" : "flex" }}>
            <Divider sx={{ bgcolor: "#ececec" }} />
            <Stack spacing={1.4} sx={{ py: 0.7 }}>
              <Button
                sx={{
                  justifyContent: "flex-start",
                  color: user?.isPremium ? "primary.main" : "#000",
                  border: "1px solid #e0e0e0",
                  fontSize: 13,
                  bgcolor: "#fafafa",
                  px: 1.5,
                  fontWeight: user?.isPremium ? 700 : 500,
                  gap: 1,
                }}
              >
                {user?.isPremium ? (
                  <>
                    <VerifiedRoundedIcon /> Premium Member
                  </>
                ) : (
                  <>
                    <PersonRoundedIcon /> Regular Member
                  </>
                )}
              </Button>
              {!user?.isPremium && (
                <Link to="/pricing">
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{
                      fontWeight: 500,
                      fontSize: 13,
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      gap: 0.5,
                    }}
                  >
                    Upgrade to Premium <ArrowForwardIcon fontSize="small" />
                  </Button>
                </Link>
              )}
            </Stack>
            <Divider sx={{ bgcolor: "#ececec" }} />
          </Stack>

          {navItems.map((navItem) => (
            <NavItem
              {...navItem}
              toggle={toggle}
              r={theme.shape.borderRadius}
              active={navItem.link === location.pathname}
              miniDrawer={miniDrawer}
            />
          ))}
        </Stack>
      </div>

      <Stack spacing={1} px={miniDrawer ? 2 : 3} pb={1}>
        {!miniDrawer && (
          <Link to="/tos">
            <Typography fontWeight={600} textAlign="center" variant="body2">
              Terms of Service | Privacy Policy
            </Typography>
          </Link>
        )}
        <Stack
          direction={"row"}
          justifyContent="space-around"
          alignItems={"center"}
          flexWrap="wrap"
          gap={1}
        >
          {contactLinks.map((c) => (
            <a href={contact[c.name] || "#"} target="_blank" rel="noreferrer">
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

const SideBar = ({
  drawerWidth,
  window,
  toggle,
  mobileOpen,
  miniDrawer,
  contact,
}) => {
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
        <DrawerContent toggle={toggle} contact={contact} />
      </Drawer>
      <Drawer
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "solid 2px rgba(0,0,0,0.1)",
            transition: "width 0.3s",
            overflow: "auto",
          },
        }}
        variant="permanent"
        open
      >
        <DrawerContent miniDrawer={miniDrawer} contact={contact} />
      </Drawer>
    </Box>
  )
}

export default SideBar

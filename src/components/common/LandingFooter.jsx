import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"
import { useColorModeContext } from "../containers/ThemeWrapper"
import LandingSection from "../ui/LandingSection"
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded"
import CallRoundedIcon from "@mui/icons-material/CallRounded"
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded"
import { scrollTo } from "../../pages/landing/Landing"

const footerLinks = [
  {
    heading: "ACCOUNT",
    links: [
      [
        {
          name: "Get Started",
          link: "/register",
        },
        {
          name: "Log In",
          link: "/login",
        },
      ],
    ],
  },
  {
    heading: "PRICING",
    links: [
      [
        {
          name: "FedEx",
          link: "/",
          scroll: "pricing",
        },
        {
          name: "UPS",
          link: "/",
          scroll: "pricing",
        },
      ],
      [
        {
          name: "Aramex",
          link: "/",
          scroll: "pricing",
        },
        {
          name: "DHL",
          link: "/",
          scroll: "pricing",
        },
      ],
      [
        {
          name: "USPS",
          link: "/",
          scroll: "pricing",
        },
        {
          name: "Postnord",
          link: "/",
          scroll: "pricing",
        },
      ],
    ],
  },
  {
    heading: "MORE",
    links: [
      [
        {
          name: "FAQs",
          link: "/faqs",
        },
        {
          name: "Reviews",
          link: "/",
          scroll: "reviews",
        },
      ],
    ],
  },
]

const contactLinks = []

const LandingFooter = () => {
  const { isDark } = useColorModeContext()
  return (
    <LandingSection bg={isDark ? "transparent" : "#313E55"} sx={{ pb: 3 }}>
      <Paper
        sx={{
          position: "absolute",
          bottom: "90%",
          left: { xs: "5%", sm: "20%" },
          right: { xs: "5%", sm: "20%" },
          backgroundImage: `url('/assets/images/footer_img.png')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          borderRadius: 2,
          color: "white",
          overflow: "hidden",
        }}
      >
        <Stack
          spacing={3}
          alignItems="flex-start"
          sx={{ background: "rgba(0,0,0,0.5)", p: { xs: 3, sm: 5 } }}
        >
          <div>
            <img
              src={`/assets/images/logo-dark.svg`}
              alt="logo"
              className="logo"
            />
            <Typography variant="h6" my={1}>
              Start shipping in a minute
            </Typography>
            <Typography variant="body2" sx={{ width: "60%" }}>
              It's time to know what's available and how you can move your
              business to the next level
            </Typography>
          </div>
          <Button variant="contained" sx={{ px: 5 }} size="large">
            Start shipping
          </Button>
        </Stack>
      </Paper>
      <Grid container color="white" spacing={3}>
        <Grid item xs={12} sm={6} sx={{ pr: 20 }}>
          <img
            src={`/assets/images/logo-dark.svg`}
            alt="logo"
            className="logo"
          />
          <Stack spacing={1} mt={2}>
            <Typography color="silver"> Our Contact</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <ApartmentRoundedIcon />{" "}
              <Typography>1138 Citron Way, Hayward, CA 94545, USA</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <CallRoundedIcon /> <Typography>+ 1 415 675 1973</Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <MailOutlineRoundedIcon />{" "}
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            gap={2}
            flexWrap="wrap"
          >
            <FooterLinkSection {...footerLinks[0]} />
            <FooterLinkSection {...footerLinks[1]} />
            <FooterLinkSection {...footerLinks[2]} />
          </Stack>
        </Grid>
      </Grid>
      <Divider sx={{ my: 3 }} />
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent={"space-between"}
        spacing={2}
        alignItems="center"
      >
        <Stack direction="row" spaacing={1} alignItems="center">
          <Typography variant="body2" color="silver">
            © 2022 ShipDirect Ltd | All Rights Reserved
          </Typography>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="body2" color="silver">
            Connect with us
          </Typography>
          {contactLinks.map((c) => (
            <a href={c.link} target="_blank" rel="noreferrer">
              <img
                src={`/assets/images/${c.icon}1.svg`}
                alt={c.DrawerContenticon}
              />
            </a>
          ))}
        </Stack>
      </Stack>
    </LandingSection>
  )
}

const FooterLinkSection = ({ heading, links }) => {
  return (
    <Box>
      <Typography color="primary" mb={3}>
        {heading}
      </Typography>
      <Stack direction="row" spacing={3}>
        {links.map((l) => (
          <Stack spacing={2}>
            {l.map((link) => (
              <Link
                to={link.link}
                onClick={() => {
                  if (link?.scroll) {
                    setTimeout(() => {
                      scrollTo(link.scroll)
                    }, 200)
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
          </Stack>
        ))}
      </Stack>
    </Box>
  )
}

export default LandingFooter

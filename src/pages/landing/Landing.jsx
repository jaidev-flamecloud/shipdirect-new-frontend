import {
  alpha,
  Box,
  Button,
  Grid,
  Paper,
  Rating,
  Stack,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material"
import { useEffect, useState } from "react"
import LandingLayout from "../../components/containers/LandingLayout"
import LandingSection from "../../components/ui/LandingSection"
import DoneRoundedIcon from "@mui/icons-material/DoneRounded"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import api from "../../config/axios"
import LoadingContainer from "../../components/containers/LoadingContainer"
import { PricingComp } from "../Pricing"
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded"
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded"
import PaidRoundedIcon from "@mui/icons-material/PaidRounded"
import { Link } from "react-router-dom"

export const testimonials = [
  {
    msg: "Legit label got my label in less than 2 minute and scan done quickly on a holiday.",
    name: "Erasuz#6424",
    desc: "Customer since 2021",
  },
  {
    msg: "Shipease has made shipping easy for me. It is reliable and cost-effective shipping solution for startup company.",
    name: "Lynne – CEO at Chu Choa LLC",
    desc: "Customer since 2022",
  },
  {
    msg: "That’s insane. Shipease offers next day delivery options for a successful 100% delivery and for just $50 per package. Love you guys.",
    name: "@shipbots",
    desc: "Customer since 2022",
  },
  {
    msg: "Absolutely love this product! I’ve able to automate most of our manual logistics tasks, including integrating with new courier partners, checking tracking status, and managing order delays.",
    name: "Hien.ngohcm@gmail.com",
    desc: "Customer since 2022",
  },
  {
    msg: "Shipease helped us to monitor and track our returns in the easiest possible way to reduce our return related customer service traffic by 30%.",
    name: "Ruby Tran",
    desc: "Customer since 2021",
  },
  {
    msg: "Very fast support. Shipease has handled our logistics and helped us focus on procurement and other aspects. Thumbs up to the team!!",
    name: "Stephanie – Founder at Antri Gourmet",
    desc: "Customer since 2022",
  },
]

const postalCompanies = ["usps", "fedex", "dhl", "ups"]

const steps = [
  {
    title: "Create an account",
    desc: "Access to our dashboard right now by sign up with your email",
    img: "create_account",
  },
  {
    title: "Top up your account",
    desc: "We accept all payment method you want. Top up first and pay as you go.",
    img: "deposit_balance",
  },
  {
    title: "Generate labels",
    desc: "Fill info and create your shipping labels. Print with any size.",
    img: "create_label",
  },
]

const features = [
  {
    title: "Smartbooking",
    desc: "Save your time with the easy-to-use platform that automatically chooses the best value. Make you faster with bulk order.",
    img: "csv_order",
    icon: <LocalShippingRoundedIcon color="inherit" fontSize="large" />,
  },
  {
    title: "Easy Cashflow",
    desc: "Allow you to look and download transaction and order history in a time frame. Simply top up your balance with automatic crypto system or with Zelle, Venmo, Cashapp, Bank Transfer",
    img: "deposit_balance",
    icon: <PaidRoundedIcon color="inherit" fontSize="large" />,
  },
  {
    title: "Integrate Seamlessly",
    desc: "Automatic order import wherever you sell products, manage orders, or plan your company resources. Connect ShipEase to your online stores like Amazon, Ebay, Shopify..",
    img: "transaction",
    icon: <Inventory2RoundedIcon color="inherit" fontSize="large" />,
  },
]

const shippingOptions = [
  "Express",
  "Hyperlocal",
  "International",
  "B2B",
  "Same Day",
  "Next Day",
]

export const scrollTo = (id) => document.getElementById(id).scrollIntoView()

const Landing = () => {
  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  const [faqs, setFaqs] = useState([])
  const [loading, setLoading] = useState(false)

  const readFaq = async () => {
    setLoading(true)
    await api
      .get("/faq/read")
      .then((res) => setFaqs(res.data.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    readFaq()
  }, [])
  return " ShipDirect"
  // <LandingLayout>
  //   {/* -------------------------------------BANNER-------------------------------------- */}
  //   <LandingSection
  //     bgImg="banner"
  //     svg
  //     sx={{ pb: { xs: "12rem", sm: "32rem" } }}
  //   >
  //     <Toolbar />
  //     <Stack spacing={2} alignItems="center" textAlign="center">
  //       <Typography sx={{ fontWeight: 600, fontSize: { xs: 30, sm: 50 } }}>
  //         Your Most{" "}
  //         <Typography display="inline" variant="inherit" color="primary">
  //           Reliable
  //         </Typography>{" "}
  //         <br />
  //         Multi-Carrier Shipping Website
  //       </Typography>
  //       <Typography variant="body2" sx={{ width: { sm: "60%" } }}>
  //         The fastest and most-trusted multi-carrier shipping website that
  //         enables you to access seriously discounted UPS, USPS rates and FedEx
  //         special rates. Track and manage your shipments in one place
  //       </Typography>
  //       <Link to="/register">
  //         <Button variant="contained" size="large" sx={{ px: 4 }}>
  //           Start Saving Now
  //         </Button>
  //       </Link>

  //       <Typography sx={{ pt: 5 }}>We Work Alongside</Typography>
  //       <Stack
  //         direction="row"
  //         gap={3}
  //         flexWrap="wrap"
  //         justifyContent={"center"}
  //       >
  //         {postalCompanies.map((company) => (
  //           <img
  //             key={company}
  //             src={`/assets/images/${
  //               company + (theme.palette.mode === "dark" ? "2" : "")
  //             }.svg`}
  //             alt={company}
  //           />
  //         ))}
  //       </Stack>
  //     </Stack>
  //     {/* --------------------------------BANNER IMG------------------------------- */}
  //     <div
  //       style={{
  //         position: "absolute",
  //         left: 0,
  //         right: 0,
  //         bottom: "-3rem",
  //         display: "flex",
  //         justifyContent: "center",
  //       }}
  //     >
  //       <Paper
  //         sx={{
  //           borderRadius: 2,
  //           bgcolor: "primary.main",
  //           background: `url('/assets/images/banner-${theme.palette.mode}.svg')`,
  //           backgroundSize: "cover",
  //           backgroundPosition: "center",
  //           height: { xs: "10rem", sm: "30rem" },
  //         }}
  //       >
  //         <img
  //           src={`/assets/images/banner-${theme.palette.mode}.svg`}
  //           alt="banner"
  //           style={{ visibility: "hidden", height: "100%" }}
  //         />{" "}
  //       </Paper>
  //     </div>
  //   </LandingSection>
  //   {/* -------------------------------------EASY STEPS-------------------------------------- */}
  //   <LandingSection bg="transparent">
  //     <Stack spacing={2} alignItems="center" textAlign="center">
  //       <Typography variant="h4" sx={{ fontWeight: 600 }}>
  //         <Typography display="inline" variant="inherit" color="primary">
  //           Ease
  //         </Typography>{" "}
  //         to ship your packages
  //       </Typography>
  //       <Typography variant="body2" sx={{ width: { sm: "60%" } }}>
  //         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
  //         lacinia metus dolor, a semper quam condimentum vel. Curabitur
  //         pellentesque sapien sed nisl convallis rutrum
  //       </Typography>
  //       <Grid
  //         container
  //         textAlign="left"
  //         pt={3}
  //         spacing={{ xs: 0, sm: 4 }}
  //         sx={{ width: "100%" }}
  //         alignItems="center"
  //       >
  //         <Grid item xs={12} sm={6} mb={{ xs: 2, sm: 0 }}>
  //           <Paper
  //             sx={{
  //               bgcolor: "primary.main",
  //               // height: { xs: "10rem", sm: "100%" },
  //               overflow: "hidden",
  //               background: `url('/assets/images/steps/${theme.palette.mode}/${steps[activeStep].img}.svg')`,
  //               backgroundSize: "cover",
  //               backgroundPosition: "center",
  //             }}
  //           >
  //             <img
  //               style={{ width: "100%", visibility: "hidden" }}
  //               src={`/assets/images/steps/${theme.palette.mode}/${steps[activeStep].img}.svg`}
  //               alt={"step"}
  //             />
  //           </Paper>
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <Stack spacing={5}>
  //             {steps.map((step, i) => (
  //               <Step
  //                 idx={i}
  //                 {...step}
  //                 active={i === activeStep}
  //                 activate={() => setActiveStep(i)}
  //               />
  //             ))}
  //           </Stack>
  //         </Grid>
  //       </Grid>
  //       <Stack
  //         direction={{ xs: "column", sm: "row" }}
  //         spacing={2}
  //         alignItems="center"
  //         pt={5}
  //       >
  //         <Typography>Are you Ready for the Best ?</Typography>
  //         <Link to="/register">
  //           <Button variant="contained" size="large" sx={{ px: 4 }}>
  //             Get Started
  //           </Button>
  //         </Link>
  //       </Stack>
  //     </Stack>
  //   </LandingSection>
  //   {/* -------------------------------------SHIPPING OPTIONS-------------------------------------- */}
  //   <LandingSection sx={{ pb: 6 }}>
  //     <Typography variant="h4" sx={{ fontWeight: 600 }} mb={4}>
  //       <Typography display="inline" variant="inherit" color="primary">
  //         Multiple
  //       </Typography>{" "}
  //       Shipping Options
  //     </Typography>
  //     <Grid container spacing={2} mb={15}>
  //       {shippingOptions.map((option) => (
  //         <Grid item xs={4} sm={2}>
  //           <Stack spacing={1} alignItems="center">
  //             <Box
  //               sx={{
  //                 width: "100%",
  //                 height: { xs: "130px", sm: "222px" },
  //                 borderRadius: 3,
  //                 bgcolor: alpha(theme.palette.primary.main, 0.1),
  //                 display: "flex",
  //                 justifyContent: "center",
  //                 alignItems: "center",
  //               }}
  //             >
  //               <img src={"/assets/images/" + option + ".svg"} alt="option" />
  //             </Box>
  //             <Typography display="inline">{option}</Typography>
  //           </Stack>
  //         </Grid>
  //       ))}
  //     </Grid>
  //     {/* -------------------------------------FEATURES-------------------------------------- */}
  //     <Stack spacing={2} alignItems="center" textAlign="center">
  //       <Typography variant="h4" sx={{ fontWeight: 600 }}>
  //         Powerpacked with all the Best Features
  //       </Typography>
  //       <Typography variant="body2" sx={{ width: { sm: "60%" } }}>
  //         Whoever you are, ShipEase gives you the tools to ship at lightning
  //         speeds, stay carrier compliant 24/7/365 and build stronger-than-ever
  //         customer revenue streams.
  //       </Typography>
  //       <Grid
  //         container
  //         textAlign="left"
  //         pt={3}
  //         spacing={{ xs: 0, sm: 4 }}
  //         sx={{ width: "100%" }}
  //         alignItems="center"
  //       >
  //         <Grid item xs={12} sm={6}>
  //           <Stack spacing={5}>
  //             {features.map((step, i) => (
  //               <Feature
  //                 {...step}
  //                 active={i === activeStep}
  //                 activate={() => setActiveStep(i)}
  //               />
  //             ))}
  //           </Stack>
  //         </Grid>
  //         <Grid item xs={12} sm={6}>
  //           <Paper
  //             sx={{
  //               bgcolor: "primary.main",
  //               // height: { xs: "10rem", sm: "100%" },
  //               overflow: "hidden",
  //               background: `url('/assets/images/steps/${theme.palette.mode}/${features[activeStep].img}.svg')`,
  //               backgroundSize: "cover",
  //               backgroundPosition: "center",
  //             }}
  //           >
  //             <img
  //               style={{ width: "100%", visibility: "hidden" }}
  //               src={`/assets/images/steps/${theme.palette.mode}/${features[activeStep].img}.svg`}
  //               alt={"step"}
  //             />
  //           </Paper>
  //         </Grid>
  //       </Grid>
  //       {/* -------------------------------------CARRIERS CAROUSEL-------------------------------------- */}
  //       <Typography variant="h4" sx={{ fontWeight: 600, pt: 13 }}>
  //         All the Carriers You Need
  //       </Typography>
  //       <Typography variant="body2" sx={{ width: { sm: "60%" } }}>
  //         We partner with over 20+ global carriers so that you can get started
  //         immediately, no integration work needed
  //       </Typography>
  //     </Stack>
  //   </LandingSection>
  //   <LandingSection sx={{ px: 0, py: 0 }}>
  //     <Stack
  //       className="inf-slide"
  //       direction="row"
  //       sx={{ overflow: "hidden", gap: "20px" }}
  //     >
  //       <SliderItem icon="ups2" bg="#FFB406" />
  //       <SliderItem icon="fedex2" bg="#2D037D" />
  //       <SliderItem icon="dhl2" bg="#D71634" />
  //       <SliderItem icon="usps2" bg="#15569C" />
  //       <SliderItem icon="aramex" bg="#E12626" />
  //       <SliderItem icon="postnord" bg="#0498BA" />

  //       <SliderItem icon="ups2" bg="#FFB406" />
  //       <SliderItem icon="fedex2" bg="#2D037D" />
  //       <SliderItem icon="dhl2" bg="#D71634" />
  //       <SliderItem icon="usps2" bg="#15569C" />
  //       <SliderItem icon="aramex" bg="#E12626" />
  //       <SliderItem icon="postnord" bg="#0498BA" />
  //     </Stack>
  //   </LandingSection>
  //   {/* -------------------------------------PRICING-------------------------------------- */}
  //   <LandingSection id="pricing">
  //     <Stack spacing={2} alignItems="center" textAlign="center">
  //       <Typography variant="h4" sx={{ fontWeight: 600 }}>
  //         Transparent Pricing
  //       </Typography>
  //       <Typography variant="body2" sx={{ width: { sm: "60%" } }}>
  //         Donec finibus semper nunc eget tempor. Curabitur pharetra eros et
  //         risus aliquam efficitur. Nulla facilisi.
  //       </Typography>
  //     </Stack>
  //     <PricingComp />
  //   </LandingSection>
  //   {/* -------------------------------------FREE-------------------------------------- */}
  //   <LandingSection
  //     bgImg="landing_img"
  //     sx={{
  //       height: { xs: "50rem", sm: "auto" },
  //       display: { xs: "flex", sm: "block" },
  //       alignItems: "flex-end",
  //     }}
  //   >
  //     <Paper sx={{ width: { sm: "50%" }, p: 5, borderRadius: 2 }}>
  //       <Stack spacing={3} alignItems="flex-start">
  //         <div>
  //           <Typography variant="h5" mb={1}>
  //             ShipEase is Free!
  //           </Typography>
  //           <Typography variant="body2">
  //             ShipEase is offered without charge since we profit from the
  //             shipment volume passed to our partner shipping carriers. All of
  //             this is a part of our objective to assist vendors like you in
  //             staying competitive.
  //           </Typography>
  //         </div>
  //         <Stack spacing={1.5}>
  //           <Stack direction="row" spacing={1.5}>
  //             <DoneRoundedIcon color="primary" />
  //             <Typography variant="body1">Pay as you go model</Typography>
  //           </Stack>
  //           <Stack direction="row" spacing={1.5}>
  //             <DoneRoundedIcon color="primary" />
  //             <Typography variant="body1">No monthly charges</Typography>
  //           </Stack>
  //           <Stack direction="row" spacing={1.5}>
  //             <DoneRoundedIcon color="primary" />
  //             <Typography variant="body1">
  //               Unlimited users, orders and shipping labels
  //             </Typography>
  //           </Stack>
  //           <Stack direction="row" spacing={1.5}>
  //             <DoneRoundedIcon color="primary" />
  //             <Typography variant="body1">
  //               Free email notifications
  //             </Typography>
  //           </Stack>
  //         </Stack>
  //         <Link to="/register">
  //           <Button variant="contained" sx={{ px: 5 }} size="large">
  //             Start shipping
  //           </Button>
  //         </Link>
  //       </Stack>
  //     </Paper>
  //   </LandingSection>
  //   {/* -------------------------------------PAYMENT METHODS-------------------------------------- */}
  //   <LandingSection sx={{ pb: 1 }}>
  //     <Typography variant="h4" sx={{ fontWeight: 600 }} mb={4}>
  //       <Typography display="inline" variant="inherit" color="primary">
  //         Accepted
  //       </Typography>{" "}
  //       Payment Methods
  //     </Typography>
  //   </LandingSection>
  //   <LandingSection sx={{ px: 0, pt: 2, pb: 1 }}>
  //     <Stack
  //       direction={"row"}
  //       alignItems="center"
  //       justifyContent={"center"}
  //       mb={15}
  //       flexWrap="wrap"
  //       sx={{ gap: 3 }}
  //     >
  //       <Payment name="Zelle" bg="#6C1CD3">
  //         <img
  //           style={{ width: "5rem" }}
  //           src={`/assets/images/zelle.svg`}
  //           alt=""
  //         />
  //       </Payment>
  //       <Payment name="Venmo" bg="#008CFF">
  //         <img
  //           style={{ width: "5rem" }}
  //           src={`/assets/images/venmo.svg`}
  //           alt=""
  //         />
  //       </Payment>
  //       <Payment name="Cashapp" bg="#00D54B">
  //         <img
  //           style={{ width: "7rem" }}
  //           src={`/assets/images/cashapp.svg`}
  //           alt=""
  //         />
  //       </Payment>
  //       <Payment name="Cryptocurrencies">
  //         <img
  //           style={{ width: "2rem" }}
  //           src={`/assets/images/bitcoin.svg`}
  //           alt=""
  //         />
  //         <img
  //           style={{ width: "2rem" }}
  //           src={`/assets/images/ethereum.svg`}
  //           alt=""
  //         />
  //         <img
  //           style={{ width: "2rem" }}
  //           src={`/assets/images/tether.svg`}
  //           alt=""
  //         />
  //         <img
  //           style={{ width: "2rem" }}
  //           src={`/assets/images/usdcoin.svg`}
  //           alt=""
  //         />
  //         <Typography>And more</Typography>
  //       </Payment>
  //       <Payment name="Bank Transfer">
  //         <img
  //           style={{ width: "3rem" }}
  //           src={`/assets/images/bank.svg`}
  //           alt=""
  //         />
  //       </Payment>
  //     </Stack>
  //   </LandingSection>
  //   {/* -------------------------------------FAQS-------------------------------------- */}
  //   <LandingSection sx={{ pb: "17rem" }}>
  //     <Stack spacing={2} alignItems="center" textAlign="center" mb={20}>
  //       <Typography variant="h4" sx={{ fontWeight: 600 }}>
  //         Got Questions ?
  //       </Typography>
  //       <Typography variant="body2" sx={{ width: "60%" }}>
  //         We’ve answered all the most Frequently Asked ones
  //       </Typography>
  //       <LoadingContainer laoding={loading}>
  //         <Stack spacing={2} pt={3}>
  //           {faqs.map((faq, i) => (
  //             <Accordion key={i}>
  //               <AccordionSummary expandIcon={<ExpandMoreIcon />}>
  //                 <Typography sx={{ fontSize: 18 }}>
  //                   {faq.question}
  //                 </Typography>
  //               </AccordionSummary>
  //               <AccordionDetails>
  //                 <Typography textAlign={"left"}>{faq.answer}</Typography>
  //               </AccordionDetails>
  //             </Accordion>
  //           ))}
  //         </Stack>
  //       </LoadingContainer>
  //       <Stack direction="row" spacing={1} alignItems="center" pt={3}>
  //         <Typography>Got More Questions?</Typography>
  //         <Link to="/faqs">
  //           <Button size="large">Read All FAQs</Button>
  //         </Link>
  //       </Stack>
  //     </Stack>
  //     {/* -------------------------------------TESTIMONIALS-------------------------------------- */}
  //     <Stack
  //       id="reviews"
  //       spacing={2}
  //       alignItems="center"
  //       textAlign="center"
  //       mb={5}
  //     >
  //       <Typography variant="h4" sx={{ fontWeight: 600 }}>
  //         What our Customers Say
  //       </Typography>
  //       <Typography variant="body2" sx={{ width: "60%" }}>
  //         See what our customers are saying about our service
  //       </Typography>
  //     </Stack>
  //     <Grid container spacing={3}>
  //       {testimonials.map((t) => (
  //         <Grid item xs={12} sm={4}>
  //           <Box
  //             sx={{
  //               height: "100%",
  //               borderRadius: 2,
  //               px: 4,
  //               py: 3,
  //               bgcolor: alpha(theme.palette.primary.main, 0.05),
  //             }}
  //           >
  //             <Typography variant="body2" mb={2}>
  //               {t.msg}
  //             </Typography>
  //             <Stack
  //               direction={{ xs: "column", sm: "row" }}
  //               justifyContent={"space-between"}
  //               spacing={2}
  //               alignItems="center"
  //             >
  //               <div>
  //                 <Typography variant="body1">{t.name}</Typography>
  //                 <Typography color="primary" variant="body2">
  //                   {t.desc}
  //                 </Typography>
  //               </div>
  //               <Rating value={5} sx={{ color: "#3ABF7C" }} />
  //             </Stack>
  //           </Box>
  //         </Grid>
  //       ))}
  //     </Grid>
  //   </LandingSection>
  // </LandingLayout>
}

const Step = ({ idx, title, desc, active, activate }) => {
  const theme = useTheme()
  return (
    <Stack
      spacing={0.5}
      onClick={activate}
      sx={{
        borderRadius: 1,
        p: 2,
        cursor: "pointer",
        bgcolor: active && alpha(theme.palette.primary.main, 0.1),
        border: active && `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <Typography color="primary">Step 0{idx + 1}</Typography>
      <Typography variant="h6">{title}</Typography>
      <Typography sx={{ color: "text.secondary" }} variant="body">
        {desc}
      </Typography>
    </Stack>
  )
}

const Feature = ({ title, icon, desc, active, activate }) => {
  const theme = useTheme()
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      onClick={activate}
      sx={{
        borderRadius: 1,
        p: 2,
        cursor: "pointer",
        bgcolor: active && alpha(theme.palette.primary.main, 0.1),
        border: active && `1px solid ${theme.palette.primary.main}`,
      }}
    >
      <Box
        sx={{
          width: "63px",
          height: "63px",
          borderRadius: 2,
          bgcolor:
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.1)",
          flex: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: active ? "primary.main" : "gray",
        }}
      >
        {icon}
      </Box>
      <Stack spacing={0}>
        <Typography variant="h6">{title}</Typography>
        <Typography sx={{ color: "text.secondary" }} variant="body">
          {desc}
        </Typography>
      </Stack>
    </Stack>
  )
}

const Payment = ({ name, bg, children, sx }) => {
  const theme = useTheme()
  return (
    <Box sx={sx}>
      <Stack
        direction={"row"}
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{
          bgcolor: bg || alpha(theme.palette.primary.main, 0.1),
          borderRadius: 3,
          height: "100px",
          padding: "30px",
        }}
      >
        {children}
      </Stack>
      <Typography variant="h6" textAlign={"center"} mt={2}>
        {name}
      </Typography>
    </Box>
  )
}

const SliderItem = ({ icon, bg }) => (
  <Stack
    direction={"row"}
    spacing={2}
    alignItems="center"
    justifyContent="center"
    sx={{
      flex: "none",
      bgcolor: bg,
      borderRadius: 3,
      height: "100px",
      width: "200px",
    }}
  >
    <img src={`/assets/images/${icon}.svg`} alt="" />
  </Stack>
)

export default Landing

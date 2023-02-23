import Box from "@mui/material/Box"
import LandingFooter from "../common/LandingFooter"
import LandingNavbar from "../common/LandingNavbar"

const LandingLayout = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <LandingNavbar />
      <Box component="main" sx={{ width: "100%" }}>
        {children}
        <LandingFooter />
      </Box>
    </Box>
  )
}

export default LandingLayout

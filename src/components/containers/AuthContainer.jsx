import {
  Stack,
  Container,
  Typography,
  Button,
  Paper,
  useTheme,
  Box,
} from "@mui/material"
import ColorModeToggle from "../common/ColorModeToggle"
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded"
import { Link } from "react-router-dom"
import routes from "../../config/routes"
import Loader from "../ui/Loader"

const AuthContainer = ({
  title,
  subtitle,
  submitText,
  forgotPassBtn,
  createAccountBtn,
  hideColorToggle,
  submit,
  loading,
  bottomContent,
  children,
}) => {
  const theme = useTheme()
  return (
    <Container maxWidth="sm">
      <Stack
        spacing={2}
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
        py={2}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          mb={0}
          alignItems="center"
        >
          <Link to="/">
            <img
              src={`/assets/images/logo-small.svg`}
              alt="logo"
              style={{ width: "70px" }}
            />
          </Link>

          <div>
            {hideColorToggle && (
              <Box sx={{ display: { xs: "inline", md: "none" }, mr: 1.5 }}>
                <Link to={routes.LOGIN}>
                  <Button variant="contained">
                    Log In <ArrowForwardRoundedIcon fontSize="small" />
                  </Button>
                </Link>
              </Box>
            )}
          </div>
        </Stack>
        <div>
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: 24,
                md: 34,
              },
            }}
            mb={0.5}
          >
            {title}
          </Typography>
          <Typography
            color="grey"
            sx={{
              fontSize: {
                xs: 16,
                md: 20,
              },
            }}
          >
            {subtitle}
          </Typography>
        </div>
        <form onSubmit={submit}>
          <Stack spacing={2}>
            {children}

            <Button
              type="submit"
              variant="contained"
              sx={{
                py: 1.5,
                fontSize: 18,
              }}
            >
              {loading ? (
                <Loader />
              ) : (
                <>
                  {submitText} <ArrowForwardRoundedIcon fontSize="small" />
                </>
              )}
            </Button>
          </Stack>
        </form>
        {forgotPassBtn && (
          <Link
            to={routes.FORGOT_PASS}
            style={{
              color: theme.palette.primary.main,
              fontWeight: 500,
              margin: "1rem auto",
            }}
          >
            Forgot Password?
          </Link>
        )}
        {createAccountBtn && (
          <Paper
            elevation={0}
            sx={{
              textAlign: "center",
              py: 2,
              fontWeight: 500,
            }}
          >
            Don’t have an account?{" "}
            <Link
              to={routes.REGISTER}
              style={{ color: theme.palette.primary.main }}
            >
              Create Account
            </Link>
          </Paper>
        )}
        {bottomContent}
      </Stack>

      {/* <Typography
        sx={{
          textAlign: "center",
          position: "sticky",
          bottom: 0,
        }}
      >
        © 2022 ShipEase Ltd | All Rights Reserved
      </Typography> */}
    </Container>
  )
}

export default AuthContainer

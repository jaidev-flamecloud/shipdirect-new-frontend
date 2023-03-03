import {
  Stack,
  Container,
  Typography,
  Button,
  Paper,
  useTheme,
  Box,
} from "@mui/material"
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
    <Container sx={{ position: "relative" }}>
      <Stack
        spacing={2}
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
        py={2}
        px={10}
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
              style={{ width: "55px" }}
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
                xs: 22,
                md: 25,
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
                xs: 13,
                md: 14,
              },
            }}
          >
            {subtitle}
          </Typography>
        </div>
        <form onSubmit={submit}>
          <Stack spacing={1}>
            {children}

            <Button
              type="submit"
              variant="contained"
              sx={{
                fontSize: 16,
                gap: 1,
              }}
            >
              {loading ? <Loader /> : <>{submitText}</>}
            </Button>
          </Stack>
        </form>
        {forgotPassBtn && (
          <Link
            to={routes.FORGOT_PASS}
            style={{
              color: theme.palette.text.secondary,
              fontWeight: 500,
              fontSize: 14,
              margin: "1rem auto",
            }}
          >
            Forgot Password?
          </Link>
        )}
        {createAccountBtn && (
          <Box sx={{ pt: 1 }}>
            <Paper
              elevation={0}
              sx={{
                textAlign: "center",
                py: 1.3,
                fontWeight: 500,
                border: "1px solid #e0e0e0",
                bgcolor: "transparent",
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
          </Box>
        )}
        {bottomContent}
      </Stack>

      <Typography
        sx={{
          textAlign: "center",
          position: "absolute",
          bottom: "0.7rem",
          right: 0,
          left: 0,
        }}
        variant="body2"
      >
        Copyright © 2023 ShipDirect. All rights reserved
      </Typography>
    </Container>
  )
}

export default AuthContainer

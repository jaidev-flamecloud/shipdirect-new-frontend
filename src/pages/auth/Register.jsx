import { Grid, Paper, Typography, useTheme } from "@mui/material"
import Field, { PasswordField } from "../../components/ui/Field"
import AuthContainer from "../../components/containers/AuthContainer"
import AuthSidePic from "../../components/common/AuthSidePic"
import ReCAPTCHA from "react-google-recaptcha"
import { useRef, useState } from "react"
import api from "../../config/axios"
import env from "../../config/env"
import { toast } from "react-toastify"
import { Link } from "react-router-dom"
import routes from "../../config/routes"

const Register = () => {
  const [loading, setLoading] = useState(false)
  const recaptchaRef = useRef(null)
  const theme = useTheme()

  // const [searchParams, setSearchParams] = useSearchParams()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const captchaToken = await recaptchaRef.current.executeAsync()
    recaptchaRef.current.reset()

    const data = {
      username: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      captchaToken,
      // referralToken: searchParams.get("ref"),
    }

    await api
      .post("/auth/register", data)
      .then((res) => {
        toast.success(res.data.message)
        localStorage.setItem("email", data.email)
        setTimeout(() => {
          window.location.href = "/verify"
        }, 1000)
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setLoading(false))
  }
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <Grid item xs>
        <AuthContainer
          title={"Welcome to ShipDirect"}
          subtitle="Get access to the most reliable label providers on the internet "
          submitText="Get Started"
          hideColorToggle
          submit={handleSubmit}
          loading={loading}
          bottomContent={
            <>
              <Typography color="text.secondary" textAlign={"center"}>
                By Proceeding you agree to our
                <Link to="/terms">
                  <u>Terms of Service</u>{" "}
                </Link>
                and{" "}
                <Link to="/terms">
                  <u>Privacy Policy </u>
                </Link>
              </Typography>
              <Paper
                elevation={0}
                sx={{
                  textAlign: "center",
                  py: 2,
                  fontWeight: 500,
                }}
              >
                Already have an account?{" "}
                <Link
                  to={routes.LOGIN}
                  style={{ color: theme.palette.primary.main }}
                >
                  Log In
                </Link>
              </Paper>{" "}
            </>
          }
        >
          <Field
            label="Username"
            name="name"
            placeholder="Create a username"
            required
          />
          <Field
            label="Email Address"
            name="email"
            placeholder="Enter your email address"
            type="email"
            required
          />
          <PasswordField
            label="Password"
            placeholder="Set a Strong Password"
            name="password"
            required
          />
          <PasswordField
            label="Confirm Password"
            placeholder="Confirm your password"
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={env.RECAPTCHA_KEY}
            size="invisible"
          />
        </AuthContainer>
      </Grid>
      <AuthSidePic />
    </Grid>
  )
}

export default Register

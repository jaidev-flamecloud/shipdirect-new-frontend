import { Grid } from "@mui/material"
import Field, { PasswordField } from "../../components/ui/Field"
import AuthContainer from "../../components/containers/AuthContainer"
import AuthSidePic from "../../components/common/AuthSidePic"
import ReCAPTCHA from "react-google-recaptcha"
import env from "../../config/env"
import { useRef, useState } from "react"
import api from "../../config/axios"
import { toast } from "react-toastify"
import { useUserContext } from "../../App"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const recaptchaRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const { setUser } = useUserContext()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const captchaToken = await recaptchaRef.current.executeAsync()
    recaptchaRef.current.reset()

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      captchaToken,
    }

    await api
      .post("/auth/login", data)
      .then((res) => {
        toast.success(res.data.message)
        localStorage.setItem("token", res.data.accessToken)
        // window.location.href = "/"
        api
          .get("/auth/access")
          .then((res) => {
            setUser(res.data)

            localStorage.setItem("ref-token", res.data.referralToken)
            localStorage.setItem("api-key", res.data.api_key)
            navigate("/")
          })
          .finally(() => setLoading(false))
      })
      .catch((err) => {
        toast.error(err.response.data.message)
        if (err.response.status === 403) {
          localStorage.setItem("email", data.email)
          setTimeout(() => {
            window.location.href = "/verify"
          }, 1500)
        }
      })
      .finally(() => setLoading(false))
  }
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <AuthSidePic isLogin />
      <Grid item xs>
        <AuthContainer
          title="Welcome Back"
          subtitle="Manage all your labels, and create new labels instantly"
          submitText="Log In"
          createAccountBtn
          forgotPassBtn
          submit={handleSubmit}
          loading={loading}
        >
          <Field
            label="Username or Email"
            placeholder="Enter your username or email"
            name="email"
            required
          />

          <PasswordField
            label="Password"
            placeholder="Enter your password"
            name="password"
            required
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={env.RECAPTCHA_KEY}
            size="invisible"
          />
        </AuthContainer>
      </Grid>
    </Grid>
  )
}

export default Login

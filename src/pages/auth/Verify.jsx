import Field from "../../components/ui/Field"
import AuthContainer from "../../components/containers/AuthContainer"
import ReCAPTCHA from "react-google-recaptcha"
import env from "../../config/env"
import { useRef, useState } from "react"
import api from "../../config/axios"
import { toast } from "react-toastify"
import AuthSidePic from "../../components/common/AuthSidePic"
import { Grid } from "@mui/material"

const Verify = () => {
  const recaptchaRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const captchaToken = await recaptchaRef.current.executeAsync()
    recaptchaRef.current.reset()

    const data = {
      email: localStorage.getItem("email"),
      OTP: e.target.otp.value,
      captchaToken,
    }

    await api
      .post("/auth/verifyEmail", data)
      .then((res) => {
        toast.success(res.data.message)
        localStorage.setItem("token", res.data.accessToken)
        window.location.href = "/"
        localStorage.removeItem("email")
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setLoading(false))
  }
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      <AuthSidePic isLogin />
      <Grid item xs>
        <AuthContainer
          title="Authenticate"
          subtitle="Enter the OTP shared on your registered email address"
          submitText="Enter OTP"
          submit={handleSubmit}
          loading={loading}
          createAccountBtn
        >
          <Field
            type="number"
            name="otp"
            label="6 Digit OTP"
            placeholder="*  *  *  *  *  *  "
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

export default Verify

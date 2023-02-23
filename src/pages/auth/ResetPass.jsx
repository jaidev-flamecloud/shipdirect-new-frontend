import Field, { PasswordField } from "../../components/ui/Field"
import AuthContainer from "../../components/containers/AuthContainer"
import ReCAPTCHA from "react-google-recaptcha"
import env from "../../config/env"
import { useRef, useState } from "react"
import api from "../../config/axios"
import { toast } from "react-toastify"

const ResetPass = () => {
  const [loading, setLoading] = useState(false)
  const recaptchaRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const captchaToken = await recaptchaRef.current.executeAsync()
    recaptchaRef.current.reset()

    if (e.target.newPassword.value !== e.target.confirmPassword.value) {
      setLoading(false)
      toast.error("Passwords do not match")
      return
    }

    const data = {
      email: localStorage.getItem("email"),
      newPassword: e.target.newPassword.value,
      OTP: e.target.otp.value,
      captchaToken,
    }

    await api
      .post("/auth/resetPassword", data)
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
    <AuthContainer
      title="Reset Password"
      subtitle="Reset and remember your new password"
      submitText="Get Started"
      submit={handleSubmit}
      loading={loading}
    >
      <Field
        type="number"
        name="otp"
        label="OTP"
        placeholder="Enter OTP sent to mail"
      />
      <PasswordField
        label="Set Password"
        name="newPassword"
        placeholder="Set a Strong Password"
      />
      <PasswordField
        name="confirmPassword"
        label="Confirm Password"
        placeholder="Confirm your password"
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={env.RECAPTCHA_KEY}
        size="invisible"
      />
    </AuthContainer>
  )
}

export default ResetPass

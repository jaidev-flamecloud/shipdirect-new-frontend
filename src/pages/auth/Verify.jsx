import Field from "../../components/ui/Field"
import AuthContainer from "../../components/containers/AuthContainer"
import ReCAPTCHA from "react-google-recaptcha"
import env from "../../config/env"
import { useRef, useState } from "react"
import api from "../../config/axios"
import { toast } from "react-toastify"

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
    <AuthContainer
      title="Verify Email"
      subtitle="Enter the otp sent to your email to verify your account."
      submitText="Verify"
      submit={handleSubmit}
      loading={loading}
    >
      <Field
        type="number"
        name="otp"
        label="OTP"
        placeholder="Enter the OTP"
        required
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={env.RECAPTCHA_KEY}
        size="invisible"
      />
    </AuthContainer>
  )
}

export default Verify

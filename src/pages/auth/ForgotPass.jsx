import Field from "../../components/ui/Field"
import AuthContainer from "../../components/containers/AuthContainer"
import ReCAPTCHA from "react-google-recaptcha"
import env from "../../config/env"
import { useRef, useState } from "react"
import api from "../../config/axios"
import { toast } from "react-toastify"
import routes from "../../config/routes"

const ForgotPass = () => {
  const [loading, setLoading] = useState(false)
  const recaptchaRef = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const captchaToken = await recaptchaRef.current.executeAsync()
    recaptchaRef.current.reset()

    const data = {
      email: e.target.email.value,
      captchaToken,
    }

    await api
      .post("/auth/forgotPassword", data)
      .then((res) => {
        toast.success(res.data.message)
        localStorage.setItem("email", data.email)
        setTimeout(() => {
          window.location.href = routes.RESET_PASS
        }, 3000)
      })
      .catch((err) => toast.error(err.response.data.message))
      .finally(() => setLoading(false))
  }
  return (
    <AuthContainer
      title="Forgot Password"
      subtitle="Enter your registered email to reset password"
      submitText="Send Password Reset Link"
      createAccountBtn
      submit={handleSubmit}
      loading={loading}
    >
      <Field
        label="Email Address"
        placeholder="Enter your email"
        type="email"
        name="email"
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

export default ForgotPass

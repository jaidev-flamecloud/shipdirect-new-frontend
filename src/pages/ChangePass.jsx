import { alpha, Button, Grid, Stack, useTheme } from "@mui/material"
import React, { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useUserContext } from "../App"
import PageContainer from "../components/containers/PageContainer"
import Field, { PasswordField } from "../components/ui/Field"
import Loader from "../components/ui/Loader"
import Section from "../components/ui/Section"
import api from "../config/axios"
import { formatDate } from "../utilities/misc"

const ChangePass = () => {
  const [loading, setLoading] = useState(false)
  const [loading2, setLoading2] = useState(false)
  const { user, refresh } = useUserContext()

  const [newData, setNewData] = useState({
    email: "",
    username: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewData({
      ...newData,
      [name]: value,
    })
  }

  useEffect(() => {
    setNewData({
      email: user.email,
      username: user.username,
    })
  }, [user])

  const changePassword = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (e.target.newPassword.value !== e.target.password2.value) {
      toast.error("Passwords do not match")
      setLoading(false)
      return
    }

    const data = {
      oldPassword: e.target.oldPassword.value,
      newPassword: e.target.newPassword.value,
    }

    await api
      .put("/auth/update-password", data)
      .then((res) => {
        toast.success(res.data.message)
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
      .finally(() => setLoading(false))
  }

  const update = async (e) => {
    setLoading2(true)
    await api
      .put("/auth/updateProfile", newData)
      .then((res) => {
        toast.success(res.data.message)
        refresh()
      })
      .catch((err) => {
        toast.error(err.response.data.message)
      })
      .finally(() => setLoading2(false))
  }

  const theme = useTheme()

  return (
    <PageContainer
      title="My Profile"
      desc="Edit all your profile related settings here"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Section title="Profile Details" sx={{ mb: 2 }}>
            <Stack spacing={1} mb={2}>
              <Field disabled value={user.id} label="User ID" />
              <Field
                name="username"
                value={newData.username}
                onChange={handleChange}
                label="Username"
              />
              <Field
                name="email"
                value={newData.email}
                label="Email Address"
                onChange={handleChange}
              />
              <Field
                disabled
                value={user.role === "user" ? "Regular User" : "Admin"}
                label="Role"
              />
              <Field
                disabled
                value={formatDate(user.createdAt)}
                label="Joined"
              />
              <Field disabled value={"None"} label="Referrer" />
            </Stack>
            <Button
              onClick={update}
              fullWidth
              variant="outlined"
              sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
            >
              {loading2 ? <Loader primary /> : "Update Settings"}
            </Button>
          </Section>
          <Stack direction="row" spacing={1}>
            <Button
              fullWidth
              variant="contained"
              sx={{ gap: 1, bgcolor: "#5865f2", fontSize: 12 }}
            >
              <img
                src="/assets/images/discord-icon.svg"
                alt="discord"
                style={{ width: "1.2rem" }}
              />
              Connect your Discord
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{ gap: 1, bgcolor: "#0082c3", fontSize: 12 }}
            >
              <i class="fa fa-paper-plane"></i>
              Connect your Telegram
            </Button>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Section title="Reset Password">
            <form onSubmit={changePassword}>
              <Stack spacing={1} mb={2}>
                <PasswordField
                  label="Current Password"
                  name="oldPassword"
                  placeholder="Your existing password"
                />
                <PasswordField
                  name="newPassword"
                  label="New Password"
                  placeholder="Enter your new password"
                />
                <PasswordField
                  name="password2"
                  label="Confirm Password"
                  placeholder="Confirm your new password"
                />
              </Stack>
              <Button
                fullWidth
                type="submit"
                variant="outlined"
                sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
              >
                {loading ? <Loader primary /> : "Reset Password"}
              </Button>
            </form>
          </Section>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default ChangePass

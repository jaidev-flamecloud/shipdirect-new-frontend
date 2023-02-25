import { Button, Grid, Stack } from "@mui/material"
import React, { useState } from "react"
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

  const { user } = useUserContext()

  return (
    <PageContainer
      title="My Profile"
      desc="Edit all your profile related settings here"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Section title="Profile Details">
            <Stack spacing={2}>
              <Field disabled value={user.username} label="Username" />
              <Field disabled value={user.email} label="Email Address" />
              <Field
                disabled
                value={formatDate(user.createdAt)}
                label="Joined"
              />
            </Stack>
          </Section>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Section title="Reset Password">
            <form onSubmit={changePassword}>
              <Stack spacing={2}>
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
                <Button type="submit" variant="contained">
                  {loading ? <Loader /> : "Reset Password"}
                </Button>
              </Stack>
            </form>
          </Section>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default ChangePass

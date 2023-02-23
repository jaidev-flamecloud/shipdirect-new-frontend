import { Button, Grid, Stack } from "@mui/material"
import React, { useState } from "react"
import { toast } from "react-toastify"
import PageContainer from "../components/containers/PageContainer"
import { PasswordField } from "../components/ui/Field"
import Loader from "../components/ui/Loader"
import api from "../config/axios"

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

  return (
    <PageContainer title="Change Password">
      <Grid container>
        <Grid sm={6} sx={{ mx: "auto" }}>
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
                {loading ? <Loader /> : "Change"}
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </PageContainer>
  )
}

export default ChangePass

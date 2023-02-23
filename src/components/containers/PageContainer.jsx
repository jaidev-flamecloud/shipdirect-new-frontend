import { Stack, Typography } from "@mui/material"

const PageContainer = ({ title, end, desc, children }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="h6" sx={{ fontWeight: 500 }}>
          {title}
        </Typography>

        {end}
      </Stack>
      <Typography mb={2} mt={1}>
        {desc}
      </Typography>

      {children}
    </>
  )
}

export default PageContainer

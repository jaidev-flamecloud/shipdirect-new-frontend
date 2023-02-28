import { Stack, Typography } from "@mui/material"

const PageContainer = ({ title, end, desc, children }) => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={{ fontWeight: 500, fontSize: 20 }}>{title}</Typography>

        {end}
      </Stack>
      <Typography mb={2} mt={0.3} color="text.secondary" fontWeight={500}>
        {desc}
      </Typography>

      {children}
    </>
  )
}

export default PageContainer

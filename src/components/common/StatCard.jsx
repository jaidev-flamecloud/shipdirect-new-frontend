import { alpha, Card, Stack, Typography, useTheme } from "@mui/material"

const StatCard = ({ icon, name, value }) => {
  const theme = useTheme()
  return (
    <Card
      elevation={0}
      sx={{
        px: 2.5,
        py: 3,
        color: theme.palette.primary.main,
        border: "1px solid #e0e0e0",
      }}
    >
      <Stack
        direction="row"
        justifyContent={"space-between"}
        alignItems="center"
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          {icon}
          <Typography color={theme.palette.text.primary}>{name}</Typography>
        </Stack>
        <Typography color={theme.palette.text.primary} variant="h6">
          {value}
        </Typography>
      </Stack>
    </Card>
  )
}

export default StatCard

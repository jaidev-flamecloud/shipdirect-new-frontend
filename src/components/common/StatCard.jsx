import { alpha, Box, Card, Stack, Typography, useTheme } from "@mui/material"

const StatCard = ({ icon, name, value }) => {
  const theme = useTheme()
  return (
    <Card
      elevation={0}
      sx={{
        py: 1.9,
        px: 2.5,
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
          <Box
            sx={{
              borderRadius: 9999,
              height: "40px",
              width: "40px",
              border: `1px solid ${theme.palette.primary.main}`,
              bgcolor: alpha(theme.palette.primary.main, 0.25),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {icon}
          </Box>

          <Typography
            color={theme.palette.text.primary}
            fontSize={15}
            fontWeight={600}
          >
            {name}
          </Typography>
        </Stack>
        <Typography
          color={theme.palette.text.primary}
          variant="h6"
          fontWeight={700}
        >
          {value}
        </Typography>
      </Stack>
    </Card>
  )
}

export default StatCard

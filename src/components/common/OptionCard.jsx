import { alpha, Box, Typography, useTheme } from "@mui/material"

const OptionCard = ({
  name,
  imgSrc,
  active,
  activate,
  onClick,
  border,
  content,
  showName,
  sx,
}) => {
  const theme = useTheme()
  return (
    <Box
      onClick={onClick || activate}
      sx={{
        borderRadius: 1,
        p: 1,
        height: "42px",
        bgcolor: active
          ? alpha(theme.palette.primary.main, 0.1)
          : alpha(theme.palette.text.primary, 0.05),
        border:
          active &&
          `2px solid ${
            border
              ? theme.palette.mode === "dark"
                ? "#fff"
                : theme.palette.primary.main
              : theme.palette.primary.main
          }`,
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...sx,
      }}
    >
      {content ||
        (imgSrc ? (
          <img style={{ height: "100%" }} src={imgSrc} alt={name} />
        ) : (
          name
        ))}
      {showName && (
        <Typography sx={{ ml: 1, fontWeight: 500 }}>{name}</Typography>
      )}
    </Box>
  )
}

export default OptionCard

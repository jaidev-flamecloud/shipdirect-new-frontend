import { alpha, IconButton, useTheme } from "@mui/material"

const IconBtn = ({ rounded, children, bg, sx = {}, ...props }) => {
  const theme = useTheme()
  return (
    <IconButton
      {...props}
      sx={{
        backgroundColor: alpha(bg, 0.1),
        "&:hover": {
          backgroundColor: alpha(bg, 0.2),
        },
        borderRadius: rounded ? "" : `${theme.shape.borderRadius}px !important`,
        ...sx,
      }}
    >
      {children}
    </IconButton>
  )
}

export default IconBtn

import { useTheme } from "@mui/material"
import { useColorModeContext } from "../containers/ThemeWrapper"
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded"
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded"
import IconBtn from "../ui/IconBtn"

const ColorModeToggle = ({ rounded, sx = {} }) => {
  const theme = useTheme()
  const { isDark, toggleColorMode } = useColorModeContext()
  return (
    <IconBtn
      onClick={toggleColorMode}
      color="primary"
      bg={theme.palette.primary.main}
      rounded={rounded}
      sx={sx}
    >
      {isDark ? <WbSunnyRoundedIcon /> : <DarkModeRoundedIcon />}
    </IconBtn>
  )
}

export default ColorModeToggle

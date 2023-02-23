import { useTheme } from "@mui/system"
import { ScaleLoader } from "react-spinners"

const Loader = ({ h, w, primary }) => {
  const theme = useTheme()
  return (
    <ScaleLoader
      color={!primary ? "#fff" : theme.palette.primary.main}
      height={h || 16}
      width={w || 3}
    />
  )
}

export default Loader

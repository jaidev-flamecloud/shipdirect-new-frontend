import { Stack } from "@mui/material"
import Loader from "../ui/Loader"

const LoadingContainer = ({ loading, children, full }) => {
  return loading ? (
    <Stack
      sx={{ height: full ? "100vh" : "auto", pt: 3, pb: 5 }}
      alignItems="center"
      justifyContent="center"
    >
      <Loader primary />
    </Stack>
  ) : (
    children
  )
}

export default LoadingContainer

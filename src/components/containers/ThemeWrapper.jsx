import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { createContext, useContext, useMemo, useState } from "react"
import getTheme from "../../config/theme"

const ColorModeContext = createContext({ toggleColorMode: () => {} })

const ThemeWrapper = ({ children }) => {
  const [mode, setMode] = useState("light")
  const colorMode = useMemo(
    () => ({
      isDark: mode === "dark",
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
      },
    }),
    [mode]
  )
  const theme = useMemo(() => createTheme(getTheme(mode)), [mode])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

const useColorModeContext = () => useContext(ColorModeContext)

export { useColorModeContext }

export default ThemeWrapper

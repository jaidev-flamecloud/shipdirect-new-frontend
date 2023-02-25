const getTheme = (mode) => ({
  typography: {
    fontFamily: "'Lexend', sans-serif",
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 5,
  },
  palette: {
    mode,
    success: {
      main: "#3ABF7C",
    },
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#2299F5",
          },
          background: {
            default: "#F6F8FA",
            paper: "#FFF",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#2299F5",
          },
          background: {
            default: "#283143",
            paper: "#313E55",
          },
        }),
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderRadius: 5,
          overflow: "hidden",
          border: "1px solid #e0e0e0",
        },
      },
    },
  },
})

export default getTheme

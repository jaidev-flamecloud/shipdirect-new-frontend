const getTheme = (mode) => ({
  typography: {
    fontFamily: "'Figtree', sans-serif",
    fontSize: 12,
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
            main: "#0393FB",
          },
          background: {
            default: "#F6F8FA",
            paper: "#FFF",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#0393FB",
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
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
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

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FAD44F",
    },
    secondary: {
      main: "#505D88",
    },
    logoColor: {
      main: "#A83D4C",
    },
    background: "#F5F5F3",
  },
  typography: {
    h2: {
      fontSize: "1.5rem",
    },
    h3: {
      fontSize: "1.25rem",
    },
    fontFamily: ["Roboto", "san-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;

import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import Page from "./page";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03a9f4",
      light: "#e1f5fe",
      dark: "#01579b",
    },
    secondary: {
      main: "#FF773D"
    }
  },
});


function App() {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <Page/>
    </ThemeProvider>
  )
}

export default App

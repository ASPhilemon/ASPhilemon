import { CssBaseline } from "@mui/material"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { deepOrange, blue, } from "@mui/material/colors";
import Page from "./page";




function App() {
const theme = createTheme({
  palette: {
    primary: {
      light: blue[50],  
      main: blue[500],
      contrastText: '#fff',
    },
    secondary: deepOrange
  },
});
    
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline/>
      <Page/>
    </ThemeProvider>
  )
}

export default App

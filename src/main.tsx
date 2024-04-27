import { CssBaseline, ThemeProvider, createTheme } from "@mui/material"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

const theme = createTheme({
  palette: {
    mode: "dark",
  },
})

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

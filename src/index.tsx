import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import ThemeProvider from "./app/provider/ThemeProvider/ui/ThemeProvider"
import App from "./app/App"

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root"),
)

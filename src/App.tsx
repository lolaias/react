import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyle"
import { RouteSoftware } from "./Routes"
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ToastContainer autoClose={3000} />
      <AuthProvider>
        <RouteSoftware />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
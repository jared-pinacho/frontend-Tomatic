import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import './App.css';
import { AuthContextProvider } from "./context/AuthContextProvider"; // Importa el proveedor de autenticación
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <AuthContextProvider>
    <Router>
      <AppRoutes />
      <ToastContainer />
    </Router>
    </AuthContextProvider>
  );
}

export default App;


import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useAuthContext } from "../../../context/AuthContextProvider";
import { NavLink } from "react-router-dom";
import { URL, URL_API } from "../../../Services/Const";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"; // Importar useNavigate


function Login() {
  const apiUrl = URL_API;
  const Url = URL;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuthContext();
  const navigate = useNavigate(); // Usar el hook useNavigate


  const handleSubmitLogin = (event) => {
    event.preventDefault();
    axios
      .get(`${Url}sanctum/csrf-cookie`, {
        withCredentials: true,
      })
      .then((response) => {
        axios
          .post(`${apiUrl}login`, formData)
          .then((response) => { 
            const data = response.data.data;
           console.log(data);
            toast.success('Inicio de sesion');
            login(data);
            navigate('/homePage'); // Redirigir a la ruta protegida

          })
          .catch((error) => {
            console.log('Error cachado',error);
            toast.error('Credenciales incorrectas');
          });
      })
      .catch((error) => {
        console.log('Error ff',error);
        
      });
  };
  
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <section className="login">
        <form onSubmit={handleSubmitLogin}>
          <div className="entrada">
            <h3>Inicio de sesión</h3>
          </div>

          <div className="entrada">
            <label>Email</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              required
            />
          </div>

          <div className="entrada">
            <label>Contraseña</label>
            <input  
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            />
          </div>

          <div className="entrada">
            <button type="submit" >Ingresar</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Login;

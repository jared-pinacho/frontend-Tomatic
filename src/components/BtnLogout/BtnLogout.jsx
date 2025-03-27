import React from "react";
import "../BtnLogout/BtnLogout.css";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContextProvider";
import { Navigate } from "react-router-dom";
import { URL_API} from "../../Services/Const";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonRunning } from "@fortawesome/free-solid-svg-icons";



 export const BtnLogout = () => {
    const apiUrl = URL_API;

    const { logout } = useAuthContext();
    const token = Cookies.get('tok');
  


  
    const Salir = () => {
     axios
    .post(
      `${apiUrl}logout`, 
      {}, // Cuerpo vacío
      {
        headers: {
          Authorization: `Bearer ${token}`, // Token en headers
        },
        withCredentials: true, // Asegura que las cookies se envíen
      }
    )
    .then((response) => {
      toast.success("Sesión cerrada");
      logout(); // Borra la sesión en el frontend
    })
        .catch((error) => {
          toast.error(error.response.data.error);
          logout();
          return <Navigate to="/" />
        });
    };
    return (
      <button className="btn-logout" onClick={() => Salir()}>
        <FontAwesomeIcon className="icono" icon={faPersonRunning} color='#dfdfd6' />
        Cerrar Sesión
      </button>
    );
  }



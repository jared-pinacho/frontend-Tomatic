
import React from 'react'
import './BarraSuperior.css'
import logo from '../../assets/apple.png'
import { useNavigate } from "react-router-dom"; // Importa useNavigate


  

function BarraSuperior() {

    const navigate = useNavigate(); // Llama al hook useNavigate

  // Función para manejar el clic y redirigir
  const handleClick = () => {
    navigate("/login"); // Redirige a la ruta que especifiques
  };

  return (
    <div className='contenedor-barra'>

        <img src={logo} className='logo' />

        <button onClick={handleClick} className="ingresar">Ingresar</button>
      

    </div>
  )
}

export default BarraSuperior


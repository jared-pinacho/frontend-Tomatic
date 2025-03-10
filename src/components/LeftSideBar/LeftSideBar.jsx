import React, { useState, useEffect } from "react";
import "../LeftSideBar/LeftSideBar.css";
import Cookies from "js-cookie";
import { NavLink } from "react-router-dom";
import { BtnLogout } from "../../components/BtnLogout/BtnLogout";
import { useAuthContext } from "../../context/AuthContextProvider";
import logo2 from "../../assets/logo.png";
import { enc, AES } from "crypto-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { URL_API } from "../../Services/Const";
import {
    faSchoolFlag,
    faHome,
    faEyeSlash,
    faEye,
    faUsers,
    faLemon,
    faChalkboardUser,
    faSchool,
    faChalkboard,
    faBook,
    faClock,
    faPlus,
    faUserPlus,
    
    faGlobe,
    faFile,
    faShop
  } from "@fortawesome/free-solid-svg-icons";
  
  const MY_AUTH_APP = "DoFA45-M0pri";

  const LeftSideBar = () => {


    const { isAuthenticated, userData, logout } = useAuthContext();
    const [sidebarVisible, setSidebarVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const apiUrl = URL_API;
    const token = Cookies.get("tok");
    const [estado, setEstado] = useState(null);
    const [menuVisible, setMenuVisible] = useState(false);
    const [menuVisible2, setMenuVisible2] = useState(false);
  

   const handle2 = () => {
        setMenuVisible2(false);
      };
    


    useEffect(() => {
        // Verificar si el usuario está autenticado y tiene el rol de Estudiante
        if (isAuthenticated && decrypt(Cookies.get("rol")) === "estudiante") {
          obtenerEstatusServicio();
        } else {
          setIsLoading(false); // Si el usuario no es Estudiante, detener el loading
        }
      }, [isAuthenticated, token]); // Se ejecuta cada vez que isAuthenticated o token cambia
    
    
    
      const toggleSidebar = () => {
        setSidebarVisible(!sidebarVisible);
      };
      const decrypt = (encryptedData) => {
        const bytes = AES.decrypt(encryptedData, MY_AUTH_APP);
        const decryptedData = JSON.parse(bytes.toString(enc.Utf8));
        return decryptedData;
      };

    try {
        if (isAuthenticated) {
          const rol = decrypt(Cookies.get("rol"));
          //const nombre =Cookies.get("id");
          const nombre = Cookies.get("nombre");

  return (
   <>
   

   <div className="sidebar-container">
            <div className={`sidebar ${sidebarVisible ? "visible" : "oculto"}`}>
              <div className="encabezado">
                <img
                  className="img_Encabezado"
                  src={logo2}
                  alt="Descripción de la imagen"
                />
              </div>
              <hr className="linea" />
              <div className="usuario">
                <span className="texto_Usuario">{nombre}</span>
                <hr />
                <span className="texto_Rol">
                  {(() => {
                    switch (rol) {
                      case 1:
                        return "Administrador";
                      case 2:
                        return "Vendedor";
                      
                      // Agrega más casos según sea necesario
                      default:
                        return "Rol desconocido";
                    }
                  })()}
                </span>
              </div>
              <div>
                <BtnLogout />
              </div>

              <hr className="linea" />

              <ul className="sidebar-nav">
                {/* Coordinador */}
                {rol === 1 && (
                  <>
                    <li onClick={handle2}>
                      <NavLink
                        to="/homePage"
                        activeclassname="active"
                      >
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faShop}
                            color="#135585"
                          />
                          <span className="texto-opcion">Ventas</span>
                        </div>
                      </NavLink>
                    </li>
                    <li onClick={handle2}>
                      <NavLink to="/cucs" activeclassname="active">
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faLemon}
                            color="#135585"
                          />
                          <span className="texto-opcion">Productos</span>
                        </div>
                      </NavLink>
                    </li>
                    <li onClick={handle2}>
                      <NavLink to="/carreras" activeclassname="active">
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faUsers}
                            color="#135585"
                          />
                          <span className="texto-opcion">Empleados</span>
                        </div>
                      </NavLink>
                    </li>
                    <li onClick={handle2}>
                      <NavLink to="/periodos" activeclassname="active">
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faClock}
                            color="#135585"
                          />
                          <span className="texto-opcion">Clientes</span>
                        </div>
                      </NavLink>
                    </li>
                    <li onClick={handle2}>
                      <NavLink to="/materias" activeclassname="active">
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faBook}
                            color="#135585"
                          />
                          <span className="texto-opcion">Invernaderos</span>
                        </div>
                      </NavLink>
                    </li>
                    <li onClick={handle2}>
                      <NavLink to="/datosGenerales" activeclassname="active">
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faGlobe}
                            color="#135585"
                          />
                          <span className="texto-opcion">Cosechas</span>
                        </div>
                      </NavLink>
                    </li>
                    <li onClick={handle2}>
                      <NavLink to="/reportesRecibidos" activeclassname="active">
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faFile}
                            color="#135585"
                          />
                          <span className="texto-opcion">
                            Categorias
                          </span>
                        </div>
                      </NavLink>
                    </li>


                    

                    {menuVisible2 && (
                      <div className="menu">
                        <NavLink
                          to="/metricasCoordinador"
                          activeclassname="active"
                          style={{ textDecoration: "none" }}
                        >
                          <div className="subitem">
                            <span className="texto-subopcion">
                              Estadísticas
                            </span>
                          </div>
                        </NavLink>
                        
                      </div>
                    )}
                  </>
                )}
                


                {/* Vendedor */}
                {rol === 2 && (
                  <>
                    <li>
                      <NavLink to="/homePageVendedor" activeclassname="active">
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faHome}
                            color="#135585"
                          />
                          <span className="texto-opcion">Inicio</span>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/seleccionCarreras" activeclassname="active">
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faPlus}
                            color="#135585"
                          />
                          <span className="texto-opcion">
                            Seleccionar Programas
                          </span>
                        </div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/seleccionFacilitadores"
                        activeclassname="active"
                      >
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faUserPlus}
                            color="#135585"
                          />
                          <span className="texto-opcion">
                            Seleccionar Facilitadores
                          </span>
                        </div>
                      </NavLink>
                    </li>

                    <li>
                      <NavLink
                        to="/servicioConsejero"
                        activeclassname="active"
                      >
                        <div className="item">
                          <FontAwesomeIcon
                            className="icono"
                            icon={faSchoolFlag}
                            color="#135585"
                          />
                          <span className="texto-opcion">
                            Servicio social comunitario
                          </span>
                        </div>
                      </NavLink>
                    </li>

                  </>
                )}

              
                
               

                <br />
                <li>
                  <button className="vis"  onClick={toggleSidebar}>
                    <FontAwesomeIcon
                      className="icono"
                      icon={faEyeSlash}
                      color="#135585"
                    />
                    Ocultar Menú
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <button
            className={`btnMostrar ${sidebarVisible ? "visible" : "oculto"}`}
            onClick={toggleSidebar}
          >
            <FontAwesomeIcon
              className="icono"
              icon={faEye}
              color="#135585"
              beat
            />
            Ver Menú
          </button>



   
   </>
     );
    } else {
      return null;
    }
  } catch (error) {
    logout();
  }
}

export default LeftSideBar



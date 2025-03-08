import React from 'react'
import '../pages/Footer.css'
import logo from '../assets/apple.png'

function Footer() {
  return (
    <footer className="footer">
  <div className="footer-container">
    <div className="footer-logo">
      <img src={logo} alt="Logo" />
    </div>
    <ul className="footer-links">
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Sobre Nosotros</a></li>
      <li><a href="#">Servicios</a></li>
      <li><a href="#">Contacto</a></li>
    </ul>
    <div className="footer-social">
      <a href="#"><i className="fab fa-facebook"></i></a>
      <a href="#"><i className="fab fa-twitter"></i></a>
      <a href="#"><i className="fab fa-instagram"></i></a>
    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy; 2024 Mi Empresa | Todos los derechos reservados</p>
  </div>
</footer>

  )
}

export default Footer

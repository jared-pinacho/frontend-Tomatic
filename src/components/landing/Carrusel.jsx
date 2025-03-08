import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carrusel.css"; // Archivo de estilos
import foto1 from '../../assets/rancho-1.jpg'
import foto2 from '../../assets/rancho-2.jpg'
import foto3 from '../../assets/rancho3.jpg'

const Carrusel = () => {
  const settings = {
    dots: true,             // Muestra los indicadores de página
    infinite: true,         // Loop infinito
    speed: 500,             // Velocidad de transición
    slidesToShow: 1,        // Número de imágenes visibles a la vez
    slidesToScroll: 1,      // Número de imágenes que se desplazan
    autoplay: true,         // Auto-reproducción
    autoplaySpeed: 3000,    // Velocidad de auto-slide (ms)
    arrows: true           // Muestra flechas de navegación
  };

  return (
    <div className="carrusel-container">
      <Slider {...settings}>
        <div>
          <img src={foto1} alt="Imagen 1" />
        </div>
        <div>
          <img src={foto2} alt="Imagen 2" />
        </div>
        <div>
          <img src={foto3} alt="Imagen 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Carrusel;

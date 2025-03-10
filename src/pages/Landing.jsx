import React from "react";
import BarraSuperior from "../components/landing/BarraSuperior";
import Carrusel from "../components/landing/Carrusel";
import Footer from "./Footer";
import "./Landing.css";

function Landing() {
  return (
   <>
   
   
      <BarraSuperior />
      <Carrusel />
     

      <div className="info">
        <h1 className="somos">
          Comprar fruta y verdura online directamente del agricultor
        </h1>

        <p className="texto">
          Comprar fruta y verdura online sin intermediarios, directamente del
          agricultor, es más fácil que nunca. Con todo lo que ello conlleva:
          Kilómetro 0, precio justo y alimentos naturales recogidos en Valencia
          en su punto óptimo de maduración.
          <br />
          <br />Y porque estamos convencidos que es el único modelo sostenible
          de frutería online. Medioambientalmente (Sin kilómetros, sin
          plásticos, sin pesticidas…) y socialmente (Nos ponemos del lado de los
          dos eslabones más perjudicados de la cadena alimentaria: El agricultor
          y el consumidor final). Compra fruta y verdura de Valencia y apoya a
          los pequeños agricultores de la zona.
        </p>

        <Footer />
      </div>
      </>
  );
}

export default Landing;

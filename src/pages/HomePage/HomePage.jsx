
import React from 'react'
import '../HomePage/HomePage.css'
import arbol from '../../assets/arbol.png'


function HomePage() {
  return (
    <div className="productosPage">
      <div className="contenidoDinamico">
        <div className="titulo">
          <h2>Bienvenido al Sistema de Administración</h2>
        </div>

        <span className='description' >El sistema web para el Rancho Los Encinos es una solución integral diseñada para optimizar la producción y ventas de vegetales. Abarca desde la gestión detallada de productos, empleados y clientes, hasta el control preciso de invernaderos y cosechas. Con un enfoque en la eficiencia y la toma de decisiones basada en datos, este sistema busca maximizar la rentabilidad del rancho, facilitando la administración de cada aspecto del negocio a través de una interfaz intuitiva y adaptable. </span>

     <img src={arbol} className='logo' />

      </div>
    </div>
  )
}

export default HomePage



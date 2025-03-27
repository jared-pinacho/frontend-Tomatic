import React from "react";
import '../AdminProductosPage/AdminProductosPage.css'

export default function AdminProductosPage() {
  return (
    <div className="productosPage">
      <div className="contenidoDinamico">
        <div className="titulo">
          <h2>Productos</h2>
        </div>

        <div className="barraBusquedda">
        <input
        type="text"
        placeholder="Buscar por nombre"
        value='nombre'
        onChange={(e) => setBusqueda(e.target.value)}
      />
        </div>

        

        <div className="tabla">



        <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
       
      </table>




        </div>
      </div>
    </div>
  );
}

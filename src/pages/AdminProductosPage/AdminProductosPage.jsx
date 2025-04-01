import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { URL_API } from "../../Services/Const";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle,faTrash,faPencil,faDeleteLeft,faEdit } from "@fortawesome/free-solid-svg-icons";

import "../AdminProductosPage/AdminProductosPage.css";

export default function AdminProductosPage() {
  const apiUrl = URL_API;
  const token = Cookies.get("tok");

  const [isLoading, setIsLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");

  const filteredProductos = () => {
    if (search.length === 0) {
      return productos.slice(currentPage, currentPage + 5);
    }

    const searchTerm = search.toLowerCase(); // Convierte el término de búsqueda a minúsculas
    const filtered = productos.filter(
      (produ) => produ.nombre.toLowerCase().includes(searchTerm) // Convierte el nombre del producto a minúsculas
    );
    return filtered.slice(currentPage, currentPage + 5);
  };

  const nextPage = () => {
    if (
      productos.filter((produ) => produ.nombre.includes(search)).length >
      currentPage + 5
    )
      setCurrentPage(currentPage + 5);
  };

  const prevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 5);
  };

  const onSearchChange = (event) => {
    setCurrentPage(0);
    setSearch(event.target.value);
  };

  useEffect(() => {
    obtenerProductos();
  }, []);

  const obtenerProductos = () => {
    setIsLoading(true);
    axios
      .get(`${apiUrl}producto`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProductos(response.data.data);

        setIsLoading(false);
      })
      .catch((error) => {
        toast.error("Error al obtener los datos de los productos");
        setIsLoading(false);
      });
  };

  return (
    <div className="productosPage">
      <div className="contenidoDinamico">
        <div className="titulo">
          <h2>Productos</h2>
        </div>

        <div className="tabla">
          <div className="table-responsive contenedorTablaEstudiantes">
            <input
              className="busqueda"
              placeholder="Buscar Producto"
              value={search}
              onChange={onSearchChange}
            />

            <button className="btn-agregar" onClick={prevPage}>
              <FontAwesomeIcon
                className="icono"
                icon={faPlusCircle}
                color="#dfdfd6"
              />{" "}
              Agregar
            </button>

            <table className="table-responsive table tablita">
              <thead>
                <tr>
                  <th>Identificador</th>
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Tipo</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                  <tr>
                    <td colSpan="5">
                      <Loader />
                    </td>
                  </tr>
                ) : (
                  filteredProductos().map((producto) => (
                    <tr key={producto.id_producto}>
                      <td>{producto.id_producto}</td>
                      <td>{producto.nombre}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.tipo}</td>
                      <td>
                      <button className="btn-editar" onClick={prevPage}
                      value={producto.id_producto}
                      >
              <FontAwesomeIcon
                className="icono"
                icon={faEdit}
                color="#dfdfd6"
              />{" "}
              Editar
            </button>

            <button className="btn-eliminar" onClick={prevPage}>
              <FontAwesomeIcon
                className="icono"
                icon={faTrash}
                color="#dfdfd6"
              />{" "}
              Eliminar
            </button>

                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          <button className="pagination" onClick={prevPage}>
            Anteriores
          </button>

          <button className="pagination" onClick={nextPage}>
            Siguientes
          </button>
        </div>
      </div>
    </div>
  );
}

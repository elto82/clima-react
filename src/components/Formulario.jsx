import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { useEffect, useState } from "react";
import Error from "./Error";

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {
  const [error, setError] = useState(false);
  const [listaPaises, setListaPaises] = useState([]);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    obtenerPaises();
  }, []);

  useEffect(() => {
    M.AutoInit();
  }, [listaPaises]);

  const obtenerPaises = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      const paises = Object.values(data).map((pais) => ({
        codigo: pais.cca2,
        nombre: pais.name.common,
      }));
      paises.sort((a, b) => a.nombre.localeCompare(b.nombre));
      setListaPaises(paises);
    } catch (error) {
      setError(true);
    }
  };

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    setConsultar(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <Error mensaje="Todos los campos son obligatorios" />}
      <div className="input-field col s12">
        <input
          type="text"
          id="ciudad"
          name="ciudad"
          value={ciudad}
          onChange={handleChange}
        />
        <label htmlFor="ciudad">Ciudad:</label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais" value={pais} onChange={handleChange}>
          <option value="">-- Seleccione un país --</option>
          {listaPaises.map((pais) => (
            <option key={pais.codigo} value={pais.codigo}>
              {pais.nombre}
            </option>
          ))}
        </select>
        <label htmlFor="pais">País:</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar"
          className="waves-effect waves-light btn-large btn-block green accent-3"
        />
      </div>
    </form>
  );
};

export default Formulario;

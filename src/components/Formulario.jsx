import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { useEffect, useState } from "react";

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    M.AutoInit();
  }, []);

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
      {error && (
        <p className="red  center error">Todos los campos son obligatorios</p>
      )}
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
          <option value="US">Estados Unidos</option>
          <option value="MX">México</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="PE">Perú</option>
        </select>
        <label htmlFor="pais">Pais:</label>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar"
          className="waves-effect waves-light btn-large btn-block  green accent-3"
        />
      </div>
    </form>
  );
};

export default Formulario;

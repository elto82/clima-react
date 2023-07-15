import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { useEffect, useState } from "react";

const Formulario = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

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

  return (
    <form>
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
    </form>
  );
};

export default Formulario;

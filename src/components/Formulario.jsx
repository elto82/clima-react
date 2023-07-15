import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import { useEffect } from "react";

const Formulario = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <form>
      <div className="input-field col s12">
        <input type="text" id="ciudad" name="ciudad" />
        <label htmlFor="ciudad">Ciudad:</label>
      </div>
      <div className="input-field col s12">
        <select name="pais" id="pais">
          <option value="">--Seleccione--</option>
        </select>
        <label htmlFor="pais">Pais:</label>
      </div>
    </form>
  );
};

export default Formulario;

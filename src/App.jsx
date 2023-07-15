import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";

const API_URL = import.meta.env.VITE_API_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);

  let { ciudad, pais } = busqueda;
  ciudad = "medellin";
  pais = "colombia";

  useEffect(() => {
    const getData = async () => {
      if (consultar) {
        const res = await fetch(`${API_URL}${ciudad},${pais}&appid=${API_KEY}`);
        const data = await res.json();
        console.log(data);
      }
    };

    getData();
  }, [consultar]);

  return (
    <>
      <Header titulo="Clima React" />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsultar={setConsultar}
              />
            </div>
            <div className="col m6 s12">2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

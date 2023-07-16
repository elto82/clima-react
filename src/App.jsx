import { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Clima from "./components/Clima";
import Error from "./components/Error";

const API_KEY = "0206fce03e7df769a6c64eb3f6d1ebfb";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";

const App = () => {
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState({});
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  useEffect(() => {
    const getData = async () => {
      if (consultar) {
        const res = await fetch(`${API_URL}${ciudad},${pais}&appid=${API_KEY}`);
        const data = await res.json();
        // console.log(data);
        setResultado(data);
        setConsultar(false);
        //detectar si hubo resultados correctos
        if (data.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }
    };

    getData();
  }, [consultar]);

  let componente;
  if (error) {
    componente = <Error mensaje="No hay resultados" />;
  } else {
    componente = <Clima resultado={resultado} />;
  }

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
            <div className="col m6 s12">{componente}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

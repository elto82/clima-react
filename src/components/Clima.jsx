import React from "react";

const Clima = ({ resultado }) => {
  const { main, name, weather } = resultado;
  const kelvin = 273.15;

  if (!name || !main || !weather) {
    // Si los datos no están disponibles, muestra un mensaje o un indicador de carga
    return;
  }

  const temperaturaCelsius = Math.round(main.temp - 273.15);

  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">Temperatura: {temperaturaCelsius} °C</p>
        <p>Se siente como: {Math.round(main.feels_like - 273.15)} °C</p>
        <p>Humedad: {main.humidity}%</p>
        <p>Descripción: {weather[0].description}</p>
      </div>
    </div>
  );
};

export default Clima;

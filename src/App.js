import React, { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 40) return;

    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    if (temperatureValue === -40) return;

    const newTemperature = temperatureValue - 1;

    if (newTemperature <= 15) {
      setTemperatureColor("cold");
    }
    setTemperatureValue(temperatureValue - 1);
  };

  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}°С
        </div>
      </div>
      <div className="button-container">
        <button onClick={() => increaseTemperature()}>+</button>
        <button onClick={() => decreaseTemperature()}>-</button>
      </div>
    </div>
  );
};

export default App;

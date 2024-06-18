import { useState } from "react";

export const Partido = () => {
  const [buscador, setBuscador] = useState("");
  const [partidos, setPartidos] = useState("");

  const condicion = (partido) => {
    if (partido === "izquierda") {
      return "zurdo asqueroso";
    } else if (partido === "libertario") {
      return "aguante el loeon";
    } else if (partido === "peronista") {
      return "peroncho come polenta";
    } else {
      return " ni idea";
    }
  };
  const Buscador = (response) => {
    setBuscador(response.target.value);
  };
  const buton = () => {
    const valor = buscador.trim();
    const valor2 = condicion(valor);
    setPartidos(valor2);
  };

  return (
    <>
      <h3>anilista de partidos politicos</h3>
      <br />
      <input
        placeholder="de que partido sos?"
        type="text"
        onChange={Buscador}
      />
      <button onClick={buton}>buscar</button>
      <br />
      <p>{partidos}</p>
    </>
  );
};

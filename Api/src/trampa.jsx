import { useState } from "react";

export const Music = () => {
  const [genero, setGenero] = useState("");
  const [buscar, setBuscar] = useState("");

  const Condicion = (estilo) => {
    if (estilo === "rock") {
      return "exelente gusto";
    } else if (estilo === "pop") {
      return "buen gusto";
    } else if (estilo === "cumbia") {
      return "guacala";
    } else {
      return "ni idea";
    }
  };

  const buscador = (busqueda) => {
    setBuscar(busqueda.target.value);
  };

  const generos = () => {
    const estilos = buscar.trim();
    const evaluacion = Condicion(estilos);
    setGenero(evaluacion);
  };

  return (
    <>
      <h2>musicaaa</h2>

      <input placeholder="pon un genero" onChange={buscador} />
      <button onClick={generos}>aceptar</button>
      <br />
      <p>{genero}</p>
    </>
  );
};

import axios from "axios";
import { useState, useEffect } from "react";

export const Api = () => {
  const [usuario, setUsuario] = useState([]);
  const [textoBuscador, setTextoBuscador] = useState([]);

  const obtenerUsuario = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsuario(response.data);
  };

  useEffect(() => {
    obtenerUsuario();
  }, []);

  return (
    <>
      <h2>texto:</h2>
      <input
        type="text"
        onChange={(e) => {
          setTextoBuscador(e.target.value);
        }}
      />

      {usuario
        .filter((usuarios) => {
          return usuarios.name.includes(textoBuscador);
        })
        .map((usuarios) => {
          return <p>{usuarios.name}</p>;
        })}
    </>
  );
};

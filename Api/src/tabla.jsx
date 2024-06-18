import { useEffect, useState } from "react";

export const Tabla = () => {
  const [tabla, setTabla] = useState(0);
  const [resultado, setResultado] = useState(0);

  useEffect(() => {
    console.log("tabla");
  }, [resultado]);

  const t7 = () => {
    if (tabla < 10) {
      setTabla(tabla + 1);
      setResultado(resultado + 7);
    }
  };
  const retroceso = () => {
    if (tabla > 0) {
      setTabla(tabla - 1);
      setResultado(resultado - 7);
    }
  };
  const reiniciar = () => {
    setTabla(0);
    setResultado(0);
  };

  return (
    <>
      <h2>tabla del 7</h2>

      <p>
        7x{tabla}={resultado}
      </p>
      <br />
      <button onClick={t7}>multiplicar</button>
      <button onClick={retroceso}>retroceder</button>
      <button onClick={reiniciar}>reiniciar</button>
    </>
  );
};

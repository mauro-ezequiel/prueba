import { useEffect, useState } from "react";

export const Click = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("click");
  }, [count]);

  const suma = () => {
    setCount(count + 1);
  };
  const retroceder = () => {
    setCount(count - 1);
  };
  const reiniciar = () => {
    setCount(0);
  };
  return {
    count,
    suma,
    retroceder,
    reiniciar,
  };
};

export const Contador = () => {
  const gA = Click();
  const gB = Click();

  return (
    <>
      <>
        <h2>contador A = {gA.count}</h2>
        <br />
        <button onClick={gA.suma}>+</button>
        <button onClick={gA.retroceder}>retroceder</button>
        <button onClick={gA.reiniciar}>reiniciar</button>
      </>
      <>
        <h2>contador B = {gB.count}</h2>
        <br />
        <button onClick={gB.suma}>+</button>
        <button onClick={gB.retroceder}>retroceder</button>
        <button onClick={gB.reiniciar}>reiniciar</button>
      </>
    </>
  );
};

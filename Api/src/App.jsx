import "./App.css";
import { Contador } from "./contador";
import { Partido } from "./partidos";
import { Tabla } from "./tabla";

function App() {
  return (
    <>
      <h2>evaluacion </h2>
      <br />
      <>
        <h3> 1- contador dual</h3>
        <br />

        <Contador />
        <br />
        <br />
        <br />
        <br />
      </>
      <h3>2- tabla con topes en 0 y 10</h3>
      <br />
      <Tabla />
      <>
        <h3> 3- analizador de partido</h3>
        <br />

        <Partido />
        <br />
        <br />
        <br />
        <br />
      </>
    </>
  );
}

export default App;

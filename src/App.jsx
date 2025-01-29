import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./Component/Card.jsx";
import { Card } from "./Component/Card.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card
        name="Maryam Fattah"
        age="38"
        location="Berlin"
        gitLink="https://github.com/maryfatah"
      />
    </>
  );
}

export default App;

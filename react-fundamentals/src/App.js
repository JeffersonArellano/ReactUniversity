import React from "react";
import FruitCard from "./components/FruitCard";

const App = () => (
  <div>
    <FruitCard name={"Orange"} price={5.0} />
    <FruitCard name={"Pineapple"} price={1.5} />
    <FruitCard name="Apple" price={3.3} />
  </div>
);

export default App;

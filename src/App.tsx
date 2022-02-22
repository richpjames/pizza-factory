import React, { useState } from "react";
import { Dough } from "./components/Dough";
import { Sauce } from "./components/Sauce";
import { Topping } from "./components/Topping";
import { Cooking } from "./components/Cooking";

function App() {
  return (
    <div className="App">
      <Dough active onDone={() => {}} onError={() => {}} />
      <Sauce />
      <Topping />
      <Cooking />
    </div>
  );
}

export default App;

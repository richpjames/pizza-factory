import React, { useState } from "react";
import { Dough } from "./components/Dough";
import { Sauce } from "./components/Sauce";
import { Topping } from "./components/Topping";
import { Cooking } from "./components/Cooking";

type ComponentNames = "dough" | "sauce" | "topping" | "cooking";

function App() {
  const [activeComponent, setActiveComponent] =
    useState<ComponentNames>("dough");
  return (
    <div className="App">
      <Dough
        active={activeComponent === "dough"}
        onDone={() => {
          setActiveComponent("sauce");
        }}
        onError={() => {}}
      />
      <Sauce
        active={activeComponent === "sauce"}
        onDone={() => {
          setActiveComponent("topping");
        }}
        onError={() => {}}
      />
      <Topping
        active={activeComponent === "topping"}
        onDone={() => {
          setActiveComponent("cooking");
        }}
        onError={() => {}}
      />
      <Cooking
        active={activeComponent === "cooking"}
        onDone={() => {}}
        onError={() => {}}
      />
    </div>
  );
}

export default App;

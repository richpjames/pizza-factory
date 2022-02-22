import React, { useState } from 'react'
import { Dough } from "./components/Dough";
import { Sauce } from './components/Sauce';
import { Topping } from './components/Topping';
import { Cooking } from './components/Cooking';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Dough />
      <Sauce />
      <Topping />
      <Cooking />
    </div>
  )
}

export default App

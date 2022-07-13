import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";

import "./App.css";

const initialShoppingCart =
  JSON.parse(localStorage.getItem("shoppingCart")) || [];

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  return (
    <div className="main__app">
      <Navbar />
      <Catalog shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
    </div>
  );
}

export default App;

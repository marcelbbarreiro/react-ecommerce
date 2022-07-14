import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Catalog from "./components/Store/Catalog/Catalog";

import "./App.css";
import Footer from "./components/Footer/Footer";

const initialShoppingCart =
  JSON.parse(localStorage.getItem("shoppingCart")) || [];

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);

  return (
    <div className="main__app">
      <Navbar shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <Catalog shoppingCart={shoppingCart} setShoppingCart={setShoppingCart} />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import { useEffect, useState } from "react";
import Product from "./components/Product/Product";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";

import { products } from "./data/products";

const initialShoppingCart =
  JSON.parse(localStorage.getItem("shoppingCart")) || [];

function App() {
  const [buyShoppingCart, setBuyShoppingCart] = useState(initialShoppingCart);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(buyShoppingCart));
  }, [buyShoppingCart]);

  return (
    <div className="main__app">
      <div className="main__products">
        <h1 className="main__title">Jean Claude Van Damme</h1>
        <div className="products_list">
          {products.map((item, index) => {
            return (
              <Product
                key={index}
                id={index}
                title={item.title}
                description={item.description}
                valoration={item.valoration}
                price={item.price}
                image={item.image}
                cart={buyShoppingCart}
                setCart={setBuyShoppingCart}
              />
            );
          })}
        </div>
      </div>
      <ShoppingCart cart={buyShoppingCart} setCart={setBuyShoppingCart} />
    </div>
  );
}

export default App;

/* This is importing the useEffect and useState hooks from the React library. */
import { useEffect, useState } from "react";
/* This is importing the Product component from the Product folder. */
import Product from "../Product/Product";
/* This is importing the CSS file for the Catalog component. */
import "./Catalog.css";

/* This is a function that is returning a component. */
const Catalog = () => {
  const [products, setSaveProducts] = useState([]);

/* This is a hook that is being used to fetch data from the server. */
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3001/products");
      const data = await response.json();
      setSaveProducts(data);
    };
    fetchProducts();
  }, []);

/* Returning a component. */
  return (
    <div className="catalog__container">
      {products.map(({ id, title, price, image }) => {
        return <Product key={id} title={title} price={price} image={image} />;
      })}
    </div>
  );
};

/* This is exporting the Catalog component. */
export default Catalog;

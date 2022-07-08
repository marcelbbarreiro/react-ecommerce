
import { useState, useEffect } from "react";
import { Button } from '@nextui-org/react';


import "./Product.css";

const Product = ({
  id,
  title,
  price,
  image,
  valoration,
  description,
  cart,
  setCart,
  menuState,
  setMenu,
}) => {
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    setCart([
      ...cart,
      {
        cartId: id,
        cardTitle: title,
        cartPrice: price,
        cartImage: image,
        amount: 1,
      },
    ]);
    setAdded(true);
    setMenu({ ...menuState, right: true });
  };

  useEffect(() => {
    cart.forEach((item) => {
      if (item.cartId === id) {
        setAdded(true);
      }
    });
  });


  return (
    <div className="product__container">
      <img className="product__container_img" src={image} alt="img" />

      <p className="product__container_title">{title}</p>

      <span className="product__container_rating">{valoration}⭐️</span>

      <p className="product__container_description">{description}</p>

      <div className="product__bottom">
        <p className="product__bottom_price">€{price}</p>
        {added ? (
          <Button auto color="success">
            Added
          </Button>
        ) : (
          <Button
          auto
            onClick={addToCart}
          >
            Add
          </Button>
        )}
      </div>
    </div>
  );
};

export default Product;

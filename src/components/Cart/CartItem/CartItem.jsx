import { useState } from "react";
import { Button } from "@nextui-org/react";
import "./CartItem.css";

const CartItem = ({
  itemId,
  itemTitle,
  itemPrice,
  itemImage,
  shoppingCart,
  setShoppingCart,
  itemQuantity,
}) => {
  const restQuantityItem = () => {
    if (itemQuantity === 1) return;
    shoppingCart.forEach((item) => {
      if (item.itemId === itemId) {
        item.itemQuantity -= 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };

  const addQuantityItem = () => {
    shoppingCart.forEach((item) => {
      if (item.itemId === itemId) {
        item.itemQuantity += 1;
      }
    });
    setShoppingCart([...shoppingCart]);
  };

  const itemRemove = () => {
    const newCart = shoppingCart.filter((item) => item.itemId !== itemId);
    setShoppingCart(newCart);
  };
  console.log(shoppingCart);
  return (
    <div className="cart__item">
      <img className="cart__item_image" src={itemImage} alt="product" />
      <div>
        <p className="cart__item_title">{itemTitle}</p>
        <p className="cart__item_price">€ {itemPrice}</p>
        <div className="cart__item_bottom">
          <Button light color="error" auto onClick={restQuantityItem}>
            -
          </Button>
          <p>{itemQuantity}</p>
          <Button light color="error" auto onClick={addQuantityItem}>
            +
          </Button>
          <Button light color="error" auto onClick={itemRemove}>
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

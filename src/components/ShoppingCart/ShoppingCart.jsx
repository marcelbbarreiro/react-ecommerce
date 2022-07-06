import "./ShoppingCart.css";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = ({ cart, setCart }) => {
  return (
    <div className="main__cart">
      <h3>Shopping Cart</h3>
      <ul className="cart__list">
        <CartItem />
      </ul>
      <div className="cart__bottom">
        <p className="cart__total">Total:</p>
        <p className="cart__total_price">€0</p>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCart;

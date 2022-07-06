import "./ShoppingCart.css";
import CartItem from "../CartItem/CartItem";

const ShoppingCart = ({ cart, setCart }) => {
  return (
    <div className="main__cart">
      <h3>Shopping Cart</h3>
      <ul className="cart__list">
        {cart.map((item, index) => {
          return (
            <CartItem
              key={index}
              id={item.cartId}
              title={item.cartTitle}
              price={item.cartPrice}
              image={item.cartImage}
            />
          );
        })}
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

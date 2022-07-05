import "./ShoppingCart.css";

const ShoppingCart = () => {
  return (
    <div className="main__cart">
      <h3>Shopping Cart</h3>
      <ul className="cart__list"></ul>
      <div className="cart__bottom">
        <p className="cart__total">Total:</p>
        <p className="cart__total_price">€0</p>
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default ShoppingCart;

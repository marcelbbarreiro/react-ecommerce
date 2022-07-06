import Button from "@mui/material/Button";

const CartItem = () => {
  return (
    <div className="cart__item">
      <img src="" alt="" />
      <div>
        <p className="cart__item_title"></p>
        <p className="cart__item_precio"></p>
        <div className="cart__item_bottom">
          <Button variant="contained" className="">
            -
          </Button>
          <p>0</p>
          <Button variant="contained">+</Button>
          <Button variant="contained">Remove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

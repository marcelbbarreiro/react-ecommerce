import { useState, useEffect } from "react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import "./Product.css";

const Product = ({
  id,
  title,
  price,
  image,
  valoration,
  description,
  shoppingCart,
  setShoppingCart,
  menuState,
  setMenu,
}) => {
  const [itemAdded, setItemAdded] = useState(false);

  // const addToCart = () => {
  //   setCart([
  //     ...cart,
  //     {
  //       cartId: id,
  //       cardTitle: title,
  //       cartPrice: price,
  //       cartImage: image,
  //       amount: 1,
  //     },
  //   ]);
  //   setAdded(true);
  //   setMenu({ ...menuState, right: true });
  // };

  const addToCart = () => {
    setShoppingCart([
      ...shoppingCart,
      {
        itemId: id,
        itemTitle: title,
        itemPrice: price,
        itemImage: image,
        itemQuantity: 1,
      },
    ]);
    setItemAdded(true);
  };

  //   useEffect(() => {
  //     cart.forEach((item) => {
  //       if (item.cartId === id) {
  //         setAdded(true);
  //       }
  //     });
  //   });
  return (
    <Card css={{ w: "15%", h: "330px" }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <Text size={12} weight="bold" transform="uppercase" >
            New
          </Text>
          <Text h3 color="#CE7500" size={20} weight="bold">
            {title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={image}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text color="#000" size={12}>
              Available soon.
            </Text>
            <Text color="#000" size={20}>
              € {price}
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button color="warning" auto ghost disabled={itemAdded}>
                <Text
                  css={{ color: "black" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  onClick={addToCart}
                >
                  {itemAdded ? "Added" : "Shop Now"}
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
    // <div className="product__container">
    //   <img className="product__container_img" src={image} alt="img" />
    //   <p className="product__container_title">{title}</p>
    //   <span className="product__container_rating">{valoration}⭐️</span>
    //   <p className="product__container_description">{description}</p>
    //   <div className="product__bottom">
    //     <p className="product__bottom_price">€{price}</p>
    //     {added ? (
    //       <button disabled style={{ color: "white" }}>
    //         Added
    //       </button>
    //     ) : (
    //       <button
    //         variant="outlined"
    //         color="error"
    //         size="large"
    //         className="product__bottom_buttonAdd"
    //         onClick={addToCart}
    //       >
    //         Add
    //       </button>
    //     )}
    //   </div>
    // </div>
  );
};

export default Product;

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
          <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
            New
          </Text>
          <Text h3 color="#CE7500" size={20} weight="bold">
            {title}
            Test Title
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
              <Button color="warning" auto ghost>
                <Text
                  css={{ color: "black" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                  onClick={addToCart}
                >
                  Shop Now
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>

  );
};

export default Product;

import CartItem from "../CartItem/CartItem";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import { Tooltip } from "@nextui-org/react";

import "./Wishlist.css";

const Wishlist = ({ wishlistCart, setWishlistCart }) => {
	const [totalItemWishlist, setTotalItemWishlist] = useState(0);

	useEffect(() => {
		let totalOfWhislistArrayItems = wishlistCart.length;
		setTotalItemWishlist(totalOfWhislistArrayItems);
	}, [wishlistCart]);

	return (
		<div className='main__cart'>
			<h3>Whislist Cart</h3>
			<ul className='cart__list'>
				{wishlistCart.length > 0 ? (
					wishlistCart.map(
						({ itemId, itemTitle, itemPrice, itemImage, itemQuantity }) => {
							return (
								<CartItem
									key={itemId}
									itemId={itemId}
									itemTitle={itemTitle}
									itemPrice={itemPrice}
									itemImage={itemImage}
									itemQuantity={itemQuantity}
									wishlistCart={wishlistCart}
									setWishlistCart={setWishlistCart}
								/>
							);
						},
					)
				) : (
					<h1>No Love!</h1>
				)}
			</ul>
			<div className='cart__bottom'>
				<Tooltip placement="bottom" content='Your Total Love List' color='warning'>
					<Button flat auto color='warning'>
						{totalItemWishlist}
					</Button>
				</Tooltip>
			</div>
		</div>
	);
};
export default Wishlist;

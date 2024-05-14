import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const CartPagee = () => {
	const cart = useSelector((state: RootState) => state.cart);
	console.log(cart.items);

	// Check if cart.items is null or undefined
	if (cart.items === null || cart.items === undefined) {
		return (
			<div>
				Cart
				<p>Cart items are unavailable.</p>
			</div>
		);
	}

	return (
		<div>
			Cart
			<ul>
				{cart.items.map((item, index) => (
					<li key={index}>{item.name}</li>
				))}
				<li>gg</li>
				
			</ul>
		</div>
	);
};

export default CartPagee;

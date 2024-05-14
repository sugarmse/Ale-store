import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";

const CartPage: React.FC = () => {
	const cart = useSelector((state: RootState) => state.cart);

	return (
		<div className="cart-page">
			<h2>Cart</h2>
			{cart.items.length !== 0 ? (
				<ul>
					{cart.items.map((item, index) => (
						<li key={index}>{item.name}</li>
					))}
				</ul>
			) : (
				<p>Your cart is empty.</p>
			)}
		</div>
	);
};

export default CartPage;

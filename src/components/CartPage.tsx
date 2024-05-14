import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { clearCart, removeItem } from "../state/cartSlice";

const CartPagee = () => {
	const cart = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();

	// Check if cart.items is null or undefined
	if (!cart.items || cart.items.length === 0) {
		return (
			<div>
				Cart
				<p>Cart items are unavailable.</p>
			</div>
		);
	}

	const handleRemoveItem = (itemId: string) => {
		dispatch(removeItem(itemId));
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	// Create an object to store the quantity of each item
	const itemQuantityMap: { [key: string]: number } = {};
	cart.items.forEach((item) => {
		if (item.name in itemQuantityMap) {
			itemQuantityMap[item.name]++;
		} else {
			itemQuantityMap[item.name] = 1;
		}
	});

	return (
		<>
			<div>
				Cart
				<ul>
					{/* Map over the itemQuantityMap object */}
					{Object.entries(itemQuantityMap).map(([itemId, quantity]) => {
						// Find the item object corresponding to the itemId
						const item = cart.items.find((item) => item.name === itemId);
						if (!item) return null; // Return null if item not found (shouldn't happen)

						return (
							<li key={itemId}>
								{item.name} x {quantity}
								<button
									className="remove-item"
									onClick={() => handleRemoveItem(item.name)}
								>
									-
								</button>
							</li>
						);
					})}
				</ul>
			</div>
			<div className="all-btns">
				<button className="clear-cart" onClick={handleClearCart}>
					Clear cart
				</button>
			</div>
		</>
	);
};

export default CartPagee;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { clearCart, removeItem, decreaseQuantity } from "../state/cartSlice";
import "./cartPage.scss";
const CartPage = () => {
	const cart = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();

	const handleRemoveItem = (name: string) => {
		dispatch(removeItem(name));
	};

	const handleDecreaseQuantity = (item: { name: string; quantity: number }) => {
		dispatch(decreaseQuantity(item)); // Dispatch action to reduce quantity by one
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	// Stack items based on their names and calculate quantities
	return (
		<>
			<div>
				Cart
				<ul>
					{/* Map over the itemQuantityMap object */}
					{cart.items.length == 0 && <h1>No items in cart</h1>}
					{cart.items.map((item, index) => {
						return (
							<li key={index}>
								{item.name} x {item.quantity}
								{/* Decrease quantity */}
								<button
									className="remove-item"
									onClick={() =>
										handleDecreaseQuantity({
											name: item.name,
											quantity: item.quantity,
										})
									}
								>
									-
								</button>
								{/* Remove item */}
								<button
									className="remove-item"
									onClick={() => handleRemoveItem(item.name)}
								>
									x
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

export default CartPage;

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { clearCart, removeItem, decreaseQuantity } from "../state/cartSlice";
import "./cartPage.scss";
import { BsTrash2Fill } from "react-icons/bs";
const CartPage = () => {
	const cart = useSelector((state: RootState) => state.cart);
	const dispatch = useDispatch();

	const handleRemoveItem = (name: string) => {
		dispatch(removeItem(name));
	};

	const handleDecreaseQuantity = (item: {
		winery: string;
		wine: string;
		price: number;
		quantity: number;
		url: string;
		image: string;
	}) => {
		dispatch(decreaseQuantity(item)); // Dispatch action to reduce quantity by one
	};

	const handleClearCart = () => {
		dispatch(clearCart());
	};

	// Stack items based on their names and calculate quantities
	return (
		<>
			<div>
				<h2>Cart</h2>
				<div className="cart-body">
					<div className="cart-item-container">
						{/* Map over the itemQuantityMap object */}
						{cart.items.length == 0 && <h3>No items in cart</h3>}
						{cart.items.map((item, index) => {
							return (
								<div key={index} className="cart-item">
									<img src={item.image} alt={item.wine} />
									<div className="item-info">
										<div className="winery">{item.winery}</div>
										<div className="wine">{item.wine}</div>
										<div className="quantity">
											Quantity: <span>{item.quantity}</span>
											<button
												className="remove-btn"
												onClick={() => handleRemoveItem(item.wine)}
											>
												<BsTrash2Fill size={25} />
											</button>
											<button
												className="remove-item"
												onClick={() =>
													handleDecreaseQuantity({
														winery: item.winery,
														wine: item.wine,
														price: 0,
														quantity: item.quantity,
														url: item.url,
														image: item.image,
													})
												}
											>
												-
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="all-btns">
						<button className="clear-cart" onClick={handleClearCart}>
							Clear cart
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CartPage;

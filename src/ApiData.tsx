import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { selectData } from "./state/apiSlice";

import { addItem } from "./state/cartSlice";
import "./styles/apiData.scss";

function Api() {
	const dispatch = useDispatch<AppDispatch>();
	const data = useSelector(selectData);
	const price = 12;
	const slicedData = data.slice(1, 11);
	const addToCartHandler = (item: { name: string }) => {
		dispatch(addItem(item)); // Dispatch the entire item object
		localStorage.setItem("item", JSON.stringify(item)); // Store the entire item object in localStorage
		console.log(item); // Log the entire item object
	};
	const cart = useSelector((state: RootState) => state.cart);
	console.log(cart.items);
	return (
		<div>
			<div className="all-items">
				{slicedData.map((item, index) => (
					<div className="items" key={index}>
						<div className="img-btn-info">
							<div className="image">
								<img src={item.image} alt={item.name} />
							</div>
							<div className="item-info-container">
								<div className="wine-info">
									<div className="winery">{item.winery}</div>
									<div className="wine">{item.wine}</div>
									<div className="price">Price: ${price}</div>
								</div>
								<div className="add-btn">
									<button onClick={() => addToCartHandler({ name: item.wine })}>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Api;

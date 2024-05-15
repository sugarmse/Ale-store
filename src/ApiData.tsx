import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./state/store";
import { selectData } from "./state/apiSlice";
import { addItem } from "./state/cartSlice";
import "./styles/apiData.scss";

function Api() {
	const dispatch = useDispatch<AppDispatch>();
	const data = useSelector(selectData);
	const price = 12;
	const slicedData = data.slice(1, 11);

	const addToCartHandler = (item: {
		url: string;
		winery: string;
		wine: string;
		price: number;
		quantity: number;
		image: string;
	}) => {
		// Dispatch the addItem action with the item details
		dispatch(addItem(item));
		// Store the entire item object in localStorage
		localStorage.setItem("item", JSON.stringify(item));
		// Log the entire item object
		console.log(item);
	};

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
									<button
										onClick={() =>
											addToCartHandler({
												url: item.url,
												winery: item.winery,
												wine: item.wine,
												price: price,
												quantity: 1,
												image: item.image,
											})
										}
									>
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

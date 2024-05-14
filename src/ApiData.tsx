import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./state/store";
import { fetchData, selectData } from "./state/apiSlice";
import { Link } from "react-router-dom";
import { addItem } from "./state/cartSlice";

function Api() {
	const dispatch = useDispatch<AppDispatch>();
	const data = useSelector(selectData);
	const price = 12;
	const slicedData = data.slice(1, 11);
	const addToCartHandler=(item:{name:string})=>{
		dispatch(addItem(item));
		console.log(item);
	}
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
							<div className="btn-info">
								<div className="item-info">
									<p>{item.winery}</p>
									<p>{item.wine}</p>
									<p>${price}</p>
								</div>
								<div className="cart-btn">
									<button onClick={() => addToCartHandler(item.wine)}>
										Add to Cart
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			{cart.items.map((item, index) => (
				<div key={index}>{item.name}</div>
			))}
		</div>
	);
}

export default Api;

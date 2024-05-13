import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "./state/store";
import { fetchData, selectData } from "./state/apiSlice";
import { Link } from "react-router-dom";

function Api() {
	const dispatch = useDispatch<AppDispatch>();
	const data = useSelector(selectData);
	const price = 12;
    const slicedData = data.slice(1, 11);

	return (
		<div>
			<Link to={"/home"}>
				<button className="home-btn">Home</button>
			</Link>
			<div className="all-items">

			{slicedData.map((item, index) => (
				<div className="items" key={index}>
					<div className="image">
					<img src={item.image} alt={item.name} />
					</div>
					<p>{item.winery}</p>
					<p>{item.wine}</p>
					<p>${price}</p>
					<p>
						<button>Add to Cart</button>
					</p>
				</div>
			))}
		</div>
			</div>
	);
}

export default Api;

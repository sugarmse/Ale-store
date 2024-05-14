import splash from "../assets/wine.jpg";
import "./LandingPage.scss"; // Import your component-specific styles
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div className="splash-container">
			<img src={splash} alt="" className="splash-image" />
			<div className="slogan">
				Discover Your Perfect Pour
				<p>Crafted with Care, Sipped with Joy</p>
				<div className="shop-btn">
					<Link to={"/shop"}>
						{" "}
						<button>Shop Now</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;

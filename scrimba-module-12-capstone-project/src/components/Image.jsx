import React, { useState, useContext } from "react";
import {
	BsFillCartCheckFill,
	BsFillCartPlusFill,
	BsHeart,
	BsHeartFill,
} from "react-icons/bs";
import { Context } from "../Context";
import PropTypes from "prop-types";
import useHover from "../hooks/useHover";

function Image({ className, img }) {
	const { toggleFavorite, addToCart, removeFromCart } =
		useContext(Context);
	// const [isHovered, setIsHovered] = useState(false);
	const [isHeartFilled, setIsHeartFilled] = useState(false);
	const [isAddedToCart, setIsAddedToCart] = useState(false);

	const [hovered, ref] = useHover()

	const handleHeart = () => {
		toggleFavorite(img.id);
		setIsHeartFilled(!isHeartFilled);
	};

	const handleCart = () => {
		isAddedToCart ? removeFromCart(img) : addToCart(img);
		setIsAddedToCart(!isAddedToCart);
	};

	return (
		<div
			className={`${className} image-container`}
			ref={ref}
		>
			<img src={img.url} className="image-grid" alt={""} />
			{hovered && (
				<div className={"image-icons"}>
					<span onClick={handleHeart}>
						{isHeartFilled ? <BsHeartFill /> : <BsHeart />}
					</span>
					<span onClick={handleCart}>
						{isAddedToCart ? (
							<BsFillCartCheckFill />
						) : (
							<BsFillCartPlusFill />
						)}
					</span>
				</div>
			)}
		</div>
	);
}

Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool,
	}),
};

export default Image;

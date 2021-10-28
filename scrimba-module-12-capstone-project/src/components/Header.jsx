import React, { useContext } from "react";
import { BsCart, BsCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Context } from "../Context";

function Header() {
	const { cartItems } = useContext(Context);
	return (
		<div className={"header"}>
			<Link to="/">Picsome</Link>
			<Link to="/cart">
				{cartItems.length !== 0 ? (
					<BsCartFill />
				) : (
					<BsCart />
				)}
			</Link>
		</div>
	);
}

export default Header;

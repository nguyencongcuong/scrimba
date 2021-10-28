import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import CardItem from "../components/CartItem";
import { Context } from "../Context";

function Cart() {
	const { cartItems, setCartItems } = useContext(Context);
	const [pending, isPending] = useState(false);
	const [success, isSuccess] = useState(false);
	const [orderMessage, setOrderMessage] =
		useState("Place order");

	const cartItemEls = cartItems.map((a, b) => (
		<CardItem key={b} item={a} />
	));
	const totalCost = 18;
	const totalCostDisplay = totalCost.toLocaleString(
		"en-US",
		{ style: "currency", currency: "USD" }
	);

	const handleOrder = () => {
		setOrderMessage("Ordering...");
		setTimeout(() => {
			setOrderMessage("Order placed!");
			setCartItems([]);
		}, 3000);
	};

	return (
		<div>
			<h1>Check out</h1>
			{cartItemEls}
			<span>Total {totalCostDisplay}</span>
			<div className="">
				<button onClick={handleOrder}>
					{orderMessage}
				</button>
			</div>
		</div>
	);
}

export default Cart;

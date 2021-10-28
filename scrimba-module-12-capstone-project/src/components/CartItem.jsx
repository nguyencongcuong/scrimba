import React, { useContext } from "react";
import { BsTrash } from "react-icons/bs";
import { Context } from "../Context";


function CardItem({ item }) {
	const { removeFromCart } = useContext(Context);

	return (
		<div className="grid grid-cols-4">
			<h1>{item.id}</h1>
			<span
				onClick={() => removeFromCart(item)}
			>

				<BsTrash />
			</span>
			<img src={item.url} alt={item.id} width="100px" />
			<span>$5.99</span>
		</div>
	);
}

export default CardItem;

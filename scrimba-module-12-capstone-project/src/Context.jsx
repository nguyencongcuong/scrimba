import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
	const [photos, setPhotos] = useState([]);
	const [cartItems, setCartItems] = useState([]);

	async function getPhotos() {
		const res = await fetch(
			"https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
		);
		const data = await res.json();
		setPhotos(data);
	}

	useEffect(() => {
		getPhotos();
	}, []);

	function toggleFavorite(photoID) {
		return photos.map((photo) => {
			return (
				photo.id === photoID &&
				(photo.isFavorite = !photo.isFavorite)
			);
		});
	}

	function addToCart(newItem) {
		return setCartItems((prevItems) => [
			...prevItems,
			newItem,
		]);
	}

	function removeFromCart(oldItem) {
		const newCartItems = cartItems.filter(
			(item) => item.id !== oldItem.id
		);
		setCartItems(newCartItems);
	}

	console.log(cartItems);

	return (
		<Context.Provider
			value={{
				photos,
				toggleFavorite,
				addToCart,
				removeFromCart,
				cartItems,
				setCartItems,
			}}>
			{props.children}
		</Context.Provider>
	);
}

export { ContextProvider, Context };

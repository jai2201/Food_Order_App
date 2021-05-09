import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsSummary from "./Components/Meals/MealsSummary";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = (props) => {
		setCartIsShown(true);
	};

	const hideCartHandler = (props) => {
		setCartIsShown(false);
	};
	return (
		<CartProvider>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Header showCart={showCartHandler} />
			<main>
				<MealsSummary />
				<AvailableMeals />
			</main>
		</CartProvider>
	);
}

export default App;

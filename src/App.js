import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Layout/Header";
import AvailableMeals from "./Components/Meals/AvailableMeals";
import MealsSummary from "./Components/Meals/MealsSummary";
import Cart from "./Components/Cart/Cart";

function App() {
	const [cartIsShown, setCartIsShown] = useState(false);

	const showCartHandler = (props) => {
		setCartIsShown(true);
	};

	const hideCartHandler = (props) => {
		setCartIsShown(false);
	};
	return (
		<React.Fragment>
			{cartIsShown && <Cart onClose={hideCartHandler} />}
			<Header showCart={showCartHandler} />
			<main>
				<MealsSummary />
				<AvailableMeals />
			</main>
		</React.Fragment>
	);
}

export default App;

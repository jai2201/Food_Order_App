import React, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
	return (
		<Fragment>
			<header className={classes.header}>
				<h1>React Meals</h1>
				<HeaderCartButton onClick={props.showCart} />
			</header>
			<div className={classes["main-image"]}>
				<img src={mealsImage} alt="A meal of delicious Food" />
			</div>
		</Fragment>
	);
};

export default Header;

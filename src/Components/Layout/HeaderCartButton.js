import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
	return (
		<button
			className={classes.button}
			style={{ marginRight: 240 }}
			onClick={props.onClick}
		>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>3</span>
		</button>
	);
};
export default HeaderCartButton;

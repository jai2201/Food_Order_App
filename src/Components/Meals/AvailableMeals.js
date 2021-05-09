import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
	{
		id: "m1",
		name: "Mexican Pizza",
		description: "Made with imported ingredients",
		price: 22.99,
	},
	{
		id: "m2",
		name: "SandWitch",
		description: "A german specialty!",
		price: 16.5,
	},
	{
		id: "m3",
		name: "Masala Dosa",
		description: "South Indian Speciality!",
		price: 12.99,
	},
	{
		id: "m4",
		name: "Chinese Noodles",
		description: "Spicy!!",
		price: 18.99,
	},
];

const AvailableMeals = (props) => {
	const mealsList = DUMMY_MEALS.map((meal) => (
		<MealItem
			key={meal.id}
			id={meal.id}
			name={meal.name}
			description={meal.description}
			price={meal.price}
		/>
	));

	return (
		<center>
			<div
				style={{
					backgroundColor: "white",
					width: 900,
					borderRadius: 14,
					padding: 5,
					marginTop: 40,
				}}
			>
				<section className={classes.meals}>
					<ul>{mealsList}</ul>
				</section>
			</div>
		</center>
	);
};
export default AvailableMeals;

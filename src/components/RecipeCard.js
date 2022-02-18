import { Link } from 'react-router-dom';

function RecipeCard({ id, image, label, calories, mealType, cuisineType }) {
	return (
		<div key={image} className="recipe-card">
			<h2 className="recipe-card-title">{label}</h2>
			<p className="info">
				Calories: {calories}, <br />
				Meal Type: {mealType}, <br />
				Cuisine Type: {cuisineType}
				<br />{' '}
			</p>
			<img alt={label} src={image} />
			<Link to={`/recipes/${id}/recipe-guide`} className="recipe-card-link">
				Complete Recipe Guide Here
			</Link>
			<Link to={`/recipes/${id}/nutrition-facts`} className="recipe-card-link">
				Nutrition Facts Here
			</Link>
		</div>
	);
}

export default RecipeCard;

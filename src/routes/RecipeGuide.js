import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const edamamApiAppId = process.env.REACT_APP_EDAMAM_API_APP_ID;
const edamamApiAppKey = process.env.REACT_APP_EDAMAM_API_APP_KEY;

function RecipeGuide() {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState();
	const ingredients = recipe?.ingredients ?? [];

	useEffect(() => {
		fetch(
			`https://api.edamam.com/api/recipes/v2/${recipeId}?app_id=${edamamApiAppId}&app_key=${edamamApiAppKey}&type=public`
		)
			.then((res) => res.json())
			.then((data) => setRecipe(data.recipe));
	}, [recipeId]);

	return (
		<div>
			<h1>Recipe guide</h1>
			<h2>Ingredients</h2>
			{ingredients.map((ingredient, index) => (
				<p key={index}>{ingredient.text}</p>
			))}
		</div>
	);
}

export default RecipeGuide;

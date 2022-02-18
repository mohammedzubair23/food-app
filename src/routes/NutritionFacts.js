import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const edamamApiAppId = process.env.REACT_APP_EDAMAM_API_APP_ID;
const edamamApiAppKey = process.env.REACT_APP_EDAMAM_API_APP_KEY;

function NutritionFacts() {
	const { recipeId } = useParams();
	const [recipe, setRecipe] = useState();
	const totalNutrients = recipe?.totalNutrients ?? {};

	useEffect(() => {
		fetch(
			`https://api.edamam.com/api/recipes/v2/${recipeId}?app_id=${edamamApiAppId}&app_key=${edamamApiAppKey}&type=public`
		)
			.then((res) => res.json())
			.then((data) => setRecipe(data.recipe));
	}, [recipeId]);

	return (
		<div>
			<h1>Nutrition Facts</h1>
			{Object.entries(totalNutrients).map(([, { label, quantity, unit }], index) => (
				<p key={index}>
					{label}: {quantity}
					{unit}
				</p>
			))}
		</div>
	);
}

export default NutritionFacts;

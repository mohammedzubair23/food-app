import RecipeCard from './RecipeCard';

function RecipeList({ recipes }) {
	return (
		<div className="recipes-container">
			{recipes.map((recipe) => {
				const recipeId = recipe.uri.split('#')[1];
				return <RecipeCard key={recipe.image} id={recipeId} {...recipe} />;
			})}
		</div>
	);
}

export default RecipeList;

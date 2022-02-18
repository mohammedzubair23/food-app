import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import RecipeGuide from './routes/RecipeGuide';
import NutritionFacts from './routes/NutritionFacts';
import NotFound from './routes/NotFound';

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/recipes/:recipeId/recipe-guide" element={<RecipeGuide />} />
					<Route path="/recipes/:recipeId/nutrition-facts" element={<NutritionFacts />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

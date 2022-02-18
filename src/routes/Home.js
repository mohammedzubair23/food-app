import { useState } from 'react';
import Search from '../components/Search';
import RecipesList from '../components/RecipesList';

const edamamApiAppId = process.env.REACT_APP_EDAMAM_API_APP_ID;
const edamamApiAppKey = process.env.REACT_APP_EDAMAM_API_APP_KEY;

function Home() {
	const [recipes, setRecipes] = useState([]);
	const [searchQuery, setSearchQuery] = useState('');

	const handleSearchSubmit = (e) => {
		e.preventDefault();

		fetch(
			`https://api.edamam.com/api/recipes/v2?app_id=${edamamApiAppId}&app_key=${edamamApiAppKey}&type=public&q=${searchQuery}`
		)
			.then((res) => res.json())
			.then((data) => {
				const fetchedRecipes = data.hits.map((h) => h.recipe);
				setRecipes(fetchedRecipes);
			});
	};
	const handleSearchInputChange = (e) => {
		setSearchQuery(e.target.value);
	};

	return (
		<div>
			<h1 className="HEAVEN">FOOD HEAVEN</h1>
			<h2 className="name">Founder: Mohammed Zubair</h2>
			<p className="title">Welcome to FOOD HEAVEN!</p>
			<p className="first">
				A fast and easy way for you to have access to popular food recipes that you'll love. Whether
				its perparing certain meals for a diet, wanting to get into the chef industry, or simply
				wanting to increase your knowledge on different kinds of recipes, FOOD HEAVEN gives you
				access to hundreds of recipes with their nutrition facts. The best part is everything is FREE of charge! simply use
				the search bar below to type the food that you are interested in and you will have access to
				everything.{' '}
			</p>
			<Search
				searchQuery={searchQuery}
				onChange={handleSearchInputChange}
				onSubmit={handleSearchSubmit}
			/>
			<RecipesList recipes={recipes} />
			<img
				className="image"
				src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d5852d94818231.5e8838dae36fe.jpg"
				alt="Company Name"
				width="730"
				height="600"
			></img>
			<p className="learn">Types of Diets</p>
			<p className="second">
				People diet for all types of reasons as there are no shortage of reasons for wanting to live
				a healthier life. There are also a wide variety of options when it comes to selecting a diet
				that might work for you. Here is a closer look at some of the different types of diets that
				people are using all around the world.
			</p>
			<p className="Paleo">The Paleo Diet</p>
			<p className="PaleoInfo">
				This is a natural way of eating, one that almost abandons all intake of sugar. The only
				sugar in a Paleo diet comes from fruit. However, abandoning sugar is not the only
				stipulation. Processed foods and grains are also eliminated from the Paleo diet. The fewer
				number of carbohydrates in your system leads to a decreased amount of glucose. So your
				system will then begin to use fat as its fuel source. In a Paleo diet, dairy is also
				eliminated. So what can be eaten? A Paleo diet consists of fish, fowl, vegetables, fruits,
				nuts, oils, sweet potatoes, eggs and meat, so long as that meat is grass-fed and not
				grain-fed.
			</p>
			<p className="blood">The Blood Type Diet</p>
			<p className="bloodInfo">
				Some doctors have started to research diets that coincide with particular blood types. The
				premise of these diets attempts to match people with their common dietary needs based on
				their blood type. For example, individuals with type O blood are recommended to eat lots of
				food that are high in protein. In order to lose weight, spinach, red meat, seafood and
				broccoli are suggested while dairy should be avoided. Those with type A blood are
				recommended to avoid meat and place an emphasis on turkey, tofu, and fruit while weight loss
				is contingent on eating a diet that consists primarily of soy, seafood and vegetables.
				Individuals with type B and AB blood also have their own dietary restrictions and
				recommendations.
			</p>
			<p className="vegan">The Vegan Diet</p>
			<p className="veganInfo">
				This diet is a form of a vegetarian diet as it eliminates meat and animal products. One of
				the primary effects of this diet is that it reduces the intake of cholesterol and saturated
				fat. It takes some planning, but if a vegan diet is rationed out properly, it can have many
				positive effects. Studies have proven that those who practice a vegan diet minimize their
				overall risk of coronary heart disease, obesity and high blood pressure. To compensate for a
				lack of meat, vegans must find a way to incorporate more sources of protein and vitamin B-12
				into their diets.
			</p>
			<p className="south">The South Beach Diet</p>
			<p className="southInfo">
				This diet was first introduced in 2003 and is based on the premise of changing one’s overall
				eating habits by balancing out one’s everyday diet. Certain carbohydrates are completely
				avoided. It does not eliminate carbohydrates altogether, but aims to educate dieters on
				which carbs to always avoid. This often leads to developing a healthy way of eating so that
				it will be sustainable for the rest of people’s lives. The diet includes a selection of
				healthy fats, lean protein, as well as good carbs.
			</p>
			<p className="med">The Mediterranean Diet</p>
			<p className="medInfo">
				This is another kind of vegetable-heavy diet that avoids a lot of meat, but does not
				eliminate it altogether. This diet has been proven to help with depression, in addition to
				controlling blood sugar levels and helping with weight loss. The Mediterranean diet
				recommends the use of oil as much as possible and that means as an alternative to butter,
				salad dressings or marinades. It also emphasizes adding vegetables to each meal and favors
				fish over chicken. Whole grains, nuts and herbs are also used in larger amounts.
			</p>
			<p className="raw">Raw Food Diet</p>
			<p className="rawInfo">
				This is a diet that places a premium on eating uncooked and unprocessed foods. The diet
				eliminates the intake of any foods that have been pasteurized or produced with any kind of
				synthetics or additives. The diet is intended to create a surge in energy, a decrease in
				inflammation, while also lowering the number of carcinogens in one’s diet.
			</p>
			<img
				className="picGuy"
				src="https://media.cntraveler.com/photos/5859aad6eaa56c5e65d43537/master/w_1365,h_2048,c_limit/best-restaurants-NYC-Upland-2-2016.jpg"
				alt="Company Name"
				width="540"
				height="580"
			></img>
			<img
				className="pic"
				src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2014/05/HealthyRestaurantFood_1032617410-650x428.jpg"
				width="820"
				height="580"
			></img>
		</div>
	);
}

export default Home;

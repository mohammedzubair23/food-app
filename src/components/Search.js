function Search({ searchQuery, onChange, onSubmit }) {
	return (
		<form onSubmit={onSubmit}>
			<input className="search"
				type="search"
				placeholder="Type a recipe to search"
				value={searchQuery}
				onChange={onChange}
			/>
			<button>Search</button>
		</form>
	);
}

export default Search;

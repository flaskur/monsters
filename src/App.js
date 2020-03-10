import React from 'react';
import Cardlist from './components/cardlist/cardlist';
import Searchbar from './components/searchbar/searchbar';
import './App.css';

const App = function() {
	const [ monsters, setMonsters ] = React.useState([]);
	const [ searchbar, setSearchbar ] = React.useState('');

	const filteredMonsters = monsters.filter((monster) => {
		return monster.name.toLowerCase().includes(searchbar.toLowerCase());
	});

	// So event handlers are inside the component themselves. Alternative is the callback format.
	// If I remember correctly, to pass params to an event handler you do () => someFunc(arg) which like another level of indirection.
	const handleSearchChange = function(event) {
		console.log(event.target.value);
		setSearchbar(event.target.value);
		console.log(searchbar);
	};

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	return (
		<div className="App">
			<h1>Monsters</h1>

			{/* Extrapolate into component instead */}
			{/* <input type="search" placeholder="search monsters" onChange={handleSearchChange} value={searchbar} /> */}
			<Searchbar searchbar={searchbar} handleSearchChange={handleSearchChange} />
			<Cardlist monsters={filteredMonsters} />
		</div>
	);
};

export default App;

// On initial development, consider just doing everything in one file, and then extrapolating into components, rather than go through the whole process of making files and such. Also consider not organizing the folder structure in terms of components, but rather in terms of features. This seems more organized.

/**
 * navbar
 *  styles
 * 	components
 * 	static
 * 	etc.
 * header
 *  styles
 * 	components
 * 	static
 * 	etc.
 */

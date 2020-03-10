import React from 'react';
import Cardlist from './components/cardlist/cardlist';

const App = function() {
	const [ monsters, setMonsters ] = React.useState([]);

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	return (
		<div className="App">
			<h1>App</h1>
			<Cardlist monsters={monsters} />
		</div>
	);
};

export default App;

import React from 'react';
import './cardlist.css';
import Card from '../card/card';

// Extrapolate into parent of normal card component.
const Cardlist = function({ monsters }) {
	return (
		<div className="cardlist">
			{monsters.map((monster) => {
				return <Card key={monster.id} monster={monster} />;
			})}
		</div>
	);
};

// const Cardlist = function({ monsters }) {
// 	return (
// 		<div className="cardlist">
// 			{/* The props argument name doesn't matter */}
// 			{/* {banana.monsters.map((monster) => <h3>{monster.name}</h3>)} */}
// 			{monsters.map((monster) => {
// 				return <h2 key={monster.id}>{monster.name}</h2>;
// 			})}
// 		</div>
// 	);
// };

// Using class components means you uses this.props instead.
// class Cardlist extends React.Component {
// 	// Is the props stuff implied? Yes, but it needs to be in the render method for some reason.

// 	render() {
// 		console.log(this.props);
// 		return <div className="cardlist">{this.props.monsters.map((monster) => <h3>{monster.name}</h3>)}</div>;
// 	}
// }

export default Cardlist;

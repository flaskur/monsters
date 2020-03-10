import React from 'react';
import './card.css';

const card = function({ monster }) {
	return (
		<div className="card_container">
			{/* alt means text that appears if the image fails */}
			<img alt="monster" src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} />
			<h2>{monster.name}</h2>
			<h3>{monster.email}</h3>
		</div>
	);
};

export default card;

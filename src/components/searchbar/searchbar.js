import React from 'react';
import './searchbar.css';

const Searchbar = function({ searchbar, handleSearchChange }) {
	return (
		<div className="searchbar">
			<h1>SEARCH MONSTERS</h1>
			<input type="search" placeholder="search monsters" onChange={handleSearchChange} value={searchbar} />
		</div>
	);
};

export default Searchbar;

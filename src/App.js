import React, { Component } from 'react';
import MovieList from './components/MovieList/MovieList';
import './App.css';

class App extends Component {
	state = {
		currentGenre: 'All',
	};

	render() {
		const { currentGenre } = this.state;
		return (
			<main className="container">
				<MovieList />
			</main>
		);
	}
}

export default App;

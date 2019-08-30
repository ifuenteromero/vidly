import React, { Component } from 'react';
import MovieList from './components/MovieList/MovieList';
import './App.css';

class App extends Component {
	render() {
		return (
			<main className="container">
				<MovieList />
			</main>
		);
	}
}

export default App;

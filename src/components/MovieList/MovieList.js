import React, { Component, Fragment } from 'react';
import { getMovies } from '../../services/fakeMovieService';
import './styles.css';
import Movie from '../Movie/Movie';

class MovieList extends Component {
	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({
			movies,
		});
	};

	state = {
		movies: getMovies(),
	};

	handleLike = movie => {
		const movies = this.state.movies;
		const index = movies.indexOf(movie);
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	render() {
		const { length: count } = this.state.movies;

		if (count === 0) return <p>There are no movies in the database</p>;
		return (
			<Fragment>
				<p>Showing {count} movies in the database </p>
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Title</th>
							<th scope="col">Genre</th>
							<th scope="col">Stock</th>
							<th scope="col">Rate</th>
							<th></th>
							<th></th>
						</tr>
					</thead>
					<tbody>
						{this.state.movies.map(movie => (
							<tr key={movie._id}>
								<Movie
									movie={movie}
									handle={() => {
										this.handleDelete(movie);
									}}
									onLike={() => {
										this.handleLike(movie);
									}}
								/>
							</tr>
						))}
					</tbody>
				</table>
				<ul />
			</Fragment>
		);
	}
}

export default MovieList;

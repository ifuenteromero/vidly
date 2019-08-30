import React, { Component } from 'react';
import { getMovies } from '../../services/fakeMovieService';
import './styles.css';
import Movie from '../Movie/Movie';
import Pagination from '../common/Pagination';
import ListGroup from '../common/ListGroup';
import { getGenres } from '../../services/fakeGenreService'


class MovieList extends Component {
	handleDelete = movie => {
		const movies = this.state.movies.filter(m => m._id !== movie._id);
		this.setState({
			movies,
		});
	};

	state = {
		movies: [],
		genres:  [],
		pageSize: 4,
		currentPage: 1,
		selectedGenre : {name: "All Genres"}
		
	};

	componentDidMount(){
		const genres = [{name: "All Genres"}, ...getGenres()]
		this.setState({
			movies: getMovies(),
			genres,
		})
	}

	handleLike = movie => {
		const movies = this.state.movies;
		const index = movies.indexOf(movie);
		movies[index].liked = !movies[index].liked;
		this.setState({ movies });
	};

	handlePageChange = page => {
		this.setState({ currentPage: page });
	};

	handleGenreSelected = genre => {
		console.log(genre)
		this.setState({ selectedGenre: genre, currentPage: 1 });
	};

	render() {
		const { currentPage, pageSize, genres, selectedGenre, movies: allMovies } = this.state;
		const filtered = selectedGenre.name==="All Genres" ? allMovies : allMovies.filter(m=>m.genre.name===selectedGenre.name) 
		const { length: count } = filtered;
		const minIndex = (currentPage - 1) * this.state.pageSize;
		const maxIndex = currentPage * this.state.pageSize - 1;
		const movies = filtered.filter(
			m =>
				filtered.indexOf(m) <= maxIndex &&
				filtered.indexOf(m) >= minIndex
		);

		//if (count === 0) return <p>There are no movies in the database</p>;
		return (
			<div className="row">
				<div className="col-2">
					<ListGroup 
						items={genres} 
						selectedItem={selectedGenre}
						onItemSelect={this.handleGenreSelected} 
					/>
				</div>
				<div className="col">
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
							{movies.map(movie => (
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
					<Pagination
						itemsCount={count}
						pageSize={pageSize}
						currentPage={currentPage}
						onPageChange={this.handlePageChange}
					/>
					<ul />
				</div>
				
			</div>
		);
	}
}

export default MovieList;

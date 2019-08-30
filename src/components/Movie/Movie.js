import React, { Component, Fragment } from 'react';
import Like from '../common/Like';

class Movie extends Component {
	state = {};

	render() {
		const {
			dailyRentalRate,
			genre,
			numberInStock,
			title,
			liked,
		} = this.props.movie;

		const { name } = genre;
		const { handle } = this.props;
		return (
			<Fragment>
				<td scope="row">{title}</td>
				<td>{name}</td>
				<td>{numberInStock} </td>
				<td>{dailyRentalRate}</td>
				<td>
					<Like liked={liked} onLike={this.props.onLike} />
				</td>
				<td>
					<button className="btn btn-danger btn-sm" onClick={handle}>
						Delete
					</button>
				</td>
			</Fragment>
		);
	}
}

export default Movie;

// import React from 'react';
import PropTypes from 'prop-types'
import Movie from './Movie';


const MoviesList = (props) => {
    const { movies } = props
    return (
        <div className='MoviesList'>
            {
                movies.map(movie => {
                    return <div key={movie.imdbID} className="MoviesList-Item">
                        <Movie
                            imdbID={movie.imdbID}
                            title={movie.Title}
                            year={movie.Year}
                            poster={movie.Poster}></Movie>
                    </div>
                })
            }
        </div>
    );
}

MoviesList.propTypes = {
    movies: PropTypes.array
}

export default MoviesList;

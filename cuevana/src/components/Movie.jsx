import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class Movie extends Component {
    render() {
        const { imdbID, poster, title, year } = this.props
        return (
            <div className="card">
                <Link to={`/detail/${imdbID}`}>
                    <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={poster} alt="poster" />
                        </figure>
                    </div>
                    <div className="card-content">
                        <div className="media">
                            <div className="media-content">
                                <p className="title is-4">{title}</p>
                                <p className="subtitle is-6">{year}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

Movie.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string
}

export default Movie
import React, { Component } from 'react';
import ButtonBackToHome from '../components/ButtonBackToHome'
const API_KEY = '8d173fd'


class Details extends Component {

    state = {
        movie: {}
    }

    _fetchMovie = ({id}) => {

        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(results => {
            console.log(results);
            this.setState({movie: results})
        })
    }
    _goBack = () => {
        window.history.back()
    }

    componentDidMount () {
        const urls = window.location.href
        const params = urls.split('/')
        const id = params[params.length-1]
        this._fetchMovie({id})
    }
    render() {
        const {Poster, Title, Actors, Metascore, Plot} = this.state.movie
        return (
            <div>
                <ButtonBackToHome></ButtonBackToHome>
                <h1>{Title}</h1>
                <img src={Poster} alt='poster'></img>
                <h3>{Actors}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        );
    }
}

export default Details;
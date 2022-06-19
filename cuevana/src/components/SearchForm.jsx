import React, { Component } from 'react';
const API_KEY = '8d173fd'

class SearchForm extends Component {
    state = {
        inputMovie: ''
    }
    _handleChange = (e) => {
        this.setState({ inputMovie: e.target.value })
    }
    _handleSubmit = (e) => {
        e.preventDefault()
        const {inputMovie} = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
        .then(res => res.json())
        .then(results => {
            const {Search = [], totalResults = "0"} = results
            this.props.onResults(Search)
        })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Movie to search"
                        onChange={this._handleChange}></input>
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
            </form>
        )
    }
}

export default SearchForm;

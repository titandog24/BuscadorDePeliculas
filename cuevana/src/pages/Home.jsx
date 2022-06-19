import React, { Component } from 'react';
import MoviesList from '../components/MoviesList';
import SearchForm from '../components/SearchForm';
import Title from '../components/Title';


class Home extends Component {

    state = {
        results: [],
        usedResults: false
    }

    _handleResults = (results) => {
        this.setState({ results, usedResults: true })
    }
    _renderResults = () => {
        return this.state.results.length === 0
            ? <p>Sorry! Results not found</p>
            : <MoviesList movies={this.state.results}></MoviesList>

    }
    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className='SearchForm-wrapper'>
                    <SearchForm onResults={this._handleResults}></SearchForm>
                </div>
                {
                    this.state.usedResults
                        ? this._renderResults()
                        : <small>Use the form to search a movie</small>
                }
            </div>
        );
    }
}

export default Home;

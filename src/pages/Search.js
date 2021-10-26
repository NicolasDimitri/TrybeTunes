import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      isDesactiveButton: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
  }

  inputSearch({ target: { value } }) {
    const MAX_LENGTH = 2;
    const condition = value.length >= MAX_LENGTH;
    this.setState({
      search: value,
      isDesactiveButton: !condition,
    });
  }

  render() {
    const {
      search,
      isDesactiveButton,
    } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        Search
        <form action="">
          <input
            type="text"
            data-testid="search-artist-input"
            value={ search }
            onChange={ this.inputSearch }
          />
          <button
            type="submit"
            data-testid="search-artist-button"
            onClick={ this.handleChange }
            disabled={ isDesactiveButton }
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

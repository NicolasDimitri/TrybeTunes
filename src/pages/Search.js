import React, { Component } from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumCard from '../components/AlbumCard';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      isDesactiveButton: true,
      albuns: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.inputSearch = this.inputSearch.bind(this);
  }

  async handleClick(event) {
    event.preventDefault();
    const { search } = this.state;
    const albuns = await searchAlbumsAPI(search);
    this.setState({
      albuns,
      prevSearch: search,
      search: '',
    });
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
    const { search, isDesactiveButton, albuns, prevSearch } = this.state;
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
            onClick={ this.handleClick }
            disabled={ isDesactiveButton }
          >
            Pesquisar
          </button>
        </form>
        {albuns.length === 0 ? (
          <h1>Nenhum álbum foi encontrado</h1>
        ) : (
          <h3>{`Resultado de álbuns de: ${prevSearch}`}</h3>
        )}
        {albuns.map((card) => (
          <AlbumCard
            key={ card.collectionId }
            img={ card.artworkUrl100 }
            id={ card.collectionId }
            albumName={ card.collectionName }
            artistName={ card.artistName }
          />
        ))}
      </div>
    );
  }
}

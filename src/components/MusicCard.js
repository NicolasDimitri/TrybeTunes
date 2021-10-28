import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      isFavorite: false,
    };
    this.handleButton = this.handleButton.bind(this);
  }

  componentDidMount() {
    this.favoritesFunc();
  }

  handleButton(song) {
    const { isFavorite } = this.state;
    if (!isFavorite) {
      this.setState({
        loading: true,
        isFavorite: true,
      }, async () => {
        await addSong(song);
        this.setState({
          loading: false,
        });
      });
    } else {
      this.setState({
        isFavorite: false,
      });
    }
  }

  favoritesFunc() {
    const {
      idFav,
    } = this.props;
    this.setState({
      loading: true,
    }, async () => {
      const favorites = await getFavoriteSongs();
      const isFavorite = favorites.some((music) => music.trackId === idFav);
      this.setState({
        isFavorite,
        loading: false,
      });
    });
  }

  render() {
    const {
      musicList,
      music,
    } = this.props;
    const {
      loading,
      isFavorite,
    } = this.state;
    return (
      <div>
        {musicList.length > 0
    && (
      <div>
        {loading && <Loading />}
        <p>{music.trackName}</p>
        <audio data-testid="audio-component" src={ music.previewUrl } controls>
          <track kind="captions" />
          <code>audio</code>
        </audio>
        <label htmlFor={ music.amgArtistId }>
          Favorita
          <input
            data-testid={ `checkbox-music-${music.trackId}` }
            id={ music.amgArtistId }
            type="checkbox"
            checked={ isFavorite }
            onChange={ () => this.handleButton(music) }
          />
        </label>
      </div>)}
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicList: PropTypes.arrayOf(PropTypes.object).isRequired,
  music: PropTypes.objectOf(PropTypes.string).isRequired,
  idFav: PropTypes.string.isRequired,
};

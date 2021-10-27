import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import Loading from '../pages/Loading';

export default class MusicCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
    this.handleButton = this.handleButton.bind(this);
  }

  handleButton(song) {
    this.setState({
      loading: true,
    }, async () => {
      await addSong(song);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    const {
      musicList,
    } = this.props;
    const {
      loading,
    } = this.state;
    return (
      <div data-testid="page-album">
        {loading && <Loading />}
        {musicList.length > 0
    && (
      <>
        <h1 data-testid="artist-name">{musicList[0].artistName}</h1>
        <h3 data-testid="album-name">{musicList[0].collectionName}</h3>
        {musicList.slice(1).map((album) => (
          <div key={ album.artistId }>
            <p>{album.trackName}</p>
            <audio data-testid="audio-component" src={ album.previewUrl } controls>
              <track kind="captions" />
              <code>audio</code>
            </audio>
            <label htmlFor={ album.amgArtistId }>
              Favorita
              <input
                data-testid={ `checkbox-music-${album.trackId}` }
                id={ album.amgArtistId }
                type="checkbox"
                onChange={ () => this.handleButton(album) }
              />
            </label>
          </div>
        ))}
      </>)}
      </div>
    );
  }
}

MusicCard.propTypes = {
  musicList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      musicList: [],
    };
  }

  componentDidMount() {
    this.getMusicList();
  }

  async getMusicList() {
    const {
      match: {
        params: {
          id,
        },
      },
    } = this.props;
    const musicList = await getMusics(id);
    this.setState({
      musicList,
    });
  }

  render() {
    const {
      musicList,
    } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
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
      </div>
    ))}
  </>)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

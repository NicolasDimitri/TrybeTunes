import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';

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
        {musicList[1]
        && (
          <div>
            <h1 data-testid="artist-name">{musicList[0].artistName}</h1>
            <h3 data-testid="album-name">{musicList[0].collectionName}</h3>
          </div>
        )}
        {musicList[1] && musicList.slice(1).map((album) => (<MusicCard
          key={ album.trackId }
          music={ album }
          musicList={ musicList }
          idFav={ album.trackId }
        />))}
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

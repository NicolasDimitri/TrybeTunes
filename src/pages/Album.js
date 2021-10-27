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
    console.log(musicList);
    this.setState({
      musicList,
    });
  }

  render() {
    const {
      musicList,
    } = this.state;
    return (
      <div>
        <Header />
        <MusicCard musicList={ musicList } />
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

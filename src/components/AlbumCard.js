import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AlbumCard extends Component {
  render() {
    const {
      img,
      albumName,
      artistName,
      id,
    } = this.props;
    return (
      <Link
        to={ `/album/${id}` }
        data-testid={ `link-to-album-${id}` }
      >
        <img src={ img } alt={ albumName } />
        <h1>{artistName}</h1>
        <h3>{albumName}</h3>
      </Link>
    );
  }
}

AlbumCard.propTypes = {
  albumName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
};

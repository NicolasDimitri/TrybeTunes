import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';

export default class Album extends Component {
  render() {
    const {
      match: {
        params: {
          id,
        },
      },
    } = this.props;
    console.log(id);
    return (
      <div data-testid="page-album">
        <Header />
        Album
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

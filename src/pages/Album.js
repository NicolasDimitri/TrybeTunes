import React, { Component } from 'react';
import Header from '../components/Header';

export default class Album extends Component {
  render() {
    const {
match:{
  params:{
    id,
  }
}
    } = this.props
    console.log(this.props)
    return (
      <div data-testid="page-album">
        <Header />
        Album
      </div>
    );
  }
}

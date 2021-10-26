import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from '../pages/Loading';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }

  componentDidMount() {
    getUser()
      .then((response) => {
        this.setState({
          user: response.name,
        });
      });
  }

  render() {
    const {
      user,
    } = this.state;
    return (
      <header data-testid="header-component">
        {user ? <p data-testid="header-user-name">{ user }</p> : <Loading />}
        <Link to="/search" data-testid="link-to-search">Search</Link>
        <Link
          to="/favorites"
          data-testid="link-to-favorites"
        >
          Favorites
        </Link>
        <Link to="/profile" data-testid="link-to-profile">Profile</Link>
        Header
      </header>
    );
  }
}

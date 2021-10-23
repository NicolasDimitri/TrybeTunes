import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import Album from './Album';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';

export default class Content extends Component {
  render() {
    const { search, searchPage } = this.props;
    return (
      <div>
        <h1>Content</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={ (propsRouter) => (
              search ? <Redirect to="/search" /> : <Login
                search={ search }
                searchPage={ searchPage }
                { ...propsRouter }
              />
            ) }
          />
          <Route
            path="/search"
            render={ (propsRouter) => (<Search
              { ...propsRouter }
            />) }
          />
          <Route
            path="/album/:id"
            render={ (propsRouter) => (<Album
              { ...propsRouter }
            />) }
          />
          <Route
            path="/favorites"
            render={ (propsRouter) => (<Favorites
              { ...propsRouter }
            />) }
          />
          <Route
            path="/profile/edit"
            render={ (propsRouter) => (<ProfileEdit
              { ...propsRouter }
            />) }
          />
          <Route
            exact
            path="/profile"
            render={ (propsRouter) => (<Profile
              { ...propsRouter }
            />) }
          />
          <Route
            path="*"
            render={ (propsRouter) => (<NotFound { ...propsRouter } />) }
          />
        </Switch>
      </div>
    );
  }
}

Content.propTypes = {
  search: PropTypes.bool.isRequired,
  searchPage: PropTypes.func.isRequired,
};

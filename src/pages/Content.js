import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './Login';
import Search from './Search';
import Album from './Album';
import Favorites from './Favorites';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import NotFound from './NotFound';

export default class Content extends Component {
  render() {
    return (
      <div>
        <h1>Content</h1>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route path="/search" component={ Search } />
          <Route
            path="/album/:id"
            component={ Album }
          />
          <Route path="/favorites" component={ Favorites } />
          <Route path="/profile/edit" component={ ProfileEdit } />
          <Route path="/profile" component={ Profile } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </div>
    );
  }
}
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      isDesactiveButton: true,
      loading: false,
      response: undefined,
    };
    this.handleChange = this.handleChange.bind(this);
    this.saveUser = this.saveUser.bind(this);
    this.loadingPage = this.loadingPage.bind(this);
  }

  handleChange({ target: { value } }) {
    const MAX_LENGTH = 2;
    const { login } = this.state;
    const loginMinLength = login.length >= MAX_LENGTH;
    this.setState({
      login: value,
      isDesactiveButton: !loginMinLength,
    });
  }

  loadingPage() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
  }

  async saveUser(event) {
    event.preventDefault();
    const { login } = this.state;
    this.loadingPage();
    const response = await createUser({ name: login });
    this.setState({
      response,
    });
  }

  render() {
    const {
      login,
      isDesactiveButton,
      loading,
      response,
    } = this.state;
    return (
      <div data-testid="page-login">
        Login
        { loading && <Loading />}
        { response && <Redirect to="/search" /> }
        <form>
          <input
            type="text"
            data-testid="login-name-input"
            value={ login }
            onChange={ this.handleChange }
          />
          <button
            type="submit"
            data-testid="login-submit-button"
            disabled={ isDesactiveButton }
            onClick={ this.saveUser }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
import Loading from './LoadingScreen';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      isDesactiveButton: true,
      loading: false,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.verifyButton = this.verifyButton.bind(this);
    this.submitButton = this.submitButton.bind(this);
    this.loadingScreen = this.loadingScreen.bind(this);
  }

  onInputChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, this.verifyButton);
  }

  loadingScreen() {
    const { loading } = this.state;
    this.setState({
      loading: !loading,
    });
  }

  verifyButton() {
    const MAX_VALUE = 3;
    const { login } = this.state;
    const retorno = login.length >= MAX_VALUE;
    this.setState({
      isDesactiveButton: !retorno,
    });
  }

  async submitButton() {
    const { login } = this.state;
    const { searchPage } = this.props;
    this.loadingScreen();
    await createUser({ name: login });
    this.loadingScreen();
    searchPage();
  }

  render() {
    const {
      login,
      isDesactiveButton,
      loading,
    } = this.state;
    return (
      <div data-testid="page-login">
        <h1>Login</h1>
        <input
          type="text"
          value={ login }
          data-testid="login-name-input"
          name="login"
          onChange={ this.onInputChange }
        />
        {loading
        && <Loading /> }
        <button
          type="button"
          data-testid="login-submit-button"
          name="isDesactiveButton"
          disabled={ isDesactiveButton }
          onClick={ this.submitButton }
        >
          Entrar
        </button>
      </div>
    );
  }
}

Login.propTypes = {
  searchPage: PropTypes.func.isRequired,
};

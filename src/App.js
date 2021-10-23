import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './pages/Content';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      search: false,
    };
    this.searchPage = this.searchPage.bind(this);
  }

  searchPage() {
    this.setState({
      search: true,
    });
  }

  render() {
    const { search } = this.state;

    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Content search={ search } searchPage={ this.searchPage } />
      </BrowserRouter>
    );
  }
}

export default App;

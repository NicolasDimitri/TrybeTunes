import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './pages/Content';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <p>TrybeTunes</p>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;

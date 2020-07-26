import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ArtikelList from './components/ArtikelList';
import ArtikelModal from './components/ArtikelModal';
import { Container } from 'reactstrap';


import { Provider } from 'react-redux';
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ArtikelModal />
            <ArtikelList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
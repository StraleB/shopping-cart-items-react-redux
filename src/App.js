import React from 'react';
import store from './redux/store'
import {Provider} from 'react-redux'
import './App.css';
import HomeComponent from './components/HomeComponent';
import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <NavbarComponent/>
    <HomeComponent/>
    </div>
    </Provider>
  );
}

export default App;

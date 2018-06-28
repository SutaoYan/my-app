import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> input key word to search jobs</h1>
        <Search> </Search>
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';
import Store from './components/Store'
import Bar from './components/Bar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Bar/>
        <div className="products-section"><Store /></div>
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import './App.css';
import Main from '../src/components/pages/main'; 

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      greeting: ''
    };
  }

  render() {
    return (
      <div className="App">
          <Main />
      </div>
    );
  }
}

export default App;

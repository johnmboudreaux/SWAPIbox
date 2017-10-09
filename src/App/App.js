import React, { Component } from 'react';
import Header from '../Header/Header';
import Helper from '../Helper';

class App extends Component {
  componentDidMount() {
    const thing = new Helper();
    console.log(thing.getData());
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;

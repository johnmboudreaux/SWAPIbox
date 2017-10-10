import React, { Component } from 'react';
import Header from '../Header/Header';
import Helper from '../Helper';

class App extends Component {
  constructor() {
    super();
    this.state= {
      people: {}
    };
  }
  componentDidMount() {
    const helper = new Helper();
    this.setState({
      people: helper.getData('people')
    });
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

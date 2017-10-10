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

  fetchPeople() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
    const targetUrl = 'http://swapi.co/api/people'

    return fetch(`https://swapi.co/api/people/`)
      .then(returnedData => returnedData.json())
      .then(data => console.log(data.results))
  }

  componentDidMount() {
    // const helper = new Helper();
    // helper.getData('people')
    this.fetchPeople()
    // this.setState({
    //   people: helper.getData('people')
    // });
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

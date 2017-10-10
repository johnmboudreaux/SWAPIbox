import React, { Component } from 'react';
import Header from '../Header/Header';
import Helper from '../Helper';
import { Route } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state= {
      people: {}
    };
  }

  fetchPeople() {
    return fetch(`https://swapi.co/api/people/`)
      .then(returnedData => returnedData.json())
      .then(people => people.results.map(person => {
        fetch(person.homeworld)
          .then(response => response.json())
          .then(homeWorld => person.homeworld = homeWorld);
        return person;
      }))
      .then(data => console.log(data));
  }

  fetchVehicles() {
    return fetch(`https://swapi.co/api/vehicles/`)
      .then(returnedData => returnedData.json())
      .then(vehicles => vehicles.results.map(vehicle => {
        return vehicle;
      }))
      .then(response => console.log(response))
      // .then(vehicles => vehicles.map((vehicle) => {
      //   return Object.assign({}, vehicle);
      // }));
  }

  componentDidMount() {
    // const helper = new Helper();
    // helper.getData('people')
    this.fetchPeople();
    this.fetchVehicles();
    // this.setState({
    //   people: helper.getData('people')
    // });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/people"
          render={() =>
            <Header />
          }
        />

      </div>
    );
  }
}

export default App;

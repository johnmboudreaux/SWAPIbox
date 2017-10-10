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

  cleanVehicleData(arrayOfVehicles) {
    const rawArray = arrayOfVehicles;
    console.log(rawArray)
    const cleanArray = rawArray.map(({ name, model, passengers, vehicle_class }) => {
      const newVehicle = {
         name,
         model,
         vehicle_class,
         passengers
      }
      return newVehicle;
    })
    console.log(cleanArray)
  }

  fetchList(type) {
    return fetch(`https://swapi.co/api/${type}/`)
      .then(returnedData => returnedData.json())
      .then(returnedData => returnedData.results.map(personPlaceOrThing => {
        if(type === 'people'){
          fetch(personPlaceOrThing.homeworld)
            .then(response => response.json())
            .then(homeWorld => personPlaceOrThing.homeworld = homeWorld);
        }
        if (type === 'planets') {
          const allResidents = personPlaceOrThing.residents.map(residentAPI => {
            return fetch(residentAPI)
              .then(response => response.json());
          });
          
          Promise.all(allResidents)
            .then(residents => personPlaceOrThing.residents = residents);
        }
        return personPlaceOrThing;
      }))
      .then(data => console.log(data));
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
      // .then(data => console.log(data));
  }

  fetchVehicles() {
    return fetch(`https://swapi.co/api/vehicles/`)
      .then(returnedData => returnedData.json())
      .then(vehicles => vehicles.results.map(vehicle => {
        return vehicle;
      }))
      .then(response => this.cleanVehicleData(response))
      .then()
      // .then(vehicles => vehicles.map((vehicle) => {
      //   return Object.assign({}, vehicle);
      // }));
  }

  componentDidMount() {
    // const helper = new Helper();
    // helper.getData('people')
    this.fetchList('planets');
    // this.fetchPeople();
    // this.fetchVehicles();
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

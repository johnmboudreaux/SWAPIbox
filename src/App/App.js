import React, { Component } from 'react';
import Header from '../Header/Header';
import Helper from '../Helper';
import { Route } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state= {
      appArray: []
    };
  }

  cleanVehiclesData(arrayOfVehicles) {
    const rawArray = arrayOfVehicles.results;
    const cleanArray = rawArray.map(vehicle => {
      const newVehicle = {
        name: vehicle.name,
        model: vehicle.model,
        vehicle_class: vehicle.vehicle_class,
        passengers: vehicle.passengers,
        isFavorite: false,
        type: 'vehicles'
      };
      return newVehicle;
    });
    return cleanArray;
  }

  cleanPeopleData(arrayOfPeople) {
    const rawArray = arrayOfPeople.results;
    const cleanArray = rawArray.map(person => {
      const newPerson = {
        name: person.name,
        homeworld: person.homeworld,
        species: '',
        population: 0,
        isFavorite: false,
        type: 'people'
      };
      return newPerson;
    });
    return cleanArray;
  }

  cleanPlanetsData(arrayOfPlanets) {
    const rawArray = arrayOfPlanets.results;
    const cleanArray = rawArray.map((planet) => {
      const newPlanet = {
        name: planet.name,
        terrain: planet.terrain,
        poplulation: planet.population,
        climate: planet.climate,
        residents: planet.residents,
        isFavorite: false,
        type: 'planets'
      };
      return newPlanet;
    });
    return cleanArray;
  }

  updateState(array) {
    const oldState = this.state.appArray.slice();
    const newState = [...oldState, ...array]
    console.log('oldState: ', oldState)
    console.log('array: ', array)
    console.log('newState: ', newState)
    this.setState({ appArray: newState})
  }

  fetchList(type) {
    fetch(`https://swapi.co/api/${type}/`)
      .then(returnedData => returnedData.json())
      .then(group => {
        let newGroup = [];
        if (type === 'people') {
          newGroup = this.cleanPeopleData(group);
        }
        if (type === 'planets') {
          newGroup = this.cleanPlanetsData(group);
        }
        if (type === 'vehicles') {
          newGroup = this.cleanVehiclesData(group);
        }
        return newGroup;
      })
      .then(returnData => returnData.map(personPlaceOrThing => {
        if (type === 'people'){
          fetch(personPlaceOrThing.homeworld)
            .then(response => response.json())
            .then(world => personPlaceOrThing.homeworld = world)
            .then(world => personPlaceOrThing.population = world.population);
        }
        if (type === 'planets') {
          const allResidents = personPlaceOrThing.residents.map(residentAPI => {
            return fetch(residentAPI)
              .then(response => response.json());
          });
          Promise.all(allResidents)
            .then(residents => personPlaceOrThing.residents = residents)            
        }
        return personPlaceOrThing;
      })).then(finalData => this.updateState(finalData));
      
      
  }

  componentDidMount() {
    // const helper = new Helper();
    // helper.getData('people')
    const vehicles = this.fetchList('vehicles');
    const planets = this.fetchList('planets');
    const people = this.fetchList('people');
    // this.fetchList('planets')

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

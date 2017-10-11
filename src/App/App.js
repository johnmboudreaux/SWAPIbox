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

  cleanvehiclesData(arrayOfVehicles) {
    const rawArray = arrayOfVehicles;
    console.log(rawArray)
    const cleanArray = rawArray.map(({ name, model, passengers, vehicle_class }) => {
      const newVehicle = {
        name,
        model,
        vehicle_class,
        passengers
      };
      return newVehicle;
    });
    console.log(cleanArray)
  }

  cleanpeopleData(arrayOfPeople) {
    const rawArray = arrayOfPeople;
    console.log(rawArray)
    const cleanArray = rawArray.map((person) => {
      const newPerson = {
        name: person.name,
        homeworld: person.homeworld,
        species: '',
        population: 0
      };
      return newPerson;
    });
    return cleanArray;
  }

  cleanplanetData(arrayOfPlanets) {
    const rawArray = arrayOfPlanets;
    const cleanArray = rawArray.map((planet) => {
      const newPlanet = {
        name: planet.name,
        terrain: planet.terrain,
        poplulation: planet.population,
        climate: planet.climate,
        residents: planet.residents
      };
      return newPlanet;
    });
    return cleanArray;
  }

  fetchList(type) {
    return fetch(`https://swapi.co/api/${type}/`)
      .then(returnedData => returnedData.json())
      .then(group => this.cleanplanetData(group.results))
      .then(returnedData => returnedData.map(personPlaceOrThing => {
        if (type === 'people'){
          fetch(personPlaceOrThing.homeworld)
            .then(response => response.json())
            .then(world => personPlaceOrThing.homeworld = world)
            .then(world => personPlaceOrThing.population = world.population)
        }
        if (type === 'planets') {
          const allResidents = personPlaceOrThing.residents.map(residentAPI => {
            return fetch(residentAPI)
              .then(response => response.json());
          });
          Promise.all(allResidents)
            .then(residents => personPlaceOrThing.residents = residents);
        }
        console.log('thing: ', personPlaceOrThing)
        return personPlaceOrThing;
      }))
      .then(data => console.log(data));
  }

  componentDidMount() {
    // const helper = new Helper();
    // helper.getData('people')
    // this.fetchList('vehicles');
    this.fetchList('planets');
    // this.fetchList('people');
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

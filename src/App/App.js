import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import Helper from '../Helper';
import { Route } from 'react-router';

class App extends Component {
  constructor() {
    super();
    this.state= {
      people: {}
    };
  }

  cleanVehiclesData(arrayOfVehicles) {
    const rawArray = arrayOfVehicles.results;
    const cleanArray = rawArray.map(vehicle => {
      const newVehicle = {
        name: vehicle.name,
        model: vehicle.model,
        vehicle_class: vehicle.vehicle_class,
        passengers: vehicle.passengers
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
        population: 0
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
        residents: planet.residents
      };
      return newPlanet;
    });
    return cleanArray;
  }

  fetchList(type) {
    return fetch(`https://swapi.co/api/${type}/`)
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
            .then(residents => personPlaceOrThing.residents = residents);
        }
        return personPlaceOrThing;
      }));
  }

  componentDidMount() {
    // const helper = new Helper();
    // helper.getData('people')
    this.fetchList('vehicles');
    // this.fetchList('planets');
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
            <CardContainer />
          }
        />
      </div>
    );
  }
}

export default App;

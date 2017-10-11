import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
// import Helper from '../Helper';
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
        'Model': vehicle.model,
        'Vehicle Class': vehicle.vehicle_class,
        'Passengers': vehicle.passengers,
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
        'Homeworld': person.homeworld,
        'Species': person.species[0],
        'Population': 0,
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
        'Terrain': planet.terrain,
        'Poplulation': planet.population,
        'Climate': planet.climate,
        'Residents': planet.residents,
        isFavorite: false,
        type: 'planets'
      };
      return newPlanet;
    });
    return cleanArray;
  }

  updateState(array) {
    const oldState = this.state.appArray.slice();
    const newState = [...oldState, ...array];
    this.setState({ appArray: newState});
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
          fetch(personPlaceOrThing.Homeworld)
            .then(response => response.json())
            .then(world => {
              personPlaceOrThing.Homeworld = world.name;
              personPlaceOrThing.Population = world.population;
              return personPlaceOrThing;
            })
            .then(personPlaceOrThing => {
              fetch(personPlaceOrThing.Species)
                .then(response => response.json())
                .then(species => {
                  personPlaceOrThing.Species = species.name;
                  return personPlaceOrThing;
                });
            });
        }
        if (type === 'planets') {
          const allResidents = personPlaceOrThing.Residents.map(residentAPI => {
            return fetch(residentAPI)
              .then(response => response.json());
          });
          Promise.all(allResidents)
            .then(residents => {
              personPlaceOrThing.Residents = residents.map(resident => resident.name);
              return personPlaceOrThing;
            });
        }
        return personPlaceOrThing;
      })).then(finalData => this.updateState(finalData));
  }

  componentDidMount() {
    // const helper = new Helper();
    // helper.getData('people')
    this.fetchList('vehicles');
    this.fetchList('planets');
    this.fetchList('people');
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

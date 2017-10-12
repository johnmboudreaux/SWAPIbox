const fetchList = (type) => {
  return fetch(`https://swapi.co/api/${type}/`)
    .then(returnedData => returnedData.json())
    .then(group => setType(group, type))
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
            personPlaceOrThing.Residents = residents.map(
              resident => resident.name
            );
            return personPlaceOrThing;
          });
      }
      return personPlaceOrThing;
    }));
};

const setType = (group, type) => {
  let newGroup = [];
  if (type === 'people') {
    newGroup = cleanPeopleData(group);
  }
  if (type === 'planets') {
    newGroup = cleanPlanetsData(group);
  }
  if (type === 'vehicles') {
    newGroup = cleanVehiclesData(group);
  }
  return newGroup;
}

const cleanVehiclesData = (arrayOfVehicles) => {
  const rawArray = arrayOfVehicles.results;
  const cleanArray = rawArray.map((vehicle, i) => {
    const newVehicle = {
      name: vehicle.name,
      'Model': vehicle.model,
      'Vehicle Class': vehicle.vehicle_class,
      'Passengers': vehicle.passengers,
      isFavorite: false,
      type: 'vehicles',
      id: performance.now() + i
    };
    return newVehicle;
  });
  return cleanArray;
};

const cleanPeopleData = (arrayOfPeople) => {
  const rawArray = arrayOfPeople.results;
  const cleanArray = rawArray.map((person, i )=> {
    const newPerson = {
      name: person.name,
      'Homeworld': person.homeworld,
      'Species': person.species[0],
      'Population': 0,
      isFavorite: false,
      type: 'people',
      id: performance.now() + i
    };
    return newPerson;
  });
  return cleanArray;
};

const cleanPlanetsData = (arrayOfPlanets) => {
  const rawArray = arrayOfPlanets.results;
  const cleanArray = rawArray.map((planet, i) => {
    const newPlanet = {
      name: planet.name,
      'Terrain': planet.terrain,
      'Poplulation': planet.population,
      'Climate': planet.climate,
      'Residents': planet.residents,
      isFavorite: false,
      type: 'planets',
      id: performance.now() + i
    };
    return newPlanet;
  });
  return cleanArray;
};


module.exports = {
  fetchList,
  cleanVehiclesData,
  cleanPeopleData,
  cleanPlanetsData
};

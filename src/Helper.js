export default class Helper {
  constructor() {

  }

  getData(path) {
    return fetch(`http://swapi.co/api/${path}`, {method: "get"})
      .then(returnedData => returnedData.json());
  }

}

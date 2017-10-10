export default class Helper {
  constructor() {

  }

  getData(path) {
    return fetch(`https://swapi.co/api/${path}`, {method: "get"})
      // .then(returnedData => returnedData.json())
      .then(data => console.log(data))
  }

}

export default class Helper {
  constructor() {

  }

  getData() {
    // let thething = new Promise((resolve, reject) => {
    //
    // })
    return fetch("http://swapi.co/api/people", {method: "get"})
      .then(returnedData => returnedData.json())
      .then(data => console.log(data));
  }

}

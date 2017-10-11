import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import Welcome from '../Welcome/Welcome';
// import Helper from '../Helper';
import { Route } from 'react-router';
import { fetchList } from '../Helper.js';

class App extends Component {
  constructor() {
    super();
    this.state= {
      appArray: []
    };
    this.getDataForRoute = this.getDataForRoute.bind(this);
  }

  updateState() {
    const daStuffs = [
      fetchList('vehicles'),
      fetchList('planets'),
      fetchList('people')
    ];
    Promise.all(daStuffs)
      .then(everything => {
        const newEverything = everything.reduce( (accum, aThingOfThings) => {
          return [...accum, ...aThingOfThings];
        }, []);
        const newState = [...this.state.appArray, ...newEverything];
        this.setState({
          appArray: newState
        });
      });
  }

  componentDidMount() {
    this.updateState();
  }

  getDataForRoute(route) {
    return this.state.appArray.filter( personPlaceOrThing => {
      return personPlaceOrThing.type === route;
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/"
          render={() =>
            <Welcome scroll='' />
          }
        />
        <Route exact path="/people"
          render={() =>
            <CardContainer cardData={this.getDataForRoute('people')}/>
          }
        />
        <Route exact path="/planets"
          render={() =>
            <CardContainer cardData={this.getDataForRoute('planets')}/>
          }
        />
        <Route exact path="/vehicles"
          render={() =>
            <CardContainer cardData={this.getDataForRoute('vehicles')}/>
          }
        />
      </div>
    );
  }
}

export default App;

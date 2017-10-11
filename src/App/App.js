import React, { Component } from 'react';
import Header from '../Header/Header';
import CardContainer from '../CardContainer/CardContainer';
import { Route } from 'react-router';
import { fetchList } from '../Helper.js';

class App extends Component {
  constructor() {
    super();
    this.state= {
      appArray: []
    };
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

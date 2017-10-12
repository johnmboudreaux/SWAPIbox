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
      appArray: [],
      pageNumber: 1
    };
    this.getDataForRoute = this.getDataForRoute.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.handleLoadMore = this.handleLoadMore.bind(this);
  }

  toggleFavorite(id) {
    const oldState = [...this.state.appArray];
    const newState = oldState.map(item => {
      if (item.id === id) {
        item.isFavorite = !item.isFavorite;
      }
      return item;
    });
    this.setState({appArray: newState});
  }

  handleLoadMore() {
    this.updateState(this.state.pageNumber + 1);
    this.setState({
      pageNumber: this.state.pageNumber + 1
    });
  }

  updateState() {
    const daStuffs = [
      fetchList('people'),
      fetchList('planets'),
      fetchList('vehicles')
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
        {
          this.state.appArray[0] &&
        <Route exact path="/people"
          render={() =>
            <CardContainer
              handleLoadMore={this.handleLoadMore} cardData={this.getDataForRoute('people')} toggleFavorite={this.toggleFavorite}/>
          }
        />
        }

        <Route exact path="/planets"
          render={() =>
            <CardContainer
              handleLoadMore={this.handleLoadMore} cardData={this.getDataForRoute('planets')} toggleFavorite={this.toggleFavorite}/>
          }
        />
        <Route exact path="/vehicles"
          render={() =>
            <CardContainer
              handleLoadMore={this.handleLoadMore} cardData={this.getDataForRoute('vehicles')} toggleFavorite={this.toggleFavorite}/>
          }
        />

      </div>


    );
  }
}

export default App;

import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';
import {
  mockFilms,
  mockPeople,
  mockPlanets,
  mockVehicles,
  mockSpecies,
  mockPerson,
  mockPlanet
} from '../_mock/mockData';


describe('User intergration test', () => {
  beforeEach(() => {
    fetchMock.get('https://swapi.co/api/films/', {
      status: 200,
      body: mockFilms
    });
    fetchMock.get('https://swapi.co/api/people/', {
      status: 200,
      body: mockPeople
    });
    fetchMock.get('https://swapi.co/api/planets/', {
      status: 200,
      body: mockPlanets
    });
    fetchMock.get('https://swapi.co/api/vehicles/', {
      status: 200,
      body: mockVehicles
    });

    fetchMock.get('https://enzymeSucks.com/mockData/api/planets/1/', {
      status: 200,
      body: mockPlanet
    });
    fetchMock.get('https://enzymeSucks.com/mockData/api/species/1/', {
      status: 200,
      body: mockSpecies
    });
    fetchMock.get('https://enzymeSucks.com/mockData/api/people/5/', {
      status: 200,
      body: mockPerson
    });
  });
  afterEach(() => {
    console.log(fetchMock.calls());
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });
  it('should render Header and Welcome components', () => {
    // const wrapper = shallow(<App />);
    //
    // expect(wrapper.find('Header').length).toEqual(1);
    // expect(wrapper.find('Welcome').length).toEqual(1);
  });

  // it('Should load a dataSet by default to state', () => {
  //   renderedApp = shallow(<App />);
  //   const stateObjectData =  renderedApp.state().districts;
  //
  //   expect(typeof stateObjectData).toBe('object');
  //   expect(stateObjectData).toMatchSnapshot();
  // });
  //
  // it('Should render 181 cards for each district in Colorado by default', () => {
  //   renderedApp = mount(<App />);
  //
  //   expect(renderedApp.find('Card').length).toEqual(181);
  // });
  //
  // it('Should allow user to filter for specific distrcit using a serach', () => {
  //   const renderedApp = mount(<App />);
  //   // const stateObjectData =  renderedApp.state().districts;
  //   // const searchControl = renderedApp.find('Controls')
  //   // const searchInput = renderedApp.find('.search-input');
  //   const card = renderedApp.find('Card');
  //
  //   expect(card.length).toEqual(181);
  //
  //   // searchInput.simulate('change', { target: { value: 'aca' } });
  //
  //   // console.log(searchInput.debug());
  //
  //   // expect(card.length).toEqual(1);
  // });
});

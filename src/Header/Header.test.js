import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';



describe('Header', () => {
  it('should render correctly and match the snapshot', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Header favCount={mockFunc} />);

    expect(wrapper).toMatchSnapshot();
  })
})





import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from './Button';



describe('Button', () => {
  it('should render correctly and match the snapshot', () => {
    const mockFunc = jest.fn();
    const wrapper = shallow(<Button onClick={mockFunc} />);

    expect(wrapper).toMatchSnapshot();
  })
})
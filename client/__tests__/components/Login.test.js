import React from 'react';
import {shallow, render} from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from '../../components/Login/index.js';

// describe what we are testing
describe('<Login />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Login />);
      //const component = wrapper.dive();

      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});

import React from 'react';
import {shallow} from 'enzyme';
jest.mock("../../components/Login/index.css",()=>'./index.css')
import Login from '../../components/Login/index.js';

// describe what we are testing
describe('<Login />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Login />);
      //const component = wrapper.dive();

      expect(wrapper).toBeTruthy()
    });
  });
});

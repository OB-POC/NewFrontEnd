import React from 'react';
import {shallow} from 'enzyme';
jest.mock("../../components/home/style.css",()=>'./style.css');
jest.mock("../../components/headernew/style.css",()=>'./style.css');
jest.mock("../../components/sidebar/style.css",()=>'./style.css');
jest.mock("../../components/banner/style.css",()=>'./style.css');
jest.mock("../../components/Balances/style.css",()=>'./style.css');
import Home from '../../components/home/index.js';

// describe what we are testing
describe('<Home />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Home />);
      expect(wrapper).toBeTruthy()
    });
  });
});

import React from 'react';
import {shallow} from 'enzyme';
jest.mock('../setup/sessionStorage.js');
jest.mock("../../components/Payout/style.css",()=>'./style.css');
jest.mock("../../components/headernew/style.css",()=>'./style.css');
jest.mock("../../components/sidebar/style.css",()=>'./style.css');
// beforeEach(() => {
//   console.log('here');
//            global.sessionStorage = jest.genMockFunction();
//            global.sessionStorage.setItem = jest.genMockFunction();
// global.sessionStorage.getItem = jest.fn((a) => 'alice')
//
//
//   });
import Payout from '../../components/Payout/index.js';

// describe what we are testing
describe('<Payout />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Payout />);
      expect(wrapper).toBeTruthy()
    });
  });
});

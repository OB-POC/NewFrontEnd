import React from 'react';
import {shallow} from 'enzyme';

jest.mock("../../components/offer/style.css",()=>'./style.css');
jest.mock("../../components/headernew/style.css",()=>'./style.css');
jest.mock("../../components/sidebar/style.css",()=>'./style.css');
// jest.mock("../../components/banner/style.css",()=>'./style.css');
// jest.mock("../../components/Balances/style.css",()=>'./style.css');
jest.mock('react-toastify/dist/ReactToastify.css',()=>'ReactToastify.css');
import Offer from '../../components/offer/index.js';

// describe what we are testing
describe('<Offer />', () => {
  describe('render()', () => {
    test('renders the component', () => {
      const wrapper = shallow(<Offer />);
      expect(wrapper).toBeTruthy()
    });
  });
});

import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';

import Balance from './';

describe('<Balances> Component', function () {
    it('should have a GraphModal component', function () {
      const wrapper = shallow(<Balance/>);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find('GraphModal')).to.have.length(1);
    });

    it('should have two svg icons in the template', function () {
      const wrapper = shallow(<Balance onClick={clickFn}/>);

      expect(wrapper.find('svg')).to.have.length(2);
    });
});

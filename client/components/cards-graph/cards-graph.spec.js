import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import GraphModal from './';
const onHide = jest.fn();

describe('<GraphModal> Component', function () {
    it('should have a GraphModal component', function () {
      const wrapper = shallow(<GraphModal/>);
      expect(wrapper.find('GraphModal')).to.have.length(1);
    });
  
    it('should have two svg icons in the template', function () {
      const wrapper = shallow(<GraphModal/>);
      expect(wrapper.find('Modal')).to.have.length(1);
      expect(wrapper.find('ReactFC')).to.have.length(1);
    });

    it('', function() {
        const component = shallow(<GraphModal onClick={onHide}/>)
        component
            .find('Button')
            .simulate('click');
      
        expect(onHide).toHaveBeenCalled();
    })
  
    it('should have props for data, iscredit, show and onHide', function () {
      const wrapper = shallow(<GraphModal/>);
      expect(wrapper.props().data).to.be.defined;
      expect(wrapper.props().iscredit).to.be.defined;
      expect(wrapper.props().show).to.be.defined;
      expect(wrapper.props().onHide).to.be.defined;
    });  
});

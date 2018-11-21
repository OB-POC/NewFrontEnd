import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { expect } from 'chai';

import GraphModal from './';
const onHide = jest.fn();

// require variable to send as a props {data as creditData & debitData} -- >
const creditData = [
  {
    accounts: [{
      accountNumber: "XXXXXX XXXXXX6789",
      accountTitle: "Reward Black Credit Card",
      accountType: "CC",
      apr: 37.1,
      availableCredit: "1,200",
      creditLimit: "3,000",
      dueDate: 1543152784817,
      minBalanceDue: 30,
      totalBalanceDue: "1,800"
    }],
    bankId: 'NNaattWWeesstt',
    bankName: 'Natwest'
  },
  {
    accounts: [{
      accountNumber: "XXXXXX XXXXXX7890",
      accountTitle: "2 Years Fixed Reward",
      accountType: "M",
      dueDate: 1543152784817,
      interestRate: 3.3,
      minMonthlyPayment: "800",
      remainingFullTerm: "5Y 3M",
      totalBalanceDue: "50,000"
    }],
    bankId: 'BBaarrccllaayyss',
    bankName: 'Barclays'
  },
];
const debitData = [
  {
    accounts: [{
      accountNumber: "XXXXXX XXXX6789",
      accountTitle: "Every Day Saver",
      accountType: "SB",
      availableBalance: "1,000",
      balance: "4,000",
      interestRate: 0.2,
      minBalance: "1,000",
      standingInst: "2,000"
    }],
    bankId: 'BBaarrccllaayyss',
    bankName: 'Barclays'
  },
  {
    accounts: [{
      accountNumber: "XXXXXX XXXX3222",
      accountTitle: "Easy Saver",
      accountType: "SB",
      availableBalance: "5,000",
      balance: "6,000",
      interestRate: 0.25,
      minBalance: 200,
      standingInst: 800
    }],
    bankId: 'NNaattWWeesstt',
    bankName: 'Natwest'
  }
];

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
        const component = shallow(<GraphModal />);
        component.setProps({onClick: onHide});
        component
            .find('Button')
            .simulate('click');

        expect(onHide).toHaveBeenCalled();
    });

    it('should have props for data, iscredit, show and onHide', function () {
      const wrapper = shallow(<GraphModal/>);
      wrapper.setProps({ data: creditData, iscredit: true, show: true });
      expect(wrapper.props().data).to.be.an('array');
      expect(wrapper.props().iscredit).to.be.a('boolean');
      expect(wrapper.props().show).to.be.a('boolean');
      // expect(wrapper.props().onHide).to.be.defined;
    });

    it('should not carry Mortgage value when credit card is viewed', function() {
      const wrapper = shallow(<GraphModal />);
      wrapper.setProps({ data: creditData, iscredit: true });
      expect(wrapper.state().data).to.have.length(1);
      wrapper.setProps({ data: debitData, iscredit: false});
      expect(wrapper.state().data).to.have.length(2);
    });
});

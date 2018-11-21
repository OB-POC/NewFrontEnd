import React from 'react';
import { mount, shallow, render } from 'enzyme';
import chai from 'chai';

const expectChai = chai.expect;

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
    // First testing is meaningless. Same is implemented in balances component - testing

    // it('should have a GraphModal component', function () {
    //   const wrapper = shallow(<GraphModal/>);
    //   expectChai(wrapper.find('GraphModal')).to.have.length(1);
    // });

    it('should have two svg icons in the template', function () {
      const wrapper = shallow(<GraphModal/>);
      expectChai(wrapper.find('Modal')).to.have.length(1);
      expectChai(wrapper.find('ReactFC')).to.have.length(1);
    });

    it('should call onHide function while closing graph modal', function() {
        const component = shallow(<GraphModal />);
        component.setProps({onHide: onHide});
        component
            .find('Button')
            .simulate('click');

        expect(onHide).toHaveBeenCalled(); // using jest mock functions
    });

    it('should have props for data, iscredit, show and onHide', function () {
      const wrapper = shallow(<GraphModal/>);
      wrapper.setProps({ data: creditData, iscredit: true, show: true });
      expectChai(wrapper.props().data).to.be.an('array');
      expectChai(wrapper.props().iscredit).to.be.a('boolean');
      expectChai(wrapper.props().show).to.be.a('boolean');
      // expectChai(wrapper.props().onHide).to.be.defined;
    });

    it('should not carry Mortgage value when credit card is viewed', function() {
      const wrapper = shallow(<GraphModal />);
      wrapper.setProps({ data: creditData, iscredit: true });
      expectChai(wrapper.state().data).to.have.length(1);
      wrapper.setProps({ data: debitData, iscredit: false});
      expectChai(wrapper.state().data).to.have.length(2);
    });
});

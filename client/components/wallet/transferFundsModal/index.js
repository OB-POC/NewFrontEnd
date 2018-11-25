import React from 'react';
import './style.css';
import { Button, Header, Icon, Modal, Table } from 'semantic-ui-react'

export default class CustomModal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        modalOpen: false,
        standingInstructions: props.standingInstructions
        }
    }
    componentWillReceiveProps(newProps){
      this.setState({
        standingInstructions: newProps.standingInstructions
      })
    }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })
    sortByAmountClick(param){
      console.log(this.state[param]);
      if(param == 'value'){
      if(this.state[param])
      {
        this.state.standingInstructions.sort((a,b) => a[param] - b[param])
        this.setState({
          [param]: !this.state[param],
          standingInstructions: this.state.standingInstructions

        })
      }
      else {
        this.state.standingInstructions.sort((a,b) => b[param] - a[param])
        this.setState({
          [param]: !this.state[param],
          standingInstructions: this.state.standingInstructions
        })
      }
    }
    else{
      if(this.state[param])
      {
        this.state.standingInstructions.sort((a,b) => new Date(a[param]) - new Date(b[param]))
        this.setState({
          [param]: !this.state[param],
          standingInstructions: this.state.standingInstructions

        })
      }
      else {
        this.state.standingInstructions.sort((a,b) => new Date(b[param]) - new Date(a[param]))
        this.setState({
          [param]: !this.state[param],
          standingInstructions: this.state.standingInstructions
        })
      }
    }
  }
      render(){
        console.log(this.props.standingInstructions,'standingInstructions');
        const { standingInstructions } = this.state
        const standingInstructionsTable = standingInstructions.map((val,ind) => {
           return ( <Table.Row error = {!val.canClear}>
                         <Table.Cell style = {{paddingLeft:'42px'}} >{val.name}</Table.Cell>
                         <Table.Cell>{val.value}</Table.Cell>
                         <Table.Cell>{val.schdDate} {(ind==2)?<Icon name='attention' />:""}</Table.Cell>
                       </Table.Row>)
         })
          return(
            <Modal
            trigger={<span onClick={this.handleOpen} className = "View-details" style = {{cursor:'pointer'}}>View details  <i class="fas fa-arrow-right"></i></span>}
            size='small'
            style = {{margin:'auto',height:'54.5vh',marginTop: 'auto',backgroundColor: '#f5f6fa',padding:'8.7vh 6.7vh',borderRadius:'14px'}}
              open={this.state.modalOpen}>
              <div><Icon name='close' onClick = {this.handleClose}/></div>
            <p className = 'Payment-instructions'>Payment instructions</p>
            <Table className='standingInstTable'>
              <Table.Header>
                <Table.Row style = {{backgroundColor : '#c6cbd4'}}>
                  <Table.HeaderCell style = {{paddingLeft:'42px'}}>Standing Instructions</Table.HeaderCell>
                  <Table.HeaderCell onClick = {this.sortByAmountClick.bind(this, 'value')}>
                  Amount Due (£) { this.state['value'] ?
                  <i style = {{cursor:'pointer'}} class="fas fa-long-arrow-alt-up"></i> :
                  <i style = {{cursor:'pointer'}} class="fas fa-long-arrow-alt-down"></i> }
                  </Table.HeaderCell>
                  <Table.HeaderCell onClick = {this.sortByAmountClick.bind(this, 'schdDate')}>
                  Date (mm-dd-yyyy) { this.state['schdDate'] ?
                  <i style = {{cursor:'pointer'}} class="fas fa-long-arrow-alt-up"></i> :
                  <i style = {{cursor:'pointer'}} class="fas fa-long-arrow-alt-down"></i> }
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            <Table.Body>
            {standingInstructionsTable}
          </Table.Body>
        </Table>
          </Modal>
          );
      }
  }

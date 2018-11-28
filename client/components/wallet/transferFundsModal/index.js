import React from 'react';
import './style.css';
import { Button, Header, Icon, Modal, Table } from 'semantic-ui-react'

export default class CustomModal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        modalOpen: false,
        showBanner:"none"
        }
    }

    handleOpen = () => this.setState({ modalOpen: true },function(){
      console.log("handleopen");
      setTimeout(function(){
        console.log("handleopen,settimeout");
        this.setState({showBanner:""})
      }.bind(this),1000)
    })
    handleClose = () => this.setState({ modalOpen: false,showBanner:"none" })
      render(){
        console.log(this.props.standingInstructions,'standingInstructionss');
        const { standingInstructions } = this.props
        const standingInstructionsTable = standingInstructions.map((val,ind) => {
           return ( <Table.Row error = {(ind==2)?true:false}>
                         <Table.Cell style = {{paddingLeft:'42px'}} >{val.name}</Table.Cell>
                         <Table.Cell>{val.schdDate}</Table.Cell>
                         <Table.Cell>{val.value} {(ind==2)?<Icon name='attention' />:""}</Table.Cell>
                       </Table.Row>)
         })
          return(
            <Modal
            trigger={<span onClick={this.handleOpen} className = "View-details" style = {{cursor:'pointer'}}>View details  <i class="fas fa-arrow-right"></i></span>}
            size='small'
            style = {{margin:'auto',height:'54.5vh',marginTop: 'auto',backgroundColor: '#f5f6fa',padding:'8.7vh 6.7vh',borderRadius:'14px',overflow: 'visible',
             position: 'absolute',
    bottom: '123px'}}
              open={this.state.modalOpen}>
              <div><Icon name='close' onClick = {this.handleClose}/></div>
            <p className = 'Payment-instructions'>Payment instructions</p>
            <Table className='standingInstTable'>
              <Table.Header>
                <Table.Row style = {{backgroundColor : '#c6cbd4'}}>
                  <Table.HeaderCell style = {{paddingLeft:'42px'}}>Standing Instructions</Table.HeaderCell>
                  <Table.HeaderCell>Amount Due (£) <i style = {{cursor:'pointer'}} class="fas fa-long-arrow-alt-up"></i> </Table.HeaderCell>
                  <Table.HeaderCell>Date <i style = {{cursor:'pointer'}} class="fas fa-long-arrow-alt-down"></i></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
            <Table.Body>
            {standingInstructionsTable}
          </Table.Body>
        </Table>
        <div style = {{  width: '578px',
          height: '250px',
          objectFit: 'contain',backgroundImage : 'url("./images/img-transfer-funds.png")',backgroundRepeat:'round',display:this.state.showBanner,position: 'relative',animation: 'fadeIn 1s'}}>
          <div className = 'Rectangle-5'>
          TRANSFER FUNDS &nbsp;&nbsp;<i class="fas fa-arrow-right"></i>
          </div>
        </div>
          </Modal>
          );
      }
  }

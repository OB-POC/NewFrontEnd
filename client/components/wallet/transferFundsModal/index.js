import React from 'react';
import './style.css';
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class CustomModal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        modalOpen: false
        }
    }
    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })
      render(){
          return(
            <Modal
            trigger={<span onClick={this.handleOpen} className = "View-details" style = {{cursor:'pointer'}}>View details  <i class="fas fa-arrow-right"></i></span>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            centered ={true}
            size='small'
            >
                <Modal.Content>
                <Button color='green' onClick={this.handleClose} inverted>
                    <Icon name='checkmark' /> Got it
                </Button>
                </Modal.Content>
                
            </Modal>
          );
      }
  }
  
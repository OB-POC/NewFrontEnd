import React from 'react';
import './style.css';
import { Button, Header, Icon, Modal, Table, ListHeader } from 'semantic-ui-react'
import SuccessModal from './success'
export default class CustomModal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        modalOpen: false,
        linesArr : []
        }
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })
      render(){
        console.log(this.props.transferFundsButton,"transferFundsButton...",this.props.children);
          return(
         <Modal
            trigger={<div className = 'Rectangle-5'>
            TRANSFER FUNDS &nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
            </div>}
            onOpen = {this.handleOpen}
            size='small'
            style = {{margin:'auto',height:'70.5vh',marginTop: 'auto',backgroundColor: '#f5f6fa',padding:'8.7vh 6.7vh',borderRadius:'14px'}}
              open={this.state.modalOpen} >
              <div><Icon name='close' onClick = {this.props.handleClose}/></div>
            <p className = 'Payment-instructions'>Transfer Funds</p>

            <p className="transfer-funds-modal-message">Allow Optima to transfer £ 100 from Munzo account to RBS?</p>
            <div  style={{display:'flex',justifyContent:'flex-start',marginTop:'20px',marginBottom:'30px'}}>
                <div className='from-card' style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'151px',padding:'10px'}}>
                    <img src = {"./images/img-mozo.png"||"./images/cards/debit/"+{}+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                    <p className='bank-name' style={{marginRight:'40px',marginBottom:'0px'}}>Monzo</p>
                    <p className='amount-transfer'>£ 100</p>
                </div>
                <div className='to-card' style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
                <img src = {"./images/img-mozo.png"||"./images/cards/debit/"+{}+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                <p className='bank-name'>Monzo</p>
                </div>
            </div>
            <div style={{display:'flex',justifyContent:'flex-start'}}>
                <SuccessModal />
                <div  onClick={this.handleClose} className='cancel-button' style={{display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer',border:'1px solid #4a4a4a'}}>
                <p className='yes-text-style' style={{color:'#4a4a4a',}}>CANCEL</p>
                </div>
            </div>
          </Modal>
          );
      }
  }

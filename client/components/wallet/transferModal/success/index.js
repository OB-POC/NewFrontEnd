import React from 'react';
import './style.css';
import { Button, Header, Icon, Modal, Table, ListHeader } from 'semantic-ui-react'

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
            trigger={<div className='yes-button' style={{display:'flex',justifyContent:'center',alignItems:'center',marginRight:'20px',cursor:'pointer'}}>
<p className='yes-text-style' style={{color:'#FFFFFF'}}>YES</p>
</div>}
            size='small'
            style = {{height:'50vh',margin:'auto',boxShadow: 'none',backgroundColor:'transparent',marginTop:'auto !important',overflow:'visible'}}>
            <div style = {{backgroundImage :'url("../../../../images/transferSuccess.png")',backgroundRepeat:'round',height: '58%',
    width: '93%',
    margin: 'auto'}}>
            <p className = 'successfullText'>Funds transferred successfully!</p>
            <div style = {{}}>OK</div>
            </div>
            <div style = {{backgroundImage :'url("../../../../images/hazzle.png")',backgroundRepeat:'round',    height: '54%',
    width: '726px'}}>
            sdfsdf</div>
          </Modal>
          );
      }
  }

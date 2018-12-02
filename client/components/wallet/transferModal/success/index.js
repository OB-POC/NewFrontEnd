import React from 'react';
import './style.css';
import { Button, Header, Icon, Modal, Table, ListHeader } from 'semantic-ui-react'

export default class CustomModal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        modalOpen: false,
        linesArr : [],
        showHazzleFreeModal : false
        }
    }
    handleOkClick = () => this.setState({ showHazzleFreeModal: true })
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
    margin: 'auto',
  padding : '30px 0 0 58px'}}>
            <p className = 'successfullText'>Funds transferred successfully!</p>
            <div className = 'transferOkButton' onClick = {this.handleOkClick}>OK</div>
            </div>
            <div style = {{backgroundImage :'url("../../../../images/hazzle.png")',backgroundRepeat:'round',    height: '54%',
    width: '726px',padding: '38px 0 0 82px',display:(!this.state.showHazzleFreeModal)?"none":""}}>

              <p className = 'hazzleFreeText'>Alice! <br/>
                Want a hazzle free funds management?
                <br/>
                <br/>
                Let <strong> OPTIMA </strong> do it for you.
              </p>
              <div className = 'showMeHowButton'> SHOW ME HOW <i className="fas fa-arrow-right"></i></div>
              </div>
          </Modal>
          );
      }
  }

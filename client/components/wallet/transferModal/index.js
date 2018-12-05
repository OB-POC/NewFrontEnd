import React from 'react';
import './style.css';
import { Button, Header, Icon, Modal, Table, ListHeader } from 'semantic-ui-react'
import SuccessModal from './success'
export default class CustomModal extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        linesArr : []
        }

    }

    handleOpen = () => {
        this.setState((prevState,props)=>{
            return {
                modalOpen: true,
            }
        },()=>{

                console.log('docs',document.getElementById('fromCard'),document.getElementById('toCard'))

                this.props.siSuggest.senders.map(function(val,i){
                this.setState((prevState,props)=>{
                    console.log(document.getElementById('element-'+i))
                let lineVar1 = new LeaderLine(document.getElementById('element-'+i),document.getElementById('toCard'),{path:'grid',color:'#4a4a4a'})
                document.querySelector(".leader-line").style['z-index'] = '1000';

                // let lineVar2 = new LeaderLine(document.getElementById('fromCard2'),document.getElementById('toCard'),{path:'grid',color:'#4a4a4a'})

                let linesArr = []
                linesArr.push(lineVar1)
                // linesArr.push(lineVar2)

                return {
                    linesArr : linesArr
                }
            })
        }.bind(this))
      })
    }
    handleClose = () => {
        this.setState((prevState,props)=>({
            modalOpen : false,
            linesArr : []
        }))
        document.querySelector(".leader-line").remove();
    }

    handleCloseParentModal = () => {
        console.log('modal')
        document.querySelector(".leader-line").remove();
        this.props.handleClose()
    }
      render(){
        console.log(this.state, "state")
          return(
        <Modal
            trigger={
            <div className = 'Rectangle-5'>
            TRANSFER FUNDS &nbsp;&nbsp;<i className="fas fa-arrow-right"></i>
            </div>
            }
            onOpen = {this.handleOpen}
            size='small'
            style = {{margin:'auto',height:'70.5vh',marginTop: 'auto',backgroundColor: '#f5f6fa',padding:'8.7vh 6.7vh',borderRadius:'14px'}}
            open={this.state.modalOpen}
        >
            <div><Icon name='close' onClick = {this.handleCloseParentModal}/></div>
            <p className = 'Payment-instructions'>Transfer Funds</p>
            <p className="transfer-funds-modal-message">Allow Optima to transfer £ {this.props.siSuggest.senders[0].amount} from {this.props.siSuggest.senders[0].senderBank} account to {this.props.siSuggest.receiver.receiverBank}?</p>
            <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginTop:'20px',marginBottom:'30px'}}>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginRight:'151px',padding:'10px'}}>
                {this.props.siSuggest.senders.map((val,i) =>{
                    console.log(val,i);
                return(
                    <div id={'element-'+i} className='from-card1' style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px',marginTop:'10px',marginBottom:'10px'}}>
                        <img src = {"./images/img-mozo.png"||"./images/cards/debit/"+{}+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                        <p className='bank-name' style={{marginRight:'40px',marginBottom:'0px'}}>{val.senderBank}</p>
                        <p className='amount-transfer'>£ {val.amount}</p>
                    </div>
                    )}
                )}
                </div>
                    <div  id="toCard" className='to-card1' style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
                        <img src = {"./images/img-mozo.png"||"./images/cards/debit/"+{}+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                        <p className='bank-name' style={{marginRight:'40px',marginBottom:'0px'}}>{this.props.siSuggest.receiver.receiverBank}</p>
                    </div>

            </div>
            <div  style={{display:'flex',justifyContent:'flex-start'}}>
                <SuccessModal siSuggest = {this.props.siSuggest}/>
                <div  onClick={this.handleClose} className='cancel-button' style={{display:'flex',justifyContent:'center',alignItems:'center',cursor:'pointer',border:'1px solid #4a4a4a'}}>
                <p className='yes-text-style' style={{color:'#4a4a4a',}}>CANCEL</p>
                </div>
            </div>
          </Modal>
          );
      }
  }

import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Header from '../../headernew'
import Sidebar from '../../sidebar'

export default class ConfirmManagePayment extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      debitData : [],
      creditData : [],
      accSumary: {}
    }
  }

  handleChange = (e, { value }) => this.setState({ value })

  onCancelClick = () => {
    this.setState({
      value: ''
    })
  }
  onPreviousClick = () => {
    this.setState({
      value: ''
    })
  }
  onNextClick = () => {

    this.props.history.push('/wallet');
    console.log('Next');
  }

    render(){
      const {senders, receiver} = this.props.location.state
        return(
          <div className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.accSumary.username} history = {this.props.history}/>
            <div style = {{display:"flex"}}>
                <Sidebar activeComponent = "wallet"/>
              <div className='main-content' style = {{backgroundColor:"#f5f6fa",width:"94.5%",paddingBottom:'20px'}}>
                <div>
                <h1 style = {{fontWeight: '300',marginTop:'20PX'}}>My Accounts</h1>
                </div>
                <div className = 'pool-funds-modal' style={{backgroundColor:'#2d8259'}}>
                {/* style={{objectFit: 'contain',backgroundImage : 'url("./images/hurray.png")',backgroundRepeat:'round'}} */}

                    <Link to='/wallet'>
                    <div className = 'closeIcon' tabIndex = '1'>
                      <img src = {'images/optimizings/close-icon.png'} style={{backgroundColor:'#2d8259'}} />
                    </div>
                    </Link>
                     <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                         <img src={'../../../images/hurray.png'} style={{height:'168px',width:'244px',marginTop:'100px'}}/>
                     </div>
                     <div>
                         <div className='success-text' style={{marginTop:'60px'}}>£ {senders[0].amount} has been transferred successfully to your {receiver.receiverBank} account !</div>
                     </div>
                     <div className='pool-line'></div>
                     <div className = "flex-container-btn">
                      <div className="flex-item-next-btn" onClick = {this.onNextClick}>DONE</div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

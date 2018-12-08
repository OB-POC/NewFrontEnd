import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Header from '../../headernew'
import Sidebar from '../../sidebar'
import Services from '../../../services'

export default class PoolingFromCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      fromCards : [],
      toCards : [],
      accSumary: {},
      linesArr : []
    }
  }

  componentDidMount(){

    this.setState((prevState,props)=>{
      return {
        fromCards:this.props.location.state.fromCards,
        toCards : this.props.location.state.toCards
      }
    },()=>{
      this.state.fromCards.map(function(val,i){
        this.setState((prevState,props)=>{
        let lineVar1 = new LeaderLine(document.getElementById('element-'+i),document.getElementById('toCard'),{path:'grid',color:'#4a4a4a'})
        // let lineVar2 = new LeaderLine(document.getElementById('fromCard2'),document.getElementById('toCard'),{path:'grid',color:'#4a4a4a'})
        document.querySelector(".leader-line").style['z-index'] = '1000';

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

  componentWillUnmount(){
    var lines = this.state.linesArr
    lines.map(function(data,i){
        data.remove()
    })
    if(document.querySelector(".leader-line"))
    document.querySelector(".leader-line").remove();

  }

  onNextClick = () => {
      let account = this.props.location.state.toCards[0].accounts[0]
      const amount = this.props.location.state.fromCards.reduce((acc,cur) => (cur.accounts[0].balance - cur.accounts[0].minBalance - cur.accounts[0].standingInst + acc),0)
      const bankName = this.props.location.state.toCards[0].bankName

      var token = sessionStorage.getItem("token");
      var obj = {senders: [], receiver: {}}
      this.props.location.state.fromCards.forEach((bank)=>{
        obj['senders'].push({senderBank: bank.bankName})
      })
      obj['receiver'] = {receiverBank: this.props.location.state.toCards[0].bankName}
      var qData = {token: token,
        data: obj
      }
      console.log(obj,"obj");
      Services.poolFunds(qData, function(data){
          console.log(data)
     }.bind(this),function(err){
         console.log(err);
     })

      this.props.history.push({pathname:'/poolingSucceed',state:{amount,bankName}});
  }

    render(){
        console.log(this.props.location.state);
        return(
          <div className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header username = {this.state.accSumary.username} history = {this.props.history}/>
            <div style = {{display:"flex"}}>
                <Sidebar activeComponent = "wallet"/>
              <div className='main-content' style = {{backgroundColor:"#f5f6fa",width:"94.5%",paddingBottom:'20px'}}>
                <div>
                <h1 style = {{fontWeight: '300',marginTop:'20PX'}}>My Accounts</h1>
                </div>
                <div className = 'pool-funds-modal'>
                    <Link to='/wallet'>
                    <div className = 'closeIcon' tabIndex = '1'>
                      <img src = {'images/optimizings/close-icon.png'} />
                    </div>
                    </Link>
                    <div className ='pool-header'>
                        Confirm
                    </div>
                    <div className='pool-subheader'>Click 'Next' to pool your funds</div>
                    <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginTop:'20px',marginBottom:'30px'}}>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginRight:'151px',padding:'10px'}}>
                        {this.props.location.state.fromCards.map((val,i) =>{
                            console.log(val);
                        return(
                            <div id={'element-'+i} className='pool-from-card' style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px',marginTop:'10px',marginBottom:'10px'}}>
                                <img src = {"./images/cards/debit/"+val.bankName+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                                <p className='bank-name' style={{marginRight:'40px',marginBottom:'0px'}}>{val.bankName}</p>
                                <p className='amount-transfer'>£  {val.accounts[0].balance - val.accounts[0].minBalance - val.accounts[0].standingInst}</p>
                            </div>
                            )}
                        )}
                        </div>
                            <div  id="toCard" className='pool-from-card' style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
                                <img src = {"./images/cards/debit/"+this.props.location.state.toCards[0].bankName+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                                <p className='bank-name' style={{marginRight:'40px',marginBottom:'0px'}}>{this.props.location.state.toCards[0].bankName}</p>
                                <p className='amount-transfer'>£ {this.props.location.state.toCards[0].accounts[0].balance}</p>
                            </div>

                    </div>
                     <div className='pool-line'></div>
                     <div className = "flex-container">
                      <Link to='/wallet'><div className="flex-item" onClick = {this.onCancelClick}>CANCEL</div></Link>
                      <Link to='/poolfrom'><div className="flex-item1"
                      style = {{marginLeft: '310px', display: (this.state.value != '') ? '' : 'none'}}>Edit ?</div></Link>
                      <div className="flex-item1" onClick = {this.onNextClick}>NEXT</div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

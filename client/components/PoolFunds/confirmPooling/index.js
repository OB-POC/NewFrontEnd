import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import Header from '../../headernew'
import Sidebar from '../../sidebar'

export default class PoolingFromCard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      modalOpen: true,
      debitData : [],
      creditData : [],
      accSumary: {},
      linesArr : []
    }
  }

  componentDidMount(){
    this.setState((prevState,props)=>{
        let lineVar1 = new LeaderLine(document.getElementById('fromCard1'),document.getElementById('toCard'),{path:'grid',color:'#4a4a4a'})
        let lineVar2 = new LeaderLine(document.getElementById('fromCard2'),document.getElementById('toCard'),{path:'grid',color:'#4a4a4a'})

        let linesArr = []
        linesArr.push(lineVar1)
        linesArr.push(lineVar2)

        return {
            linesArr : linesArr
        }
        
    })
  }

  componentWillUnmount(){
    var lines = this.state.linesArr
    lines.map(function(data,i){
        data.remove()
    })
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
    
      this.props.history.push('/poolingSucceed');
    

  }

    render(){
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
                         Pool my funds
                    </div>
                    <div className='pool-subheader'>Select accounts to which you want to pool your funds</div>
                    <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',marginTop:'20px',marginBottom:'30px'}}>
                        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginRight:'151px',padding:'10px'}}>
                            <div id="fromCard1" className='from-card' style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px',marginTop:'10px',marginBottom:'10px'}}>
                                <img src = {"./images/img-mozo.png"||"./images/cards/debit/"+{}+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                                <p className='bank-name' style={{marginRight:'40px',marginBottom:'0px'}}>Monzo</p>
                                <p className='amount-transfer'>£ 100</p>
                            </div>
                            <div id="fromCard2" className='from-card' style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
                                <img src = {"./images/img-mozo.png"||"./images/cards/debit/"+{}+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                                <p className='bank-name' style={{marginRight:'40px',marginBottom:'0px'}}>Monzo</p>
                                <p className='amount-transfer'>£ 100</p>
                            </div>
                        </div>
                        <div  id="toCard" className='from-card' style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
                            <img src = {"./images/img-mozo.png"||"./images/cards/debit/"+{}+"@3x.png"} style={{width:'81px',height:'51px',marginRight:'14px'}}/>
                            <p className='bank-name' style={{marginRight:'40px',marginBottom:'0px'}}>Monzo</p>
                            <p className='amount-transfer'>£ 100</p>
                        </div>
                    </div>
                     <div className='pool-line'></div>
                     <div className = "flex-container">
                      <Link to='/wallet'><div className="flex-item" onClick = {this.onCancelClick}>CANCEL</div></Link>
                      <div className="flex-item1" onClick = {this.onPreviousClick}
                      style = {{marginLeft: '310px', display: (this.state.value != '') ? '' : 'none'}}>Previous</div>
                      <div className="flex-item1" onClick = {this.onNextClick}>NEXT</div>
                    </div>
                </div>            
            </div>
            </div>
            </div>
        );
    }
}

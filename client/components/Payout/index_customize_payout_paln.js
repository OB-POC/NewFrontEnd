import React from 'react';
import './style.css';
import Header from '../headernew'
import Sidebar from '../sidebar'
import Services from '../../services'
import ReactLoading from 'react-loading'
import { Dropdown, DropdownMenu, DropdownToggle,DropdownItem } from 'reactstrap';


export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      payOutData: {creditDebitMatch: []},
      username: '',
      lines : [],
      load: true,
      accSumary : {},
      editablePaymentRow : undefined,
      dropdownOpen: false,
      creditDebitIndexes : [],
      amountEntered : 0,
      customizedCreditDebitMatch : [],
      allSavingsData : [
        {
          bankName: "HSBC",
          accountType: "PCA",
          accountTitle: "HSBC Advance bank Account",
          contributingAmount: 0,
          totalAvailableBalance: 2600,
          interestRate: 0.1,
          minBalance : 200
        },
        {
          bankName: "Halifax",
          accountType: "SB",
          accountTitle: "Every Day Saver",
          contributingAmount: 100,
          totalAvailableBalance: 1900,
          interestRate: 0.2,
          minBalance : 1000
        },
        {
          bankName: "Barclays",
          accountType: "SB",
          accountTitle: "Easy Saver",
          contributingAmount: 200,
          afterContributingBalance: 0,
          interestRate: 0.25,
          minBalance : 200
        }
      ]
    }
    this.handleEdit = this.handleEdit.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.toggle = this.toggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this)
    this.handleAmountEntered = this.handleAmountEntered.bind(this)
    this.handleAddNewSavingsCard = this.handleAddNewSavingsCard.bind(this)
  }
  componentWillMount() {
      var token = sessionStorage.getItem("token");
      Services.totalBalancesCall(token, function(data){
          this.setState({accSumary : data});
         // console.log(data)
     }.bind(this),function(err){
        // console.log(err);
     })
      Services.payOutCall(token, function(data){
        let creditDebitIndexes = data.creditDebitMatch.map(function(each,index){
          let dropdownOpen = false
          
          let obj = {
            dropdownOpen : dropdownOpen,
            selectedIndex : 0,
          
          }
          return obj
        })
        let customizedCreditDebitMatch = data.creditDebitMatch.map(function(each,index){
          each.senders = [{
            bankName: "HSBC",
            accountType: "PCA",
            accountTitle: "HSBC Advance bank Account",
            contributingAmount: 0,
            totalAvailableBalance: 2600,
            interestRate: 0.1,
            minBalance : 200
          }]
          return each
        })
          this.setState({payOutData : data,
            creditDebitIndexes : creditDebitIndexes,
            customizedCreditDebitMatch : customizedCreditDebitMatch
          });
          
          this.componentDidMount()
     }.bind(this),function(err){
     })
  }
  componentDidMount(){
    this.setState({
      username: sessionStorage.getItem("username"),
      load: false
    })

    setTimeout(this.loader.bind(this),0)
  }
  loader(){
    this.setState({
      load: true
    },function(){
      var payOutData = this.state.payOutData
      var lines = this.state.lines
      payOutData.creditDebitMatch.map(function(data,i){
        // let lineVar = new LeaderLine(document.getElementById('element-'+i),document.getElementById('element-target-'+i),{path:'straight',color:'#4a4a4a'})
        // lines.push(lineVar)
      })
      this.setState({lines:lines})
    })
  }
  componentWillUnmount(){
    var lines = this.state.lines
    lines.map(function(data,i){
        data.remove()
    })
  }

  handlePayment() {
    this.props.history.push('/offerings');
  }

  handleEdit(i,e){
    e.preventDefault()
    this.setState((prevState,props)=>{
      return {
        editablePaymentRow : i
      }
    })

  }
  handleAdd(i,e){
      e.preventDefault()
      let emptyObj = {
        bankName: "Halifax",
        accountType: "SB",
        accountTitle: "Every Day Saver",
        contributingAmount: "1,800",
        totalAvailableBalance: "1,900",
        beforeContributingBalance: "1,800",
        afterContributingBalance: "0",
        interestRate: 0.2
      }
      this.setState((prevState,props)=>{
        return {
          addNewRow : emptyObj
        }
      })
    }

    handleAmountEntered(index,customSenderIndex,e){
      console.log(arguments)
      let amountEntered = e.target.value
      this.setState(function(prevState,props){
        prevState.customizedCreditDebitMatch[index]['senders'][customSenderIndex].contributingAmount = amountEntered
        return prevState
      })
      // let amountEntered = e.target.value
      // console.log(amountEntered)
      // let customizedCreditDebitMatch = this.state.customizedCreditDebitMatch
      // this.setState({amountEntered:amountEntered},function(){
      //   let contributingAmount = this.state.amountEntered
      //   senderData.contributingAmount = contributingAmount
      //   let newCustomizedCreditDebitMatch = customizedCreditDebitMatch.map(function(each,index){
      //     if(each.bankName==creditBankName){
      //       console.log(each.senders.filter(function(each,index){return each.bankName==senderData.bankName}).length)
      //       if(each.senders.filter(function(each,index){return each.bankName==senderData.bankName}).length){
      //         let index = each.senders.findIndex(function(each,index){return each.bankName==senderData.bankName})
      //         each.senders[index].contributingAmount = amountEntered
      //         console.log(each)
      //         return each
      //       }else{
      //         senderData.contributingAmount=amountEntered
      //         each.senders.push(senderData)
      //         console.log(each)
      //         return each
      //       }
      //     }else{
      //       return each
      //     }
      //   })
      //   console.log(newCustomizedCreditDebitMatch)
      //   this.setState({customizedCreditDebitMatch:newCustomizedCreditDebitMatch})
      // })
    }

    handleAddNewSavingsCard(i,e){
      e.preventDefault()
      this.setState(function(prevState,props){
        let newCustomizedCreditDebitMatch = prevState.customizedCreditDebitMatch
        //console.log(newCustomizedCreditDebitMatch)
        var bankObj = this.state.allSavingsData.find(function(val,ind){
          var bankIndex = newCustomizedCreditDebitMatch[i].senders.findIndex(function(senderBank){
            return senderBank.bankName == val.bankName
          })
          return (bankIndex == -1)
        })
        console.log(bankObj)
        newCustomizedCreditDebitMatch[i].senders.push(bankObj)
        console.log(newCustomizedCreditDebitMatch)
        return {
          customizedCreditDebitMatch : newCustomizedCreditDebitMatch
        }
      })
    }

    toggle(i,e) {
     // console.log(i)
     // console.log(arguments)
      e.preventDefault()
      this.setState(function(prevState,props){
        let creditDebitIndexes = prevState.creditDebitIndexes
        let newCreditDebitIndexes = creditDebitIndexes.map(function(each,index){
         // console.log(each)
          if(index==i){
            let obj = each
            obj.dropdownOpen = true
            
            return obj
          }else{
            let obj = each
            obj.dropdownOpen = false
            return obj
          }
        })
      //  console.log(newCreditDebitIndexes)
        
        return {
          creditDebitIndexes : newCreditDebitIndexes,
        }
      });
    }

    handleSelect(accountIndex,senderIndex,mainIndex,e){
      console.log(arguments)
      e.preventDefault()
      this.setState(function(prevState,props){
        prevState.customizedCreditDebitMatch[mainIndex].senders[senderIndex] = prevState.allSavingsData[accountIndex]
        return {
          customizedCreditDebitMatch : prevState.customizedCreditDebitMatch 
        }
      })
      // this.setState(function(prevState,props){
      //   let creditDebitIndexes = prevState.creditDebitIndexes
      //   let newCreditDebitIndexes = creditDebitIndexes.map(function(each,index){
      //  //   console.log(each)
      //     if(each.dropdownOpen==true){
      //         let obj = each
      //         obj.selectedIndex = i
      //         return obj
      //     }
      //     return each
      //   })
      //  // console.log(newCreditDebitIndexes)
      //   return {
      //     creditDebitIndexes : newCreditDebitIndexes,
      //   }
      // });
    }

    render(){
      let {editablePaymentRow,
        addNewRow,
        payOutData,
        username,
        load,
        accSumary,
        allSavingsData,
        creditDebitIndexes,
        customizedCreditDebitMatch,
        amountEntered
      } = this.state
      let sendersArr = []
     // console.log(payOutData)
      let payoutForm = payOutData.creditDebitMatch.map(function(data,index){
       
        let currentCreditCardInfo = customizedCreditDebitMatch.filter(function(value,index){
          if(data.bankName==value.bankName){
            return true
          }
        })
        let customisedSendersArray = currentCreditCardInfo[0]['senders']
        console.log(customisedSendersArray)
        let currentCreditPaymentInfoMap = customisedSendersArray.map(function(eachSavingsPayment,customSenderIndex){
          return (
              <div style={{display:'flex',height:'77px',paddingTop:'15px',paddingRight:'14px'}}>
                {
                    (editablePaymentRow==index) && customisedSendersArray.length-1==customSenderIndex?
                    <Dropdown  toggle={this.toggle.bind(this,index)}>
                    <DropdownToggle
                      tag="span"
                      onClick={this.toggle.bind(this,index)}
                      data-toggle="dropdown"
                      aria-expanded={this.state.dropdownOpen}
                    > 
                      <div style={{display:'flex'}}>
                        <div className='img_credit_payout'><img src={'../../../../images/cards/debit/'+eachSavingsPayment.bankName+'.png'} /></div>
                        <div className=''>{eachSavingsPayment.bankName}<br/>
                            <div>
                              <b className=''>{eachSavingsPayment.interestRate} % AER</b><br/>
                            </div>
                        </div>
                      </div>
                    </DropdownToggle>
                    <DropdownMenu>
                      {allSavingsData.map(function(eachSavingsData,allSavingsindex){
                        return(
                          <DropdownItem onClick={this.handleSelect.bind(this,allSavingsindex,customSenderIndex,index)}>
                            <div style={{display:'flex'}}>
                              <div className='img_credit_payout'><img src={'../../../../images/cards/debit/'+eachSavingsData.bankName+'.png'} /></div>
                              <div className='' >{eachSavingsData.bankName}<br/>
                                <div>
                                  <b className=''>{eachSavingsData.interestRate} % AER</b><br/>
                                </div>
                              </div>
                            </div>
                          </DropdownItem>
                        )
                      }.bind(this))}
                    </DropdownMenu>
                    </Dropdown>
                    :
                  <div style={{display:'flex'}}>
                  <div className='img_credit_payout'><img src={'../../../../images/cards/debit/'+eachSavingsPayment.bankName+'.png'} /></div>
                  <div className=''>{eachSavingsPayment.bankName}<br/>
                      <div>
                        <b className=''>{eachSavingsPayment.interestRate} % AER</b><br/>
                      </div>
                  </div>
                  </div>
                }
                <div style={{padding:''}} className='amount_credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span><span>{editablePaymentRow==index?<input style={{border:'none',width:'45px'}} defaultValue={0} value={customizedCreditDebitMatch[index]['senders'][customSenderIndex]['contributingAmount']} onChange={this.handleAmountEntered.bind(this,index,customSenderIndex)}/>:0}</span> </b></h5></div>
                <div style={{display:'flex',alignItems:'center',justifyContent:'center',alignSelf:'center',marginLeft:'11px',marginTop:'-14px'}} className='amount_credit' >
                  <i style = {{width: '26px',height: '18.3px',cursor:'pointer'}} className='fas fa-times-circle' onClick={this.handleEdit.bind(this,index)}></i>
                </div>
                </div>
                
          )
        }.bind(this))
        return (
          <div className='row' style={{flex:'display',alignItems:'center'}} key = {index}>
            <div className='col-4 ' id={"element-"+index} style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
              <div style={{marginTop:'17px',marginLeft:'49px',borderRadius:'6px',backgroundColor:'#FFFFFF',boxShadow:' 0 5px 16px 0 rgba(0, 0, 0, 0.08)',minWidth:'310px'}}>
                {
                  currentCreditPaymentInfoMap.length!=0
                  ?
                  currentCreditPaymentInfoMap
                  :
                  null
                }
              </div>
             
            </div>
            <div className='col-4 ' id={"element-target"+index} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{marginTop:'17px',marginLeft:'49px',borderRadius:'6px',backgroundColor:'#FFFFFF',boxShadow:' 0 5px 16px 0 rgba(0, 0, 0, 0.08)',minWidth:'310px'}}>
                <div key={index} style={{display:'flex',height:'77px',paddingTop:'15px',paddingRight:'14px'}}>
                <div className='img_credit_payout'><img src={'../../../../images/cards/Credit/'+data.bankName+'.png'} /></div>
                  <div className=''>{data.bankName}<br/>
                          <div>
                            <b className=''>{data.interestRate || data.apr} % AER</b><br/>
                          </div>
                  </div>
                 <div className='amount_credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span><span>{data.totalBalanceDue}</span> </b></h5></div>
                  <div style={{display:'flex',alignItems:'center',justifyContent:'center',alignSelf:'center',marginLeft:'11px',marginTop:'-14px'}} className='amount_credit' >
                    <i style = {{width: '26px',height: '18.3px',cursor:'pointer'}} className='fas fa-plus-square' onClick={this.handleAddNewSavingsCard.bind(this,index)}></i>
                  </div>
              </div>
              </div>
            </div>
            <div className='col-4 ' id={"element-"+index} style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{marginTop:'17px',marginLeft:'49px',borderRadius:'6px',backgroundColor:'#FFFFFF',boxShadow:' 0 5px 16px 0 rgba(0, 0, 0, 0.08)',minWidth:'150px',minHeight:'77px'}}>
                <div style={{display:'flex',paddingTop:'15px',paddingRight:'14px'}}>
                  <div className='amount_credit'><h5><b style={{color:'#ff5d64',marginLeft:'34px'}}><span>&#163;</span> {data.totalOutstandingBalance}</b></h5></div>
                </div>
              </div>
              <div style={{marginTop:'8%',marginLeft:'49px'}} >
                {editablePaymentRow==index
                ?
                  <i style = {{width: '26px',height: '18.3px',cursor:'pointer'}} className='fas fa-save' onClick={this.handleEdit.bind(this,index)}></i>
                :
                  <i style = {{width: '26px',height: '18.3px',cursor:'pointer'}} className='fas fa-edit' onClick={this.handleEdit.bind(this,index)}></i>}
              </div>
            </div>
          </div>
        )
      }.bind(this))
      return(
        <div  className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
        <Header history = {this.props.history} username = {this.state.username}/>
        <div style = {{display:"flex"}}>
          <Sidebar/>
          <div  style = {{backgroundColor:"#f5f6fa",width:"100%",paddingBottom:'30px'}}>
            <div className='Recommended_for_you'>
              Recommended for you
            </div>
            <div className="headerImg">
              <div style={{backgroundImage:'url("images/img-recommendations.png")',backgroundRepeat:'no-repeat',height:'170px',width:'1160px'}}>
                <div style={{paddingTop:'29px',paddingLeft:'195px'}}>
                  <div className='heading_text'>
                    Hey {sessionStorage.getItem('username').charAt(0).toUpperCase()+sessionStorage.getItem('username').substr(1)}
                  </div>
                  <div style={{width:'609px'}} className='heading_text'>
                    Here are our "Smart
                    Recommendations" to
                    pay-off your credit dues !
                    Choose this option to be
                    free from any additional
                    charges on your Credit
                    Cards. '
                  </div>
                </div>
              </div>
            </div>
            <div className='main_section' style={{marginTop:'17px',marginLeft:'70px'}}>
              <div className='row' style={{marginTop:'33px',marginLeft:'48px',marginRight:'105px'}}>
                  <div className='col-4' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <p className='main_section_heading_text'>Pay from</p>
                  </div>
                  <div className='col-4' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <p className='main_section_heading_text'>Total Amount Due <br/>(Current Statement)</p>
                  </div>
                  <div className='col-4' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <p className='main_section_heading_text'>Outstanding balance</p>
                  </div>
                  <div className='Line' style={{marginLeft:'9%',marginRight:'12%'}}/>
                  {payoutForm}
              </div>
              <center>
                <button className='btn payout-button optimize-btt' onClick={this.handlePayment.bind(this)}>
                  <div>AGREE & PAY</div>
                  <div>
                    <i style = {{width: '26px',height: '18.3px'}} className='fas fa-arrow-right'></i>
                  </div>
                </button>
              </center>
              <br/>
            </div>
          </div>
        </div>
      </div>      
 
      )
           
    }
}

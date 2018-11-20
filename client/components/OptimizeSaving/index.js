import React from 'react';
import Paper from 'material-ui/Paper';
import ToolTip from 'react-portal-tooltip';
import Header from '../headernew'
import Sidebar from '../sidebar'
import Services from '../../services'
import ReactLoading from 'react-loading'

import './style.css';
export default class Saving extends React.Component{
    constructor(){
        super()
        this.state = {
            isTooltipActive: false
        }
        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
      }
    
      showTooltip() {
          this.setState({isTooltipActive:true})
      }
      hideTooltip() {
          this.setState({isTooltipActive: false})
      }
 
    render(){
    return(
            <div  className='container-fluid' style={{paddingLeft:'0px',paddingRight:'0px'}}>
              <Header history = {this.props.history} />
              <div style = {{display:"flex"}}>
                <Sidebar/>
                <div  style = {{backgroundColor:"#f5f6fa",width:"100%",paddingBottom:'30px'}}>
                  <div className='Recommended_for_you'>
                  Recommended for you
                  </div>
                  <div className="headerImg">
                    <div style={{backgroundImage:'url("images/img-recommendations.png")',backgroundRepeat:'no-repeat',height:'170px',width:'1160px'}}>
                      <div style={{paddingTop:'29px',paddingLeft:'195px'}}>
                      {/* {  <div className='heading_text'>
                          Hey {sessionStorage.getItem('username').charAt(0).toUpperCase()+sessionStorage.getItem('username').substr(1)}
                        </div>} */}
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
                  <Paper zDepth={2}style = {{marginLeft:'12px',padding:'20px',width: '98%',marginTop:'20px'}}>
                <div className='row credit-accounts'>
                    <div className="col-10">Debit accounts</div>
                </div>
                <div className='row'>
               <div className='col-1' style={{paddingTop:'20px',paddingLeft:'22px'}}>
                   <img src={'../../../../images/cards/debit/Halifax.png'}/>
               </div>
               <div className='col-2' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Bank</small></div>
                           <div className='JP_Morgan_Chase'>bankName</div>
                        </div></div></div>
                <div className='col-2' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>AER</small></div>
                           <div className='JP_Morgan_Chase'>0.1%</div>
                        </div></div></div>
                    <div className='col-2' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Min. Balance</small></div>
                           <div className='JP_Morgan_Chase'>£ minBalance</div>
                       </div>
                   </div></div>
                   <div className='col-2' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Unused Balance</small></div>
                           <div className='JP_Morgan_Chase'>£ balance</div>
                       </div>
                   </div></div>
                   <div className='col-3' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Standing Instructions</small> <i id='si' className="far fa-list-alt fa-lg" onMouseEnter={this.showTooltip.bind(this, 'c')} onMouseLeave={this.hideTooltip.bind(this)}></i></div>
                           <div className='JP_Morgan_Chase'>£ standingInst</div><small className='JP_Morgan_Chase'>(£ 200 Pending , 2000 Paid-off)</small>
                        </div>
                    </div></div>
                    <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent="#si">
            <div className='tooltip_background'>
                   <table>
                   <tr>
                     <th>Name</th>
                     <th>Amount</th>
                     <th>Due Date</th>
                   </tr>
                   <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                   </tr>
                   <tr>
                      <td>Alfreds Futterkiste</td>
                      <td>Maria Anders</td>
                      <td>Germany</td>
                   </tr>
                 </table>
           </div>
        </ToolTip>
               </div>   
               <br/>
               <div className='row'>
               <div className='col-1' style={{paddingTop:'20px',paddingLeft:'22px'}}>
                   <img src={'../../../../images/cards/debit/Halifax.png'}/>
               </div>
               <div className='col-2' style={{paddingTop:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Bank</small></div>
                           <div className='JP_Morgan_Chase'>bankName</div>
                        </div></div></div>
                <div className='col-2' style={{paddingTop:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>AER</small></div>
                           <div className='JP_Morgan_Chase'>0.1%</div>
                        </div></div></div>
                    <div className='col-2' style={{paddingTop:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Min. Balance</small></div>
                           <div className='JP_Morgan_Chase'>£ minBalance</div>
                       </div>
                   </div></div>
                   <div className='col-2' style={{paddingTop:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Unused Balance</small></div>
                           <div className='JP_Morgan_Chase'>£ balance</div>
                       </div>
                   </div></div>
                   <div className='col-3' style={{paddingTop:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Standing Instructions</small> <i className="far fa-list-alt fa-lg"></i></div>
                           <div className='JP_Morgan_Chase'>£ standingInst</div><small className='JP_Morgan_Chase'>(£ 200 Pending , 2000 Paid-off)</small>
                        </div>
                    </div></div>
               
               </div>   <br/>
               <div className='row'>
               <div className='col-1' style={{paddingTop:'20px',paddingLeft:'22px'}}>
                   <img src={'../../../../images/cards/debit/Halifax.png'}/>
               </div>
               <div className='col-2' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Bank</small></div>
                           <div className='JP_Morgan_Chase'>bankName</div>
                        </div></div></div>
                <div className='col-2' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>AER</small></div>
                           <div className='JP_Morgan_Chase'>0.1%</div>
                        </div></div></div>
                    <div className='col-2' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Min. Balance</small></div>
                           <div className='JP_Morgan_Chase'>£ minBalance</div>
                       </div>
                   </div></div>
                   <div className='col-2' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Total Balance</small></div>
                           <div className='JP_Morgan_Chase'>£ balance</div>
                       </div>
                   </div></div>
                   <div className='col-3' style={{paddingTop:'20px',paddingLeft:'20px'}}>
                   <div style={{display:'flex',flexDirection:'row'}}>
                       <div style={{display:'flex',flexDirection:'column'}}>
                           <div className='top-row'><small>Standing Instructions</small> <i className="far fa-list-alt fa-lg"></i></div>
                           <div className='JP_Morgan_Chase'>£ standingInst</div><small className='JP_Morgan_Chase'>(£ 200 Pending , 2000 Paid-off)</small>
                        </div>
                    </div></div>
               </div>   
                </Paper><br/>
            </div>  <br/>
                  <div className='row' style={{marginRight:'0px'}}>
                  <center className='col-5'>
                  <button className='btn payout-button optimize-btt optimizeBtn'>
                      <div className="btn-text-wrapper">
                        <div className="btn-text">Handle SI</div>
                        <div className="btn-arrow">
                          <i className='fas fa-arrow-right'></i>
                        </div>
                      </div>
                    </button>
                    </center>
                    <center className='col-5'>
                    <button className='btn payout-button optimize-btt optimizeBtn'>
                      <div className="btn-text-wrapper">
                        <div className="btn-text">Merge Funds</div>
                        <div className="btn-arrow">
                          <i className='fas fa-arrow-right'></i>
                        </div>
                      </div>
                    </button>
                    </center>
                  </div>

                </div>
              </div>
            </div>
        );
    }
}

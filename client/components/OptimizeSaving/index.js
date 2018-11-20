import React from 'react';
import Paper from 'material-ui/Paper';
import ToolTip from 'react-portal-tooltip';
import { Card, CardTitle, CardText, CardBody, Button, CardSubtitle, CardImg, CardImgOverlay, CardColumns } from 'reactstrap';
import Header from '../headernew'
import Sidebar from '../sidebar'
import Services from '../../services'
import ReactLoading from 'react-loading'

import './style.css';
export default class Saving extends React.Component{
    constructor(){
        super()
        this.state = {
            isTooltipActive: false,
            handleSIModal : false
        }
        this.showTooltip = this.showTooltip.bind(this);
        this.hideTooltip = this.hideTooltip.bind(this);
        this.toggleHandleSIModal = this.toggleHandleSIModal.bind(this)
      }
    
      showTooltip() {
          this.setState({isTooltipActive:true})
      }
      hideTooltip() {
          this.setState({isTooltipActive: false})
      }
      toggleHandleSIModal(){
          console.log('toggleHandleSIModal')
          this.setState(function(prevState,props){
              return {
                  handleSIModal : !prevState.handleSIModal
              }
          })
      }
 
    render(){
        console.log('render')
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

                     <CardColumns>
            <Card>
               <CardImg top width="90%" src="../../../../images/cards/debit/Halifax.png" alt="Card image cap" />
                <CardBody>
                <div className='row'>
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
                </CardBody>
            </Card>
            <Card>
                <CardTitle className="cardtitle" style={{fontFamily:'WiproAkkuratMono-Regular'}}>Deep-dive into the implications of cloud transformation in the post-GDPR world</CardTitle>
                <CardSubtitle className="cardsubtitle" style={{fontFamily:'WiproAkkuratMono-Regular'}}><p className="float-left"><span className="subtitle" style={{fontFamily:'WiproAkkuratMono-Regular',color:'#00A2E0'}}>{this.state.channelName}</span> / AUGUST 21 2017</p></CardSubtitle>
                <CardImg top width="100%" src="../../../../images/cards/debit/Halifax.png" alt="Card image cap" />
                <CardBody>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                    <p className='float-left'> <i className="fas fa-heart"></i> 2K</p><p className="float-right"><i className="fas fa-eye"></i> 2K <i className="fas fa-comments"></i> 2K</p>
                </CardBody>
            </Card>

        </CardColumns>




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
                  <button className='btn payout-button optimize-btt optimizeBtn' data-toggle='modal' data-target='#handleSImodal'>
                      <div className="btn-text-wrapper">
                        <div className="btn-text">Handle SI</div>
                        <div className="btn-arrow">
                          <i className='fas fa-arrow-right'></i>
                        </div>
                      </div>
                    </button>
                    <div className="modal" id='handleSImodal' role='dialog' tabIndex='-1' aria-hidden='true'>
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                        </div>
                    <div className='modal-body'>
                        <div style={{display:'flex'}}>
                            <div id='card1' style={{width:'170px',backgroundColor:'#f2f2f2',padding:'10px'}} >
                               <div style={{display:'flex'}}>
                                   <div className='img_credit_payout'><img src={'../../../../images/cards/debit/'+'Halifax'+'.png'} /></div>
                                   <div className='' >Halifax<br/>
                                       <div>
                                           <b className=''> % AER</b><br/>
                                       </div>
                                   </div>
                               </div>
                           </div>
                           <br/>
                           <div id='card2' style={{width:'170px',backgroundColor:'#f2f2f2',padding:'10px'}}>
                               <div style={{display:'flex'}}>
                               <div className='img_credit_payout'><img src={'../../../../images/cards/debit/'+'HSBC'+'.png'} /></div>
                               <div className='' >HSBC<br/>
                                   <div>
                                       <b className=''> % AER</b><br/>
                                   </div>
                               </div>
                               </div>
                           </div>
                           <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                             </div>
                         </div>
                     </div>
                    </div>
                </div>
                   </div>
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

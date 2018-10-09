import React from 'react';
import Paper from 'material-ui/Paper';

import './style.css';


export default class Balance extends React.Component{

    componentWillMount(){
        $(document).ready(function(){
            $('[data-toggle="tooltip"]').tooltip({
            title: function() {
                var element = $( this );
                if ( element.is( ".outer-layer" ) ) {
                    return ("<img style='height:110px,width:175px,margin-left:22px' src='images/card_img1.jpg'/></div>div class='col-4' style='padding-top:30px,padding-left:55px'><div style='display:flex,flex-direction:row,margin-right:22px'><div style='display:flex,flexDirection:column'><div class='bank'>Banks</div><div class='JP_Morgan_Chase'>JP Morgan Chase</div><div class='bank' style='margin-top:15px'>Credit limit</div><div class='JP_Morgan_Chase'>£ 3000</div><div class='bank' style='margin-top:15px'>Available credit</div><div class='JP_Morgan_Chase'>£ 1200</div></div></div> </div><div class='col-4' style='padding-top:30px,padding-left:22px,padding-right:22px'><div style='display:flex,flex-direction:row'><div style='display:flex,flex-direction:column'><div class='bank'>Minimum due balance</div><div class='JP_Morgan_Chase'>£ 30</div><div class='bank' style='margin-top:15px'>Due date</div><div class='JP_Morgan_Chase' style='color:#ff5d64'>Thursday, Oct 11, 2018</div></div></div></div></div></div>"
                      );
                }           
            }, html: true ,placement: "top"});
        });
     }

    render(){
        return(
            <div>
                <div style={{display:'flex',marginLeft:'65px'}}>
                <Paper className='paper' zDepth={2} style = {{padding:'15px'}}>
                   <div className='credit-accounts'>Credit accounts</div>
                   <div className='outer-layer' style={{display:'flex'}} data-toggle="tooltip" data-placement="top" >
                   <div className='img-credit'><img src='../../../../images/card_img1.jpg' /></div>
                   <div className='detail-credit'>
                        <p className='credit'>Halifax<br/>
                        <b className='credit'>0.2% APR</b><br/>
                        <small className='credit' style={{color:'#ff5d64'}}><i className='fas fa-info-circle'></i> Card payment in 3 days</small></p>
                   </div>
                   <div className='name-credit'><p>CC</p></div>
                    <div className='line'></div>
                   <div className='amount-credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span> 2800</b></h5></div>
                   </div>
                   <div className='outer-layer' style={{display:'flex'}}>
                   <div className='img-credit'><img src='../../../../images/card_img1.jpg' /></div>
                   <div className='detail-credit'>
                        <p className='credit'>JP Morgan Chase<br/>
                        <b className='credit'>25.49%</b><br/>
                        <small className='credit' style={{color:'#ff5d64'}}>Card payment in 3 days</small></p>
                   </div>
                   <div className='name-credit'><p>CC</p></div>
                    <div className='line'></div>
                   <div className='amount-credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span> 2800</b></h5></div>
                   </div>
                   <div className='outer-layer' style={{display:'flex'}}>
                   <div className='img-credit'><img src='../../../../images/card_img1.jpg' /></div>
                   <div className='detail-credit'>
                        <p className='credit'>JP Morgan Chase<br/>
                        <b className='credit'>25.49%</b><br/>
                        <small className='credit' style={{color:'#ff5d64'}}>Card payment in 3 days</small></p>
                   </div>
                   <div className='name-credit'><p>CC</p></div>
                    <div className='line'></div>
                   <div className='amount-credit'><h5><b style={{color:'#ff5d64'}}><span>&#163;</span> 2800</b></h5></div>
                   </div>
                   <center><button className='btn payout-button'>PAYOUT PLAN <i className='fas fa-arrow-right fa-lg'></i></button></center>
                </Paper>
                <Paper className='paper' zDepth={2}>
                <div className='credit-accounts'>Debit accounts</div>
                <div className='outer-layer2' style={{display:'flex'}}>
                   <div className='img-credit'><img src='../../../../images/card_img2.jpg' /></div>
                   <div className='detail-credit'>
                        <p className='credit'>JP Morgan Chase<br/>
                        <b className='credit'>25.49% AER</b></p>
                       </div>
                   <div className='name-credit'><p>CC</p></div>
                    <div className='line-1'></div>
                   <div className='amount-credit'><h5><b style={{color:'#4a4a4a'}}><span>&#163;</span> 2800</b></h5></div>
                   </div>
                   <div className='outer-layer2' style={{display:'flex'}}>
                   <div className='img-credit'><img src='../../../../images/card_img2.jpg' /></div>
                   <div className='detail-credit'>
                        <p className='credit'>JP Morgan Chase<br/>
                        <b className='credit'>25.49% AER</b></p>
                   </div>
                   <div className='name-credit'><p>CC</p></div>
                    <div className='line-1'></div>
                   <div className='amount-credit'><h5><b style={{color:'#4a4a4a'}}><span>&#163;</span> 2800</b></h5></div>
                   </div>
                   <div className='outer-layer2' style={{display:'flex'}}>
                   <div className='img-credit'><img src='../../../../images/card_img2.jpg' /></div>
                   <div className='detail-credit'>
                        <p className='credit'>JP Morgan Chase<br/>
                        <b className='credit'>25.49% AER</b></p>
                   </div>
                   <div className='name-credit'><p>CC</p></div>
                    <div className='line-1'></div>
                   <div className='amount-credit'><h5><b style={{color:'#4a4a4a'}}><span>&#163;</span> 2800</b></h5></div>
                   </div>
                
                </Paper>
                </div>
            </div>
        )
    }
} 
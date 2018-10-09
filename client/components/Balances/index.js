import React from 'react';
import Paper from 'material-ui/Paper';

import './style.css';


export default class Balance extends React.Component{
    render(){
        return(
            <div>
                <div style={{display:'flex',marginLeft:'65px'}}>
                <Paper className='paper' zDepth={2} style = {{padding:'15px'}}>
                   <div className='credit-accounts'>Credit accounts</div>
                   <div className='outer-layer' style={{display:'flex'}}>
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
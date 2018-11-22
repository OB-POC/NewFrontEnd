import React from 'react';
import './style.css';
import { HashRouter as Router } from 'react-router-dom'


export default class Rel extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        }
  }

    render(){
        return(
          <div className='card-style'>
                          <div>
                            <img src = "./images/img-card.png" style = {{ width: '314px',height: '194px',marginTop:'30px'}}/>
                          </div>
                         <div style={{}}>
                             <div className='row' style={{marginTop:'-20px'}}>
                                 <div className='col-6' style={{paddingLeft:'0px'}}>
                                 <div className='bankName'>
                                     HALIFAX
                                 </div>
                                 <div className='aer_subscript'>
                                     0.5% AER
                                 </div>
                                 </div>
                                 <div className='col-6'/>
                             </div>
                             <div className='row' style={{marginTop:'28px'}}>
                                 <div className='col-6' >
                                     <div className='helper-text'>
                                         Available Balance
                                     </div>
                                     <div className='money-font' style={{marginTop:'5px'}}>
                                         £ 1,900
                                     </div>
                                 </div>
                                 <div className='col-6' >
                                     <div className='helper-text'>
                                         Payment instructions
                                     </div>
                                     <div className='money-font' style={{marginTop:'5px'}}>
                                         £ 1,900
                                     </div>
                                     <span className = "View-details" style = {{cursor:'pointer'}}>View details  <i class="fas fa-arrow-right"></i></span>
                                 </div>
                             </div>

                             <div className='row' style={{marginTop:'32px'}}>
                                 <div className='col-6'>
                                     <div className='helper-text'>
                                         Minimum balance
                                     </div>
                                     <div className='money-font' style={{marginTop:'5px'}}>
                                         £ 1,900
                                     </div>
                                 </div>
                                 <div className='col-6'>
                                     <div className='helper-text'>
                                         Unutilized balance
                                     </div>
                                     <div className='money-font' style={{marginTop:'5px'}}>
                                         £ 1,900
                                     </div>
                                 </div>
                             </div>

                        </div>
                        <div style={{marginBottom:'0px',marginTop:'40px',display:'flex'}}>
                             <div className='tranfer_merge_button' style={{width:'50%'}}>
                             <span className = 'TRANSFER'>
                                 TRANSFER
                                 </span>
                             </div>
                             <div className='merge_merge_button' style={{width:'50%'}}>
                             <span className = 'TRANSFER'>
                                 MERGE
                                 </span>
                             </div>
                         </div>
                     </div>
        );
    }
}

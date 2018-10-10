import React from 'react';
import services from '../../services'
import './index.css'

export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.onLogin = this.onLogin.bind(this)
  }
onLogin(){
  const username = document.getElementById("username").value
  const pass = document.getElementById("pwd").value
  var queryData = {
    username:username,
    password:pass
  }
  services.logincall(queryData,function (response) {
    if(response.authenticated){
      sessionStorage.setItem("username",username)
      sessionStorage.setItem("token",response.token)
      this.props.history.push("/home")
    }else {
      console.error("not authourised");
    }
  }.bind(this),function (err) {
    throw(new Error(err.responseText))
  })

}
keyPress(event){
  if (event.key == 'Enter'){
     // How would I trigger the button that is in the render? I have this so far.
     this.onLogin();
   }
}
    render(){
        return(
            <div className='llyods_login container-fluid'>
              <div className='logo_open_bank'>
              <span>OPTIMA</span><small style={{marginLeft:'6px',paddingTop:'10px',fontSize:'16px'}}><i>Pay Less, Save More</i></small>
              </div>
              <div className='row' style={{paddingBottom:'20px'}}>
                <div className='col-7'>
                  <img style = {{width:'768px',paddingTop:'49px',paddingLeft:'38px'}} src = 'images/il-login-page.png' />
                </div>
                <div className='col-5' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                  <div className='Login_Background' style={{paddingTop:'49px',paddingLeft:'38px'}}>
                    <div className='Sign_in_to_your_account'>
                      Sign in to your account
                    </div>
                    <input type = 'text' className='field_outline' style={{marginTop:'34px'}}
                    placeholder = 'User name' defaultValue = 'alice' id="username" autoFocus={true} onKeyPress={this.keyPress.bind(this)}/>
                    <input type = 'password' className='field_outline' style={{marginTop:'13.9px'}}
                    placeholder = 'Password' defaultValue = 'wonderland' id="pwd" onKeyPress={this.keyPress.bind(this)}/>
                    <div style={{marginTop:'19.9px'}}>
                      <div style={{float:'left',marginRight:'10px'}}>
                        <input type='checkbox'/>
                      </div>
                      <div style={{}}>
                        <div className=''>Keep me signed in</div>
                      </div>
                    </div>
                    <div className='button_background' style={{display:'flex',alignItems:'center',
                    justifyContent:'center', cursor: 'pointer'}}
                    tabIndex="1" onClick = {this.onLogin}>
                        SIGN IN
                    </div>
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

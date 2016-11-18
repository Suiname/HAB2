import React, { Component } from 'react'
import logo from '../_static/images/logo.png';

import LoginContainer from '../containers/login'


class Login extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <div>
        <LoginContainer username={null} />
      </div>
    );
  }
}

export default Login;

import React, {Component} from 'react'

import Login from './Login'

// import projectData from '../../config/Login.json'

class LoginContainer extends Component {
  
    render() {
        return (
            <Login />
            // <Login Login={projectData}/>
        );
    }
}

export default LoginContainer

import React, {Component} from 'react'

import AccountHandler from './AccountHandler'

// import projectData from '../../config/Login.json'

class AccountHandlerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {signUpOrLogin: window.location}
    }
  
    render() {
        return (
            <AccountHandler signUpOrLogin={this.state.signUpOrLogin}/>
        );
    }
}

export default AccountHandlerContainer

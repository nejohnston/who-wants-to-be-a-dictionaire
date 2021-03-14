import React, {Component} from 'react'
import firebase from 'firebase'
import 'firebase-auth'
import AccountHandler from './AccountHandler'

// import projectData from '../../config/Login.json'

class AccountHandlerContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUpOrLogin: window.location.hash,
            isLoggedIn: false,
            user: {}
        }
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
          if (user) { this.setState({ isLoggedIn: true, user: user })} 
          else { this.setState({ isLoggedIn: false })}
        })
        console.log(this.state.user)
    }
  
    render() {
        return (
            <AccountHandler isLoggedIn={this.state.isLoggedIn} signUpOrLogin={this.state.signUpOrLogin}/>
        );
    }
}

export default AccountHandlerContainer

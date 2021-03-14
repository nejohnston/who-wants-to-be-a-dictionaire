import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom'
import { UserContext } from './App'

const PrivateRoute = ({ component: ComposedComponent, ...rest }) => {

  class Authentication extends Component {

    handleRender = props => {
      if (!this.props.user) {
        return <Redirect to="/login" />
      } else {
        return <ComposedComponent user={this.props.user} {...props} />
      }
    }

    render() {
      return (
        <Route {...rest} render={this.handleRender} />
      );
    }
  }

  return (
    <UserContext.Consumer>
      {
        ({ user }) => <Authentication user={user} />
      }
    </UserContext.Consumer>
  )
};

export default PrivateRoute
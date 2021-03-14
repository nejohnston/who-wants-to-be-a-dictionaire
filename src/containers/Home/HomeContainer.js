import React, {Component} from 'react'

import Home from './Home'

class HomeContainer extends Component {
    constructor(props) {
        super(props)
    
        if (props.user) {
          alert("You can't login if you are logged in!")
        //   props.history.push('/ticket-list')
        }
      }
    render() {
        return (
            // {(props.user) ? {<}}
            <div>hello</div>
        );
    }
}

export default HomeContainer

import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Route, HashRouter} from 'react-router-dom'
import './index.css';
import HomeContainer from "./containers/Home";
import AboutContainer from './containers/About'
import GameContainer from './containers/Game'
import Layout from './components/Layout'
import SignUp from './components/SignUpCard/SignUp';
import SignIn from './components/LoginCard/SignIn';

const WhoWantsToBeAMillionaire = () => (
    <HashRouter>
      <Layout>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/about' component={AboutContainer}/>
        <Route path='/Game' component={GameContainer}/>
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signin' component={SignIn} />
      </Layout>
    </HashRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <WhoWantsToBeAMillionaire />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

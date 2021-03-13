import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Route, HashRouter} from 'react-router-dom'
import './index.css';
import HomeContainer from "./containers/Home";
import AboutContainer from './containers/About'
import GameContainer from './containers/Game'
import Layout from './components/Layout'

const WhoWantsToBeAMillionaire = () => (
    <HashRouter>
      <Layout>
        <Route exact path='/' component={HomeContainer} />
        <Route path='/about' component={AboutContainer}/>
        <Route path='/game' component={GameContainer}/>
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

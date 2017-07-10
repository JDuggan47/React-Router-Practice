import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import 'whatwg-fetch';
import NavBar from './components/NavBar';
import BattlesContainer from './containers/BattlesContainer'
import BattleShowContainer from './containers/BattleShowContainer'
import CreateBattle from './containers/CreateBattle'


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={BattlesContainer}/>
        <Route path='/battles/new' component={CreateBattle}/>
        <Route path='/battles/:id' component={BattleShowContainer}/>
      </Route>
    </Router>
  )
}

export default App;

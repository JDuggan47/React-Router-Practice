import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';
import BattlesContainer from './containers/BattlesContainer'


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={BattlesContainer}/>
      </Route>
    </Router>
  )
}

export default App;

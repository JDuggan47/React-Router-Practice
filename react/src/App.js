import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import NavBar from './components/NavBar';


const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}/>
    </Router>
  )
}

export default App;

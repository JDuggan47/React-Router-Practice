import React, {Component} from 'react';
import BattleTile from '../components/BattleTile';
import 'whatwg-fetch';

class BattlesContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      battles: []
    }
  }

  getData() {
    debugger;
    fetch('/api/v1/battles')
      .then(response => {
        debugger;
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({battles: body});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData();
  }

  render(){
      let battles = this.state.battles.map(battle => {
        return(
          <BattleTile
            key={battle.id}
            id={battle.id}
            name={battle.name}
          />
        )
      })
    return(
      <div className='row'>
        <h1 className='text-center'>Checkout the Major Civl War Battles That People Have Submitted!</h1>
        {battles}
      </div>
    )
  }
}

export default BattlesContainer;

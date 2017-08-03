import React, {Component} from 'react';
import BattleShowTile from '../components/BattleShowTile'
import 'whatwg-fetch';

class BattleShowContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      battle: []
    }
  }

  getData(){
    fetch(`/api/v1/battles/${this.props.params.id}`, {credentials: 'same-origin'})
    .then(response => {
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
      this.setState({battle: body})
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return(
      <div>
        <h1>TESTING 1, 2, 3</h1>
        <BattleShowTile
          id={this.state.battle.id}
          name={this.state.battle.name}
          location={this.state.battle.location}
          winner={this.state.battle.winner}
        />
      </div>
    )
  }
}

export default BattleShowContainer;

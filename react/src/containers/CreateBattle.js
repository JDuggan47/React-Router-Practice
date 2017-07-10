import React, {Component} from 'react';
import NewBattleForm from '../components/NewBattleForm'

class CreateBattle extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      year:'',
      location:'',
      winner:'',
      battles: []
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.handleLocationChange = this.handleLocationChange.bind(this)
    this.handleWinnerChange = this.handleWinnerChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
  }

    handleNameChange(event) {
      this.setState({name: event.target.value})
    }

    handleYearChange(event) {
      this.setState({year: event.target.value})
    }

    handleLocationChange(event) {
      this.setState({location: event.target.value})
    }

    handleWinnerChange(event) {
      this.setState({winner: event.target.value})
    }

    handleClearForm(event) {
      this.setState({
        name:'',
        year:'',
        location:'',
        winner: ''
      })
    }

    handleFormSubmit(event) {
      event.preventDefault()
      let formPayload= {
        name: this.state.name,
        location: this.state.location,
        year: this.state.year,
        winner: this.state.winner
      }
      fetch(`/api/v1/battles`,{
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formPayload)
      })
        .then(response => {
          if (response.ok) {
            let battle = response.json()
            return battle;
          } else {
            let errorMessage = `${response.status} ($response.statusText)`,
              error = new Error(errorMessage);
            throw(error); }
        })
        .then(battle => {
          let currentState = this.state.battles
          let newBattle = battle
          let newState = currentState.concat(newBattle)
          this.setState({battles: newState});
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`));
      this.handleClearForm(event);
    }

  render() {
    return(
      <div>
        <h1 className='text-center'>Submit a Battle!</h1>
        <div className='row'>
          <form onSubmit={this.handleFormSubmit}>
            <NewBattleForm
              content={this.state.name}
              label='Name of Battle'
              name='Name'
              handleFunction={this.handleNameChange}
            />
            <NewBattleForm
              content={this.state.location}
              label='Location of Battle'
              name='Location'
              handleFunction={this.handleLocationChange}
            />
            <NewBattleForm
              content={this.state.year}
              label='Year of Battle'
              name='Year'
              handleFunction={this.handleYearChange}
            />
            <NewBattleForm
              content={this.state.winner}
              label='Winner of Battle'
              name='Winner'
              handleFunction={this.handleWinnerChange}
            />
            <div className='button-group'>
              <button className='button' onClick={this.handleClearForm}>Clear</button>
              <input className='button' type='submit' value='Submit' />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default CreateBattle;

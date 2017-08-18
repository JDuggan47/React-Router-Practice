import React, {Component} from 'react';
import Textfield from '../components/Textfield'

class CommentContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      battle: null,
      user: null,
      body: ''
    }

    this.handleCommentChange = this.handleCommentChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleCommentChange(event) {
    this.setState({body: event.target.value})
  }

  handleFormSubmit(event) {
    event.preventDefault()
    let formPayload = {
      body: this.state.body,
      user: this.state.user,
      battle: this.state.battle
    }

    fetch(`/api/v1/battles/${this.props.params.id}`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayload)
    })
      .then(response => {
        debugger;
        if (response.ok) {
          let comment = response.json()
          return comment;
        } else {
          debugger;
          let errorMessage = `${response.status} ($response.statusText)`,
            error = new Error(errorMessage);
          throw(error); }
      })
      .then(comment => {
        let currentState = this.state.comment
        let newComment = comment
        let newState = currentState.concat(newComment)
        this.setState({comments: newState});
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    this.handleClearForm(event);
  }

  handleClearForm(event) {
    this.setState({body: ''})
  }
  render(){
    return(
      <div>
        <h1 className='text-center'>Submit a Comment!</h1>
        <div className='row'>
          <form onSubmit={this.handleFormSubmit}>
            <Textfield
              content={this.state.name}
              label='Any thoughts on this battle?'
              name='Comment'
              handleFunction={this.handleCommentChange}
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

export default CommentContainer;

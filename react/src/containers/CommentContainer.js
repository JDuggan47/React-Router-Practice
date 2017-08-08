import React, { Component } from 'react';
import Textfield from '../components/TextField'

class CommentContainer extends Component {
  constructor(props) {
    super(props);
    this.state= {
      body: ''
    }

    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.addNewComment = this.handleNewComment.bind(this);
  }
    handleBodyChange(event) {
      this.setState({body: event.target.value})
    }

    handleClearForm(event) {
      event.preventDefault();
      this.setState({body: ''})
    }

    handleFormSubmit(event) {
      event.preventDefault();
      let formPayload = {
        body: this.state.body;
      }
      this.addNewComment(formPayload);
      this.handleClearForm(event);
    }

    addNewComment(formPayload) {
      fetch('/api/v1/battles', {
        method: 'POST',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json'}
        body: JSON.stringify(formPayload)
      });
      .then(response => response.json())
      .then(responseData => {
        this.setState({battles: [...this.state.body, responseData] })
      });
    }
  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <TextField
            content={this.sate.body}
            label='Your Opinion....'
            name='Name'
            handleFunction={this.handleBodyChange}
          />
      </div>
    )
  }
}

export default CommentContainer

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class MessagesNew extends Component {

  constructor() {
    super();

    this.state = {
      content: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const addMessage = this.props;
    addMessage(this.state);
  }

  handleOnChange = event => {
    this.setState({
      title: event.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleOnSubmit} >
        <input 
          type="text" 
          onChange={this.handleOnChange} 
          placeholder="Add a Message" />
        <input type="submit" value="Add Message" />
      </form>
    );
  }
}

export default connect(null, { addMessage })(MessagesNew)
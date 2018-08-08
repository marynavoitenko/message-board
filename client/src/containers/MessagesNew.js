import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/messagesActions';

class MessagesNew extends Component {

  constructor() {
    super();

    this.state = {
      content: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addMessage(this.state);
  }

  handleOnChange = event => {
    this.setState({
      content: event.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)} >
        <input 
          type="text" 
          onChange={this.handleOnChange.bind(this)} 
          placeholder="Add a Message" />
        <input type="submit" value="Add Message" />
      </form>
    );
  }
}

export default connect(null, { addMessage })(MessagesNew)
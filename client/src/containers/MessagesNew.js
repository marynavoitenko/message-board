import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/messagesActions';

class MessagesNew extends Component {

  constructor() {
    super();

    this.state = {
      content: '', 
      sender_name: '',
      recipient_name: ''
    };
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addMessage(this.state);
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return (
      <form onSubmit={this.handleOnSubmit.bind(this)} >
        <input 
          type="text" 
          name="sender_name"
          onChange={this.handleOnChange.bind(this)} 
          placeholder="Sender Name" />
        <input 
          type="text" 
          name="recipient_name"
          onChange={this.handleOnChange.bind(this)} 
          placeholder="Recipient Name" />
        <input 
          type="text" 
          name="content"
          onChange={this.handleOnChange.bind(this)} 
          placeholder="Message" />
        <input type="submit" value="Add Message" />
      </form>
    );
  }
}

export default connect(null, { addMessage })(MessagesNew)
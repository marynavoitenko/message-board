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
    this.props.history.push('/messages');
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return (
      <div className="message-card message-fullpage">
        <form onSubmit={this.handleOnSubmit.bind(this)} >
          <input 
            type="text" 
            className="sender"
            name="sender_name"
            onChange={this.handleOnChange.bind(this)} 
            placeholder="Sender Name" />
          <input 
            type="text"
            className="recipient"
            name="recipient_name"
            onChange={this.handleOnChange.bind(this)} 
            placeholder="Recipient Name" />
          <input 
            type="textarea"
            rows={4}
            cols={40}
            className="content"
            name="content"
            onChange={this.handleOnChange.bind(this)} 
            placeholder="Message" />
          <input type="submit" value="Add Message" />
        </form>
      </div>
    );
  }
}

export default connect(null, { addMessage })(MessagesNew)
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
      <div className="single-message-page">
        <div className="message-card message-card-fullpage">
          <form onSubmit={this.handleOnSubmit.bind(this)} className="new-message">
            <input 
              type="text" 
              className="new-sender"
              name="sender_name"
              onChange={this.handleOnChange.bind(this)} 
              placeholder="Sender Name" />
            <input 
              type="text"
              className="new-recipient"
              name="recipient_name"
              onChange={this.handleOnChange.bind(this)} 
              placeholder="Recipient Name" />
            <input 
              type="textarea"
              rows={4}
              cols={40}
              className="new-content"
              name="content"
              onChange={this.handleOnChange.bind(this)} 
              placeholder="Message" />
            <input 
              type="submit" 
              value="Add Message" 
              className="new-message-button"
              onChange={this.handleOnChange.bind(this)} 
              disabled={!this.state.content}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default connect(null, { addMessage })(MessagesNew)
import React, { Component } from 'react';

class MessageCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render () {
    const { sender, recipient, content } = this.props.message;

   const longMessage = content.length > 140;

    return (
      <div className="message-card">
          { (sender || recipient) ?
              <div className="message-card-header">
                {sender ? <span className="sender">From: {sender.name}</span> : null }
  
                {recipient ? <span className="recipient">To: {recipient.name}</span> : null }
              </div>
              : null
          }
  
          <div className="message-card-main">
            {longMessage ? `${content.slice(0, 140)}...` : content}
          </div>
          <div>
            {this.state.counter}
            <button onClick={this.handleClick}>Like</button>
          </div>
          
      </div>
    );
  }
  
};

export default MessageCard;
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message';
import { deleteMessage } from '../actions/messagesActions';
 
class MessageShow extends Component {

  handleDelete = (messageId) => {
    console.log('Deleting message: ' + messageId);
    this.props.deleteMessage(messageId);
    this.props.history.push('/messages');
  }

  render() {
    return (
      <div> 
        <Message message={this.props.message} clicked={this.handleDelete} />
      </div>
    )
  }
}
  
 
const mapStateToProps = (state, ownProps) => {
  const message = state.messages.messages.find(message => message.id === parseInt(ownProps.match.params.messageId))
 
  if (message) {
    return { message }
  } else {
    return { message: {} }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteMessage: () => dispatch(deleteMessage())
  };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(MessageShow);
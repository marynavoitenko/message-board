import React from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message'
 
const MessageShow = ({ message }) =>
  <div>
    <Message message={message} />
  </div>
 
const mapStateToProps = (state, ownProps) => {
  const message = state.messages.messages.find(message => message.id === parseInt(ownProps.match.params.messageId))
 
  if (message) {
    return { message }
  } else {
    return { message: {} }
  }
}
 
export default connect(mapStateToProps)(MessageShow);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/Message'
 
class MessageShow extends Component {

  render() {
    return (
      <div> 
        <Message message={this.props.message} />
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
 
export default connect(mapStateToProps)(MessageShow);
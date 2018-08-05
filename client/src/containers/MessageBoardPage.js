import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesList from '../components/MessagesList';

class MessageBoardPage extends Component {
    render() {
        const messages = this.props;
        return (
            <div>
                <MessagesList messages={messages} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
}
  
export default connect(mapStateToProps)(MessageBoardPage);
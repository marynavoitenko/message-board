import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesList from '../components/MessagesList';
import { fetchMessages } from '../actions/messagesActions';
import MessagesNew from './MessagesNew'

class MessageBoardPage extends Component {
    componentDidMount() {
        console.log("inside component did mount");
        console.log(`${this.props.messages.length}`);
        if (this.props.messages.length === 0) {
            this.props.fetchMessages();
        }
    }  

    render() {
        const messages = this.props.messages;
        return (
            <div>
                <MessagesList messages={messages} />
                <MessagesNew />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages.messages
    };
}

const mapDispatchToProps = dispatch => {
    return {
      fetchMessages: () => dispatch(fetchMessages())
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(MessageBoardPage);
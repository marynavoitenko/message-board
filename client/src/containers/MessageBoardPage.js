import React, { Component } from 'react';
import { connect } from 'react-redux';
import MessagesList from '../components/MessagesList';
import { fetchMessages } from '../actions/messagesActions';

class MessageBoardPage extends Component {
    componentDidMount() {
        console.log("inside component did mount")
        this.props.fetchMessages();
    }  

    render() {
        const messages = this.props;
        return (
            <div>

                {/* <MessagesList messages={messages} /> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    };
}

const mapDispatchToProps = dispatch => {
    return {
      fetchMessages: () => dispatch(fetchMessages())
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(MessageBoardPage);
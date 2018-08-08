import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
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
        const { messages, match } = this.props;
        return (
            <div>
                <MessagesList messages={messages} />
                <Switch>
                    <Route path={`${match.url}/new`} component={MessagesNew} />
                    
                </Switch>
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
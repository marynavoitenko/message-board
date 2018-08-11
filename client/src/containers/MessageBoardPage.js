import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import MessagesList from '../components/MessagesList';
import { fetchMessages } from '../actions/messagesActions';
import MessagesNew from './MessagesNew';
import MessageShow from './MessageShow';

class MessageBoardPage extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }

    render() {
        const { messages, match } = this.props;
        return (
            <div className="message-board-page">
                <Switch>
                    <Route exact path={`${match.url}/new`} component={MessagesNew} />
                    <Route path={`${match.url}/:messageId`} component={MessageShow}/>
                    <Route exact path={match.url} render={() => <MessagesList messages={messages} />} /> 
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
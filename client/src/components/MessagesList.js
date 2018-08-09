import React from 'react';
import Message from './Message';

const MessagesList = ({ messages }) => {
  const renderMessages = messages.map(message => 
    <Message key={message.id} message={message} />
  );
  
  return (
    <div className="message-list">
      {renderMessages}
    </div>
  );
};

export default MessagesList;
import React from 'react';
import Message from './Message';

const MessagesList = ({ messages }) => {
  const renderMessages = messages.map(message => 
    <Message key={message.id} message={message} />
  );
  
  return (
    <div>
      {renderMessages}
    </div>
  );
};

export default MessagesList;
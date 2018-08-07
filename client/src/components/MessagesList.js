import React from 'react';

const MessagesList = ({ messages }) => {
  const renderMessages = messages.map(message => 
    <li key={message.id}>{message.content}</li>
  );

  return (
    <ul>
      {renderMessages}
    </ul>
  );
};

export default MessagesList;
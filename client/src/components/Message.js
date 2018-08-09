import React from 'react';

const Message = ({ message }) => {
  const sender = message.sender;
  const recipient = message.recipient;

  return (
    <div className="message-card">
        <br />
        {sender ? <div>From: {message.sender.name}</div> : null }

        {recipient ? <div>To: {message.recipient.name}</div> : null }

        {message.content}
        <br />
    </div>
  );
};

export default Message;
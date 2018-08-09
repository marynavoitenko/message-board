import React from 'react';

const Message = ({ message }) => {
  const sender = message.sender;
  const recipient = message.recipient;

  return (
    <div className="message-card">
        <br />
        {sender ? <p>From: {message.sender.name}</p> : null }

        {recipient ? <p>To: {message.recipient.name}</p> : null }

        {message.content}
        <br />
    </div>
  );
};

export default Message;
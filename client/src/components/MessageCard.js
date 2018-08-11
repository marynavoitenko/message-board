import React from 'react';

const MessageCard = ({ message }) => {
  const sender = message.sender;
  const recipient = message.recipient;

  const longMessage = message.content.length > 140;

  return (
    <div className="message-card">
        { (sender || recipient) ?
            <div className="message-card-header">
              {sender ? <span className="sender">From: {message.sender.name}</span> : null }

              {recipient ? <span className="recipient">To: {message.recipient.name}</span> : null }
            </div>
            : null
        }

        <div className="message-card-main">
          {longMessage ? `${message.content.slice(0, 140)}...` : message.content}
        </div>
    </div>
  );
};

export default MessageCard;
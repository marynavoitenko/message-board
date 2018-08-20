import React from 'react';

const MessageCard = ({ message }) => {
  const { sender, recipient, content } = message;

  const longMessage = content.length > 140;

  return (
    <div className="message-card">
        { (sender || recipient) ?
            <div className="message-card-header">
              {sender ? <span className="sender">From: {sender.name}</span> : null }

              {recipient ? <span className="recipient">To: {recipient.name}</span> : null }
            </div>
            : null
        }

        <div className="message-card-main">
          {longMessage ? `${content.slice(0, 140)}...` : content}
        </div>
    </div>
  );
};

export default MessageCard;
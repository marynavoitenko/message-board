import React from 'react';

const Message = ({ message }) => {
  const sender = message.sender;
  const recipient = message.recipient;

  return (
    <div className="single-message-page">
        <div className="message-card message-card-fullpage">
            { (sender || recipient) ?
                <div className="message-card-header">
                {sender ? <span className="sender">From: {message.sender.name}</span> : null }

                {recipient ? <span className="recipient">To: {message.recipient.name}</span> : null }
                </div>
                : null
            }

            <div className="message-card-main">
                {message.content}
            </div>
            <button  className="delete-message-button">
                Delete
            </button>
        </div>
    </div>
  );
};

export default Message;
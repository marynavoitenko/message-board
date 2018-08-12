import fetch from 'isomorphic-fetch';

export function fetchMessages() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        return fetch('/messages/most_recent')
            .then(response => response.json())
            .then(responseJSON => {
                console.log("Fetched messages: ", responseJSON);
                dispatch({ type: 'FETCH_MESSAGES', payload: responseJSON });
            })
    };
};

export function addMessage(message) {
    console.log("Message to be added: ", message);
    const newMessage = {
        content: message.content,
        sender_attributes: {
            name: message.sender_name
        },
        recipient_attributes: {
            name: message.recipient_name
        }
    };
    console.log("Formatted message: ", newMessage);
    
    return (dispatch) => {
        dispatch({ type: 'ADDING_MESSAGE' });
        return fetch('/messages', {
            method: 'POST', 
            body: JSON.stringify({ message: newMessage }),
            headers:{ 'Accept': "application/json",
               "Content-Type": "application/json"}
          }).then(response => response.json())
            .then(message => {
                dispatch({ type: 'ADD_MESSAGE_SUCCESS', payload: message });
            })
    };
};

export function deleteMessage(messageId) {
    return (dispatch) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            dispatch({ type: 'DELETING_MESSAGE' });
            return fetch(`/messages/${messageId}`, {
                method: 'DELETE'
            }).then(response => {
                if (response.ok) {
                    dispatch({ type: 'DELETE_MESSAGE_SUCCES', deletedMessageId: messageId })
                }
            })
        }
    };
};
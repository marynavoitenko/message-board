import fetch from 'isomorphic-fetch';

export function fetchMessages() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        return fetch('/messages')
            .then(response => response.json())
            .then(responseJSON => {
                console.log(responseJSON);
                dispatch({ type: 'FETCH_MESSAGES', payload: responseJSON });
            })
    };
};

export function addMessage(message) {
    console.log(message);
    const newMessage = {
        content: message.content,
        sender_attributes: {
            name: message.sender_name
        },
        recipient_attributes: {
            name: message.recipient_name
        }
    };
    console.log(newMessage);
    
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
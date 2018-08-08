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
    return (dispatch) => {
        dispatch({ type: 'ADDING_MESSAGE' });
        return fetch('/messages', {
            method: 'POST', 
            body: JSON.stringify({ message: message })
          }).then(response => response.json())
            .then(message => {
                dispatch({ type: 'ADD_MESSAGE_SUCCESS', payload: message });
            })
    };
};
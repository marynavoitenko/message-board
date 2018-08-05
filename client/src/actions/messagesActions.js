import fetch from 'isomorphic-fetch';

export function fetchMessages() {
    return (dispatch) => {
        dispatch({ type: 'LOADING_MESSAGES' });
        return fetch('http://localhost:3001/messages')
            .then(response => response.json())
            .then(responseJSON => {
                console.log(responseJSON);
                dispatch({ type: 'FETCH_MESSAGES', payload: responseJSON });
            })
    };
};
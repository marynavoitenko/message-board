export default (state = {
  isFetching: false,
  isPosting: false,
  isDeleting: false,
  messages: [],
  message: {}
}, action) => {
    switch (action.type) {

      case 'LOADING_MESSAGES':
        return {
          ...state,
          isFetching: true
        }
        
      case 'FETCH_MESSAGES':
        return {
          messages: action.payload,
          isFetching: false
        }

      case 'ADDING_MESSAGE':
        return {
          ...state,
          isPosting: true
        }  

      case 'ADD_MESSAGE_SUCCESS':
        return {
          ...state,
          message: state.messages.concat(action.payload)
        }

      case 'DELETING_MESSAGE':
        console.log(state.isDeleting);
        return {
          ...state,
          isDeleting: true
        } 
      
      case 'DELETE_MESSAGE_SUCCES':
        const messages = state.messages.filter(message => message.id !== parseInt(action.deletedMessageId, 10));
        return { messages };

      default:
        return state;
    }
  };
  
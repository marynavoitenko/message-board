export default (state = {
  isFetching: false,
  isPosting: false,
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
        return [ ...state, action.payload ];

      default:
        return state;
    }
  };
  
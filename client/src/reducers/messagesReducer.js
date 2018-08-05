export default (state = {
  isFetching: false,
  messages: []
}, action) => {
    switch (action.type) {
  
      case 'ADD_MESSAGE':
        return [ ...state, action.message ];
      
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
  
      default:
        return state;
    }
  };
  
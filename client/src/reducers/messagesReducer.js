export default (state = [], action) => {
    switch (action.type) {
  
      case 'ADD_MESSAGE':
        return [ ...state, action.message ];
  
      case 'FETCH_MESSAGES':
        return action.messages;
  
      default:
        return state;
    }
  };
  
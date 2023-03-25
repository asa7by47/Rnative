const initialState = {
    isLoading: false,
    error: null,
    isLoggedIn: false,
    user: null,
  };
  
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoading: false,
          isLoggedIn: true,
          user: action.payload,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;
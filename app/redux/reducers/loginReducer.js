const loginReducer = (state = {feedbacks: []}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        email: action.payload.email,
        loginStatus: true,
        token: action.payload.token,
        username: action.payload.name,
        feedbacks: action.payload.feedbacks,
      };

    case 'ADD_NAME':
      return state;

    case 'LOGOUT':
      return {};

    default:
      return state;
  }
};

export default loginReducer;

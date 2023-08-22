import { createStore } from 'redux';

const initialState = {
  isAuthenticated: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { isAuthenticated: true };
    case 'LOGOUT':
      return { isAuthenticated: false };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;

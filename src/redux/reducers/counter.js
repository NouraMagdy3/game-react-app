const initialState = {
  ReduxCounter: 0,
};

//reducer function take 2 parameters , the oldState and the action which return newState
//all states in our reducers is accessible from any component in our app
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_COUNTER":
      return { ...state, ReduxCounter: state.ReduxCounter + 1 };
    default:
      return state;
  }
};

export default counterReducer;

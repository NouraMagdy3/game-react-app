const initialState = {
  games: [],
};

const ReduxGames = (state = initialState, action) => {
  switch (action.type) {
    case "SET_GAMES":
      return { ...state, games: action.payload }; //games that will added
    default:
      return state;
  }
};

export default ReduxGames;

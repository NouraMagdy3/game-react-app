const initialState = {
  cart: [],
};

const ReduxCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] }; //to added to cart 
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter((game) => game.id !== action.payload)}; //to remove from cart 
    default:
      return state;
  }
};

export default ReduxCart;

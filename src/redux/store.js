import { createStore, combineReducers } from "redux"; //createStore is afunction
import counterReducer from "./reducers/counter";
import ReduxGames from "./reducers/games"; //we want games to be use in any component as a global variable
import ReduxCart from "./reducers/cart";


//const store = createStore(counterReducer); //createStore is for one reducer only
//we using combineReducers because we have ore than one reducer , to combination it
const rootReducer = combineReducers({
    cr: counterReducer,
    gr: ReduxGames,
    ct: ReduxCart,
});

const store = createStore(rootReducer);

export default store;
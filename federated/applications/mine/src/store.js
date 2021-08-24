import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const randomNames = [
    "Axe",
    "Abbadon",
    "Winter Wyvern",
    "Invoker",
    "Sniper"
]

const reducer = (state = { users: [] }, { type, payload }) => {
    switch(type) {
        case "SET_USERS":
            return {
                state,
                ...payload,
            };
        default:
            return state;
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, null, composeEnhancers(applyMiddleware(thunk)));

store.dispatch({
    type: "SET_USERS",
    payload: {
        users: randomNames,
    },
});

console.log('states', store.getState());

export default store;

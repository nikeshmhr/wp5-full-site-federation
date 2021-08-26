import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import mineReducer from 'mine/reducer';
import { getCartItems } from "./checkout";
import adminReducer from 'admin/reducer';

const reducer = (state = [], { type, payload }) => {
  switch (type) {
      case "SET_ITEMS":
      return [...payload];
    default:
      return state;
  }
};

const combinedReducer = combineReducers({
    items: reducer,
    users: mineReducer,
    admin: adminReducer
});

const composeEnhancers = process.env.NODE_ENV !== 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
const store = createStore(combinedReducer, composeEnhancers(applyMiddleware(thunk)));

store.dispatch((dispatch) =>
  getCartItems().then(({ items }) =>
    dispatch({
      type: "SET_ITEMS",
      payload: items,
    })
  )
);

export default store;

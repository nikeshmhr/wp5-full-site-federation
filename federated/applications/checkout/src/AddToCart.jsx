import React from "react";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";

import { addToCart } from "./checkout";

const AddToCart = ({ pokemon, addToCart }) => (
  <Button
    secondary
    onClick={() => addToCart(pokemon)}
    style={{ width: "100%" }}
  >
    Add To Cart
  </Button>
);

const postAddToCart = (pokemon) => (dispatch) =>
  addToCart(pokemon).then((payload) => {
      dispatch({
          type: "SET_ITEMS",
          payload: payload.items,
      });

      // Dispatching state update in another app
      dispatch({
          type: "ADD_USER",
          payload: "Nikesh"
      })
  });

export default connect(
  () => ({}),
  (dispatch) => ({
    addToCart: (pokemon) => dispatch(postAddToCart(pokemon)),
  })
)(AddToCart);

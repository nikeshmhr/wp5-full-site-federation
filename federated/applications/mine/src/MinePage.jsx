import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import Frame from "home/Frame";
import store from "checkout/store";

import "bootstrap/dist/css/bootstrap.min.css";

const MinePage = () => (
    <Provider store={store}>
        <Frame page="mine"/>
    </Provider>
);

ReactDOM.render(<MinePage/>, document.getElementById("app"));

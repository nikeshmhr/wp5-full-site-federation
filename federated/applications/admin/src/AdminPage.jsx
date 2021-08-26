import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from "checkout/store";

import "bootstrap/dist/css/bootstrap.min.css";
import Frame from "home/Frame";

const AdminPage = () => (
        <Provider store={store}>
            <Frame page="admin" />
        </Provider>
);

ReactDOM.render(<AdminPage/>, document.getElementById("app"));

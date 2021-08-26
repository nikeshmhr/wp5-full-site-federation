import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AdminContent from './AdminContent';

import store from "checkout/store";

import "bootstrap/dist/css/bootstrap.min.css";

const AdminPage = () => (
        <Provider store={store}>
            <AdminContent />
        </Provider>
);

ReactDOM.render(<AdminPage/>, document.getElementById("app"));

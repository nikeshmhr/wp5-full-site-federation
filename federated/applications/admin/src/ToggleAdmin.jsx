import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

function ToggleAdmin() {
    const isAdmin = useSelector(state => state.admin);
    const dispatch = useDispatch();
    const toggleAdmin = useCallback(() => {
        dispatch({type: "TOGGLE_IS_ADMIN"});
    }, [dispatch]);

    return <button onClick={toggleAdmin}>Toggle to {isAdmin ? 'Non-Admin' : 'Admin'}</button>
}

export default ToggleAdmin;
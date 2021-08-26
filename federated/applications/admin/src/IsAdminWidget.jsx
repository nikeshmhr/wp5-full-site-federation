import React from 'react';
import { useSelector } from "react-redux";


const IsAdminWidget = () => {
    const isAdmin = useSelector(state => state.admin);

    return <span color="white">{isAdmin === true ? '' : 'Not'} Admin</span>
}

export default IsAdminWidget;
import React from 'react';
import { useSelector } from "react-redux";

const MineContent = () => {
    const state = useSelector(state => state);
    return <div>
        <h2>Content of Store</h2>
        <pre>{JSON.stringify(state, '', 2)}</pre>
    </div>
};

export default MineContent;
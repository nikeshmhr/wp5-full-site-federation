import React from 'react';
import { useSelector } from "react-redux";

const LazyToggleAdmin = React.lazy(() => import('admin/ToggleAdmin'));
const ToggleAdmin = () => (
        <React.Suspense fallback={"Loading..."}>
            <LazyToggleAdmin/>
        </React.Suspense>
)

const MineContent = () => {
    const state = useSelector(state => state);
    return <div>
        <h2>Content of Store</h2>
        <pre>{JSON.stringify(state, '', 2)}</pre>

        <ToggleAdmin />
    </div>
};

export default MineContent;
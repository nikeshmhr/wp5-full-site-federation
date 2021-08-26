// import React, { useEffect, useState } from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { Auth } from "aws-amplify";
//
// const PublicRoute = ({ ...props }) => {
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//
//     useEffect(() => {
//         async function checkAuth() {
//             try {
//                 if(await Auth.currentAuthenticatedUser()) {
//                     setIsAuthenticated(true);
//                 }
//             } catch(e) {
//             }
//         }
//
//         checkAuth();
//     }, []);
//
//     return isAuthenticated ? <Redirect to="/"/> : <Route {...props} />;
// };
//
// export default PublicRoute;

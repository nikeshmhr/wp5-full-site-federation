// import React, { useState, useEffect } from 'react';
// import { Route, Redirect, useHistory, withRouter } from 'react-router-dom';
// import Amplify, { Auth } from 'aws-amplify';
// import config from './config';
// import { useDispatch } from "react-redux";
//
// // Load amplify configs
// Amplify.configure(config);
// // Auth.configure({ oauth: config['oauth'] });
//
// const PrivateRoute = ({ component: Component, ...rest }) => {
//     const [isLoaded, setIsLoaded] = useState(false);
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//     let history = useHistory();
//     const [loggedIn, setLoggedIn] = useState(false);
//     const dispatch = useDispatch();
//
//     useEffect(() => {
//         let isUnmounted = false;
//
//         async function checkAuth() {
//             if(!loggedIn) {
//                 await Auth.currentAuthenticatedUser()
//                         .then((data) => {
//                             setLoggedIn(true);
//                         })
//                         .catch(() => {
//                             history.push('/login');
//                         });
//             }
//
//             if(!isUnmounted) {
//                 setIsAuthenticated(true);
//                 setIsLoaded(true);
//             }
//         }
//
//         checkAuth();
//
//         return () => {
//             isUnmounted = true;
//         };
//     }, [history, loggedIn, dispatch]);
//
//     if(!isLoaded) return null;
//
//     return (
//             <Route
//                     {...rest}
//                     render={(props) => (
//                             isAuthenticated ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }}/>
//                     )}
//             />
//     );
// };
//
// export default withRouter(PrivateRoute);

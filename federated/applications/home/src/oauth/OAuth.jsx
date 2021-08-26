// import { withOAuth } from 'aws-amplify-react';
// import React from 'react';
// import { Auth } from 'aws-amplify';
//
// function OAuth() {
//     return (
//             <div className={`d-flex justify-content-center ${loginBg}`}>
//                 <div className={`d-flex justify-content-center align-items-start ${loginWrp}`}>
//                     <div className={hlogin}>
//                         <img className={titlelogo} alt="HLE Logo" src="img/login_icons/logo.svg"/>
//                         <button
//                                 className={googleBtn}
//                                 onClick={() => Auth.federatedSignIn({ provider: 'Google' })}>
//                             {' '}
//                             <span>
//                             {' '}
//                                 <img className={gi} alt="Google Logo"
//                                      src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"/>
//                         </span>
//                             {' '}
//                             <div className="d-flex justify-content-center">Sign in with Google</div>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//     );
// }
//
// export default withOAuth(OAuth);

export default function OAuth() {
    return <div>Login Page</div>
}
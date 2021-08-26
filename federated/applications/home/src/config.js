require('dotenv').config()

console.log('env', process.env);

export default {
    oauth: {
        domain: 'id.dev.homeloanexperts.net.au',
        scope: ['email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: 'http://localhost:3001',
        redirectSignOut: 'http://localhost:3001',
        responseType: 'code',
        options: {
            AdvancedSecurityDataCollectionFlag: true
        }
    },
    amplify: {
        Auth: {
            // REQUIRED - Amazon Cognito Identity Pool ID
            identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
            // REQUIRED - Amazon Cognito Region
            region: process.env.REACT_APP_AWS_REGION,
            // OPTIONAL - Amazon Cognito User Pool ID
            userPoolId: process.env.REACT_APP_USER_POOL_ID,
            // OPTIONAL - Amazon Cognito Web Client ID
            userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEBCLIENT_ID
        },
        API: {
            endpoints: []
        }
    }
}
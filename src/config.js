

const config = {
    Auth: {
      region: 'ap-southeast-2',
      userPoolId: 'ap-southeast-2_zhv0GsdHf',
      userPoolWebClientId: '62qribv57pr4d9607e6n4rmr59',
      oauth: {
        domain: 'https://service-user-pool-domain-dev-donwij.auth.ap-southeast-2.amazoncognito.com',
        scope: ['email', 'profile', 'openid'],
        // scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        redirectSignIn: window.location.origin,
        redirectSignOut: window.location.origin,
        responseType: 'token'
      }
    },
    API: {
      endpoints:[
        {
          name: "baseApi",
          endpoint: "https://xuibecujil.execute-api.ap-southeast-2.amazonaws.com"
        }]
    }
  };
  
  export default config;
  
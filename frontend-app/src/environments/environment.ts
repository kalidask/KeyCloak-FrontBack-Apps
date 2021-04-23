export const environment = {
  production: false,
  apiUrl: 'http://localhost:8280', //Spring Boot API


  //Keycloak configuration
  keycloak: {
    keycloakUrl: 'http://localhost:8180/auth',
    realm: 'demo',
    clientId: 'angular-client',
//    "credentials": {
 //   "secret": "c6250098-662d-4e3e-8400-f241a88ac251"
//  } ,
    redirectUri: 'http://localhost:4200'
  }

};


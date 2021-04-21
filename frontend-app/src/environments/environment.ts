export const environment = {
  production: false,
  apiUrl: 'http://localhost:8180', //Spring Boot API


  //Keycloak configuration
  keycloak: {
    keycloakUrl: 'http://localhost:8080/auth',
    realm: 'demo',
    clientId: 'angular-client',
    "credentials": {
    "secret": "8fca89d9-aee7-47e6-b5cc-935e774722fb"
  } ,
    redirectUri: 'http://localhost:4200'
  }

};


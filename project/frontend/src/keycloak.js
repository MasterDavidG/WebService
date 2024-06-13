import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://keycloak:8080/auth',
  realm: 'myrealm',
  clientId: 'frontend-client'
});

export default keycloak;

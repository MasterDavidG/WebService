import Keycloak from 'keycloak-js';

// Конфигуриране на Keycloak
const keycloak = Keycloak({
  url: 'http://localhost:8080/auth',
  realm: 'myrealm',
  clientId: 'frontend-client'
});

keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
  if (authenticated) {
    console.log('Authenticated');
    // Вашето приложение започва тук
  } else {
    console.warn('Not authenticated');
  }
}).catch(err => {
  console.error('Failed to initialize Keycloak', err);
});

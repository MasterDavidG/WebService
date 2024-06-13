// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import keycloak from './keycloak';
import { OidcProvider } from '@axa-fr/react-oidc-context';

// Keycloak initialization options
const initOptions = {
  onLoad: 'login-required', // Require login immediately
  checkLoginIframe: false   // Disable checking login status in an iframe
};

keycloak.init(initOptions).then(authenticated => {
  if (!authenticated) {
    window.location.reload();
  } else {
    console.log("Authenticated");
  }

  // Render your app wrapped with the OIDC provider
  ReactDOM.render(
    <OidcProvider configuration={{
      client_id: 'frontend-client',
      redirect_uri: window.location.origin,
      silent_redirect_uri: window.location.origin,
      authority: 'http://localhost:8081/realms/myrealm',
      refresh_time_before_tokens_expiration_in_second: 70
    }}>
      <App />
    </OidcProvider>,
    document.getElementById('root')
  );

  // Save the token for use in your app
  localStorage.setItem("keycloak-token", keycloak.token);
  localStorage.setItem("keycloak-refresh-token", keycloak.refreshToken);

  // Set a timer to automatically refresh the token
  setInterval(() => {
    keycloak.updateToken(70).then(refreshed => {
      if (refreshed) {
        console.log('Token refreshed', refreshed);
        localStorage.setItem("keycloak-token", keycloak.token);
        localStorage.setItem("keycloak-refresh-token", keycloak.refreshToken);
      } else {
        console.warn('Token not refreshed, valid for only ' +
          Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
      }
    }).catch(() => {
      console.error('Failed to refresh token');
    });
  }, 60000);

}).catch(() => {
  console.error("Authentication Failed");
});

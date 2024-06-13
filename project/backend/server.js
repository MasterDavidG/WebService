// server.js 
const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const app = express();

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'http://keycloak:8080/auth/realms/myrealm/protocol/openid-connect/certs'
  }),
  audience: 'backend-client',
  issuer: 'http://keycloak:8080/auth/realms/myrealm',
  algorithms: ['RS256']
});

app.use(checkJwt);

app.get('/secure-endpoint', (req, res) => {
  res.send('Това е защитена страница.');
});

app.listen(3000, () => {
  console.log('Backend service running on port 3000');
});

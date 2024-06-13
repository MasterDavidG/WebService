const passport = require('passport');
const { Strategy } = require('passport-openidconnect');

passport.use('oidc', new Strategy({
  issuer: 'http://localhost:8080/auth/realms/master',
  authorizationURL: 'http://localhost:8080/auth/realms/master/protocol/openid-connect/auth',
  tokenURL: 'http://localhost:8080/auth/realms/master/protocol/openid-connect/token',
  clientID: 'your-client-id',
  clientSecret: 'your-client-secret',
  callbackURL: 'http://localhost:3000/callback',
  scope: 'openid profile email'
}, (issuer, sub, profile, accessToken, refreshToken, done) => {
  return done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

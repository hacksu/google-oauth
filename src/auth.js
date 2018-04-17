const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use(new GoogleStrategy({
            clientID: '172522245692-mv2bn8qom5uckijq7sacptivuja8pqrd.apps.googleusercontent.com',
            clientSecret: 'jL_pFdsUoz58cO9FcMjl0TtY',
            callbackURL: 'http://localhost:3000/google/res'
        },
        (token, refreshToken, profile, done) => {
            return done(null, {
                profile: profile,
                token: token
            });
        }));
};
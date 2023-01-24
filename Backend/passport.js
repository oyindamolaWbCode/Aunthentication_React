const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = "494694620352-hlb2940gknb2qj0a6ob1raiilc08blck.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
   done(null, profile)
  }
));

passport.serializeUser((user, done) =>{
    done(null, user)
})

passport.deserializeUser((user, done) =>{
    done(null, user)
})
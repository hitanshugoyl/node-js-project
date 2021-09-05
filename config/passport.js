const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local');

const Users = mongoose.model('Users');

passport.use(new LocalStrategy({
  usernameField: 'user[email]',
  passwordField: 'user[password]',
}, (email, password, done) => {
  Users.findOne({ email })
    .then((user) => {
      if(!user || !user.validatePassword(password)) {
        return done(null, false, { errors: { 'email or password': 'is invalid' } });
      }

      if(user.validatePassword(password).length < 8) {
        return done(null, false, { errors: { 'password': 'should be more than 8 characters' } });
      }
      
      if(user.validatePassword(password).length > 8) {
        return done(null, false, { errors: { 'password': 'should be less than 30 characters' } });
      }

      return done(null, user);
    }).catch(done);
}));
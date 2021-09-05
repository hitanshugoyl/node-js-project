const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const Signin = require('./mongologin schema');


module.exports = (passport) => {
    passport.use(
        new LocalStrategy({ usernameField: email},
            (email, password, username, done ) => {

                Signin.findOne({email})

                .then(username =>{
                    //user not found
                if(!username){
                    return done(null, false, {msg: 'Email not registered'});
                }
                //incorrect password
                if(!username.validPassword(password)){
                            return done(null, false, {msg: 'Incorrect Password'});

                        }
                        //authentication successful
                        return done(null, username );
                    
                })
                //unexpected error
                .catch(err =>{
                    return done(err);
                })

            
            }));
        };

            //store session in cookie set
        passport.serializeUser((Signin, done) =>{
            done(null, Signin.username);
        });
        // extract unique id for maintaining session
        passport.deserializeUser((username,done) =>{
            Signin.findbyId(username, (err, user) =>{
                done(err, user);
            });
        });
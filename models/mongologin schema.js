const mongoose = require('mongoose');
const schema = mongoose.schema;

const login_schema = new schema({
    
    username: { type: String,
        required: true

    },
    
    
        email: { type: String,
            required: true
    
        },
    
        password: { type: String,
            required: true
        
        },
},{timestamps: true})



// login_schema.pre("save", function (next) {
//     const signup = this
  
//     if (this.isModified("password") || this.isNew) {
//       bcrypt.genSalt(10, function (saltError, salt) {
//         if (saltError) {
//           return next(saltError)
//         } else {
//           bcrypt.hash(signup.password, salt, function(hashError, hash) {
//             if (hashError) {
//               return next(hashError)
//             }
  
//             signup.password = hash
//             next()
//           })
//         }
//       })
//     } else {
//       return next()
//     }
//   })
  
 const Signin = mongoose.model('Signup', login_schema );
//   module.exports = mongoose.model('Signup', login_schema );
module.exports = Signin;

// // // //password queries and login page show krna hai sir ko
// // // const express = require('express');
// // // const app = express();
// // // const bcrypt = require('bcrypt');

// // // const morgan = require('morgan');

// // // const mongoose = require('mongoose');

// // // const signup = require('./models/mongologin schema');


// // // const bodyParser = require('body-parser'); // middleware for login page

// // // app.use(bodyParser.urlencoded({ extended: false }));

// // // const dbURI = 'mongodb+srv://hitanshu:<hitanshu>@cluster0.3exwn.mongodb.net/hitanshu?retryWrites=true&w=majority';
// // // mongoose.connect(dbURI, { useNewUrlParser: true , useUnifiedTopology: true});
// // //    app.then((result) => app.listen(3000))
// // //    .catch((err) => console.log(err));
// // //    app.use(require("express-session")({
// // //       secret:"Any normal Word",//decode or encode session
// // //           resave: false,          
// // //           saveUninitialized:false    
// // //       }));

// // //    app.set('view enjine','ejs'); // register view engine

// // //    app.use(express.static('public'));
// // //    app.use(express.urlencoded({extended: true}));
// // //    app.use(morgan('dev'));


// // // //=======================
// // // //      R O U T E S
// // // //=======================
// // // app.get("/", (req,res) =>{
// // //     res.sendFile("main");
// // // })
// // // // app.get("/userprofile" ,(req,res) =>{
// // // //     res.sendFile("userprofile");
// // // // })
// // // //Auth Routes
// // // app.get("/login",(req,res)=>{
// // //     res.sendFile("login");
// // //     console.log("login page sent");
// // // });
// // // app.get("/signup",(req,res)=>{
// // //     res.sendFile("register");
// // //     console.log("signup page sent");
// // // });

// // // app.post('/register', async (req, res) => {
// // //    try{
// // //        let foundUser = users.find((data) => req.body.email === data.email);
// // //        if (!foundUser) {

// // //            let hashPassword = await bcrypt.hash(req.body.password, 10);

// // //            let newUser = {
// // //                id: Date.now(),
// // //                username: req.body.username,
// // //                email: req.body.email,
// // //                password: hashPassword,
// // //            };
// // //            users.push(newUser);
// // //            console.log('User list', users);

// // //            res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
// // //        } else {
// // //            res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
// // //        }
// // //    } catch{
// // //        res.send("Internal server error");
// // //    }
// // // });

// // // app.post('/login', async (req, res) => {
// // //    try{
// // //        let foundUser = users.find((data) => req.body.email === data.email);
// // //        if (foundUser) {

// // //            let submittedPass = req.body.password; 
// // //            let storedPass = foundUser.password; 

// // //            const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
// // //            if (passwordMatch) {
// // //                let usrname = foundUser.username;
// // //                res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='./login.html'>logout</a></div>`);
// // //            } else {
// // //                res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
// // //            }
// // //        }
// // //        else {

// // //            let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
// // //            await bcrypt.compare(req.body.password, fakePass);

// // //            res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
// // //        }
// // //    } catch{
// // //        res.send("Internal server error");
// // //    }
// // // });







// // const http = require('http');
// // const express = require('express')// Include ExpressJS
// // const app = express() // Create an ExpressJS app
// // const bodyParser = require('body-parser'); // Middleware
// // const mongoose = require('mongoose');
// // const morgan = require('morgan');
// // app.use(express.static('public'));
// // app.use(express.urlencoded({ extended: true }));
// // app.use(morgan('dev'));

// // mongoose.connect('mongodb+srv://hitanshu:<hitanshu24>@cluster0.3exwn.mongodb.net/hitanshu?retryWrites=true&w=majority');
// //     try {
// //         console.log("coonected to mongo database");
// //     } catch (error) {
// //         console.log(error);
// //     }
// // app.use(require("express-session")({
// // secret:"Any normal Word",//decode or encode session
// //     resave: false,          
// //     saveUninitialized:false    
// // }));


// // // app.set('view enjine', 'ejs'); 

// // //=======================
// // //      R O U T E S
// // //=======================

// // const server = http.createServer(app);
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(express.static(path.join(__dirname,'./public')));

// // app.get('/',(req,res) => {
// //     res.sendFile(path.join(__dirname,'./public/home.html'));
// // });
// // // app.get("/dashboard" ,(req,res) =>{
// // //     res.sendFile("dashboard.html");
// // // })
// // // //Auth Routes
// // // app.get("/login",(req,res)=>{
// // //     res.sendFile("login.html");
// // // });
// // // app.get("/register",(req,res)=>{
// // //     res.sendFile("register.html");
// // // });

// // // app.post('/login', (req, res) => {
// // //     // Insert Login Code Here
// // //     let username = req.body.username;
// // //     let password = req.body.password;
// // //     res.send(`Username: ${username} Password: ${password}`);
// // // });

// // const port = 3000 // Port we will listen on

// // // Function to listen on the port
// // app.listen(process.env.PORT ||3000, () => {
// //     // if(err){
// //     //     console.log(err);

       
// //     // }else {
// //     console.log("Server Started At Port 3000");  });
// //     //to prevent storage of unuseful information
// //     app.use(require("express-session")({
// //         secret:"Any normal Word",//decode or encode session
// //             resave: false,          
// //             saveUninitialized:false    
// //         }));



// const express = require('express');
// const http = require('http');
// const bcrypt = require('bcrypt');
// const path = require("path");
// const bodyParser = require('body-parser');
// const users = require('./data').userDB;

// const app = express();
// const server = http.createServer(app);

// app.use(bodyParser.urlencoded({extended: false}));
// app.use(express.static(path.join(__dirname,'./public')));


// app.get('/',(req,res) => {
//     res.sendFile(path.join(__dirname,'./public/home.html'));
// });


// app.post('/register', async (req, res) => {
//     try{
//         let foundUser = users.find((data) => req.body.email === data.email);
//         if (!foundUser) {
    
//             let hashPassword = await bcrypt.hash(req.body.password, 10);
    
//             let newUser = {
//                 id: Date.now(),
//                 username: req.body.username,
//                 email: req.body.email,
//                 password: hashPassword,
//             };
//             users.push(newUser);
//             console.log('User list', users);
    
//             res.send("<div align ='center'><h2>Registration successful</h2></div><br><br><div align='center'><a href='./login.html'>login</a></div><br><br><div align='center'><a href='./registration.html'>Register another user</a></div>");
//         } else {
//             res.send("<div align ='center'><h2>Email already used</h2></div><br><br><div align='center'><a href='./registration.html'>Register again</a></div>");
//         }
//     } catch{
//         res.send("Internal server error");
//     }
// });

// app.post('/login', async (req, res) => {
//     try{
//         let foundUser = users.find((data) => req.body.email === data.email);
//         if (foundUser) {
    
//             let submittedPass = req.body.password; 
//             let storedPass = foundUser.password; 
    
//             const passwordMatch = await bcrypt.compare(submittedPass, storedPass);
//             if (passwordMatch) {
//                 let usrname = foundUser.username;
//                 res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${usrname}</h3></div><br><br><div align='center'><a href='./login.html'>logout</a></div>`);
//             } else {
//                 res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='./login.html'>login again</a></div>");
//             }
//         }
//         else {
    
//             let fakePass = `$2b$$10$ifgfgfgfgfgfgfggfgfgfggggfgfgfga`;
//             await bcrypt.compare(req.body.password, fakePass);
    
//             res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align='center'><a href='./login.html'>login again<a><div>");
//         }
//     } catch{
//         res.send("Internal server error");
//     }
// });


// server.listen(3000, function(){
//     console.log("server is listening on port: 3000");
// });

const express = require('express');
import bodyParser = require('body-parser');
const app = express();
app.set('view enjine','ejs');
//const bodyParser = require('body-parser'); // middleware for login page

app.use(bodyParser.urlencoded({urlencoded : true}));




const express = require('express');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require("body-parser");
const connect = require("./utilities/connect")
const keys = require('./config');
require('./models/Fund');
require('./models/Project');
require('./models/User');
require('./controller/passport');


const port = keys.port;
const mongoURI = keys.mongoURI;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

connect(mongoURI);
require('./routes/authRoutes')(app);

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});
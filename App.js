const path = require('path');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet')
const app = express();
const port = process.env.PORT || 5000;
// HandleBars MiddleWare
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');
// DB Config
const db = require('./Config/database')
// Map Global promise - get rid of warning
mongoose.Promise = global.Promise;
// Helmet Middleware
app.use(helmet())
// Connect to mongoose
mongoose.connect(db.mongoURI,{ useNewUrlParser: true, useUnifiedTopology: true} )
.then(()=>console.log('MongoDB Connected...'))
.catch(err => console.log(err));
// body Parser MiddleWare
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
// Declare public folder Static
const publicDir = path.join(__dirname,'public');
app.use(express.static(publicDir));

app.get('/', function (req, res) {
    res.render('index');
});
app.listen(port,() =>
{
    console.log("Starting Server on Port " + port)
}
)
// load up Contact Router
const contact = require("./Routes/contact")
app.use("/contact", contact);
// Load up Service Router
const service = require('./Routes/services')
app.use("/service",service)
// Load Up About
const about = require('./Routes/about')
app.use("/about",about)
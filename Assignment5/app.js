const express = require('express');
const port = 9090;
const app = express();
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');

mongoose.connect('mongodb://localhost:27017/Assign5')
    .then(res => console.log('Database is connected...'))
    .catch(err => console.log(err));

app.use(express.static('static'));
app.use(express.json());
app.use(express.urlencoded({
    extended : false
}))

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const user = require('./router/user');
app.use('/', user);

app.listen(port, () => console.log('Server is run on ' + port))
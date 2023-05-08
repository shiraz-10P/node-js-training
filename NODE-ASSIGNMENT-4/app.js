const express = require('express');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/users');

const PORT = 3000;

app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))

app.use(userRoutes);

console.log(`App is listening on port ${PORT}.`)
app.listen(PORT);

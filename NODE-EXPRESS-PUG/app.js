const PORT = 4000;

const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHandlebars = require('express-handlebars');

const app = express();

app.engine('hbs', expressHandlebars({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', 'not-found-404.html'));
    res.status(404).render('not-found-404', { docTitle: 'Not Found' });
});

app.listen(PORT);
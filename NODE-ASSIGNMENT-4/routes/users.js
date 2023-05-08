const express = require('express');

const router = express.Router();

const users = [];

router.get('/', (req, res, next) => {
    res.render('add-user', { docTitle: 'Add User' });
});

router.post('/users', (req, res, next) => {
    users.push({ userName: req.body.username });
    res.redirect('/');
});

router.get('/users', (req, res, next) => {
    res.render('display-user', { docTitle: 'Users', users: users });
});

module.exports = router;

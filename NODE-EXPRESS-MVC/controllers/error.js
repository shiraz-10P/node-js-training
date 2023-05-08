exports.get404 = (req, res, next) => {
    res.status(404).render('not-found-404', { docTitle: 'Not Found', path: '' });
}

module.exports = function (app) {
    app.get('/', index);
    app.get('/about', about);
};

var index = function (req, res) {
  res.render('index', { title: 'Priya Tirtha | Designer' });
};

var about = function (req, res) {
  res.render('about', { title: 'Priya Tirtha | Designer' });
};
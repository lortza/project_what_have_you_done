var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('legislators', { title: 'Legislator show page' });
});

module.exports = router;
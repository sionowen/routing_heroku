var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  res.sendFile(path.join(__dirname, '../public', file));
});
router.get('/felines', function(req, res) {
  res.send(cats);
});

router.post('/felines', function(req, res) {
  cats.push(req.body.catName);
  res.send(true);
});
module.exports = router;

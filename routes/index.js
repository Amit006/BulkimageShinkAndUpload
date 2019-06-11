var express = require('express');
var router = express.Router();

const fs = require('fs');
const readline = require('readline');
const { google } = require('googleapis');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', breadcrumb: "home"});
});

router.get('/upload', function(req, res, next) {
  // Load client secrets from a local file.
  fs.readFile('credentials.json', (err, content) => {
    if (err) return console.log('Error loading client secret file:', err);
    // Authorize a client with credentials, then call the Google Drive API.
    authorize(JSON.parse(content), listFiles);
  });



});

module.exports = router;

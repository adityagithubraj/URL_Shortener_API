const express = require('express');
const urlController = require('../controllers/urlController');
const authenticateUser = require('../mw/auth'); 

const router = express.Router();


router.post('/shorten', authenticateUser, urlController.shortenUrl);


router.get('/:shortUrl', urlController.redirectToOriginalUrl);

module.exports = router;

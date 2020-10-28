const express = require('express');

const router = express.Router();

const { getIndex, postIndex } = require('../controllers/bonjourController');

router.get('/index', getIndex);

router.post('/index', postIndex);


module.exports = router;
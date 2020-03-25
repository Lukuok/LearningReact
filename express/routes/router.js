const express    = require('express');
const os         = require('os');
const router     = express.Router();
const bodyParser = require('body-parser');

/* Root Page */ 
router.get('/', (req, res) => {
    res.render('index.html');
});

/* API */
router.get('/api/getUsername', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});

module.exports = router;
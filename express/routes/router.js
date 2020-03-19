const express    = require('express');
const os         = require('os');
const router     = express.Router();
const bodyParser = require('body-parser');

/* Root Page */ 
router.get('/', (req, res, next) => {
    console.log(next);
    res.render('hello');
});

/* API */
router.get('/api/getUsername', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});

module.exports = router;
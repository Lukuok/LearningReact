const express = require('express');
const os = require('os');
const router = express.Router();

/* GET home page. */
router.get('/api/getUsername', (req, res, next) => {
    res.send({ username: os.userInfo().username });
});

module.exports = router;
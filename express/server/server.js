const express = require('express');
const path    = require('path');
const os      = require("os");
const router  = require("../routes/router");

const app     = express();
const PORT    = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '..', 'public/')));

// if you need api routes add them here
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});

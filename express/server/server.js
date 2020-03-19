const express    = require('express');
const path       = require('path');
const router     = require('../routes/router');

const app     = express();
const PORT    = process.env.PORT || 4000;


app.use(express.static(path.join(__dirname, '..', 'public/')));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
// if you need api routes add them here
app.use('/', router);

app.listen(PORT, () => {
  console.log(`Check out the app at http://localhost:${PORT}`);
});

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
// We are able to parse incoming request body with help of bodyParse package

app.use(shopRoutes);
app.use('/admin', adminRoutes);

// by default './' path is added in below code
app.use((req,res,next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'error.html'));
});


app.listen(3000);
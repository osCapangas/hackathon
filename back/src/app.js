const express = require('express');
require('./config/dotenv')();
require('./config/sequelize');

const passport = require('passport');
const app = express();
const port = process.env.PORT;
//const cors = require('cors');
const routes = require('./routes/routes');
const path = require('path');

require('./middlewares/jwtPassport')(passport);

app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);

app.listen(port, () => {
  console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    
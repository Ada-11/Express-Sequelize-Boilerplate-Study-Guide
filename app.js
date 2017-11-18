'use strict';

//every import you could ever possibly require
//(as far as we have learned to date)
//but don't forget to specify the associated exports
//in their files!

const express = require('express');
const nunjucks = require('nunjucks'); //for now, but we will not use nunjucks in the future
const morgan = require('morgan');
const db = require('sequelize');
const fs = require('fs'); //for __dirname
const path = require('path'); //for path.join()
const chalk = require('chalk'); //cause chalk is great
const router = require('./routes');
const models = require('./models');
const app = express();
const PORT = 3000;


//app boilerplate (includes blank stylesheet just because):


app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});

//from routes.js:
app.use(router);



//sync database from ./models/index.js, THEN listen on port 3000
models.db.sync()
.then(() => {
  app.listen(PORT, () => {
  console.log(chalk.green('listening on port ' + PORT));
  });
});

'use strict';


//imports for router
const chalk = require('chalk');
const express = require('express');
const models = require('./models');
const router = express.Router();


router.get('/', (req, res, next) => {
  res.status(200).send('success, responded with code ' + res.statusCode + '.\nYou can try out the following example routes: \n/test, /query, /errorTest');
  next();
});

router.get('/errorTest', (req, res, next) => {

  //forces an error to be passed through
  //to the global error handler at the bottom

    let err = new Error('I erred');
    err.status = 404;
    next(err);
  // }
});


//test route
router.get('/test', (req, res, next) => {
  res.status(200).send('type something after /test/...');
  next();
});

//req.params example
router.get('/test/:something', (req, res, next) => {
  res.status(200).send('you went to /test/' + req.params.something);
  next();
});

router.get('/query', (req, res, next) => {
  if(req.query.test) {
    console.log(chalk.red(req.query.test));
    res.status(200).send('your query was ' + req.query.test);
  } else {
    res.status(200).send('type "?test", then anything, after /query');
  }
  next();
});

//global error handler:

router.use((err, req, res, next) => {
  console.error(chalk.red(err.stack));
  res.status(err.status || 500).send(err.status + ' error (error test successful)');
});

//exports:
module.exports = router;

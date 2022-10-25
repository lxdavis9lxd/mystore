var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeesRouter = require('./routes/employees');
var employeesDeleteRouter = require('./routes/empdel');
var employeesUpdateRouter = require('./routes/empupdt');
var employeesSearchRouter = require('./routes/empsearch');
var employeesListAllRouter = require('./routes/emplistall');
var employeesAddRouter = require('./routes/empadd');
var officelistallRouter = require('./routes/offlistall');
var customerRouter = require('./routes/customer');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/getcustlistbyid',customerbyidRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', employeesRouter);
app.use('/', customerRouter);
app.use('/', employeesDeleteRouter);
app.use('/', employeesUpdateRouter);
app.use('/', employeesSearchRouter);
app.use('/', employeesListAllRouter);
app.use('/', employeesAddRouter);
app.use('/', officelistallRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//set the IP address for the rest API
global.db_token_ip ='108.65.159.229:8084'
module.exports = app;

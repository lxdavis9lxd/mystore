var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeesRouter = require('./routes/employees');
var customerRouter = require('./routes/customer');
//var customerbyidRouter = require('./routes/customerbyidold');

//var listtestRouter = require('./routes/customertestold');
//var byidtestRouter = require('./routes/customertestold');
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
app.use('/empadd', employeesRouter);
app.use('/', customerRouter);
//app.use('getcustlisttest', listtestRouter);
//app.use('/',byidtestRouter);
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

module.exports = app;

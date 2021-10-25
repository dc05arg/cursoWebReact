var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();  //la conexión

var pool = require('./models/db');  //donde tengo la base de datos

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//SELECT
// pool.query("select * from empleados").then
// (function (resultados) {
//   console.log (resultados);
// });

//INSERT
// var obj = {
//   nombre: 'Diego',
//   apellido: 'Cava',
//   trabajo: 'Programador Junior',
//   edad: '43',
//   salario: '120000',
//   email: 'die@bignet.com'
// }
// pool.query("insert into empleados set ?", [obj]).then
// (function(resultados){
//   console.log(resultados);
// });

//UPDATE

// var id_emp = 5;
// var obj = {
//   trabajo: 'Programador Senior',
//   salario: '110000'
// }

// pool.query("update empleados set ? where id_emp=?", [obj, id_emp]).then
// (function(resultados){
//   console.log(resultados);
// });

//DELETE

var id_emp = 29; //Borre el 29 que era una copia del 28

pool.query("delete from empleados where id_emp=?", [id_emp]).then
(function(resultados){
    console.log(resultados);
});

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

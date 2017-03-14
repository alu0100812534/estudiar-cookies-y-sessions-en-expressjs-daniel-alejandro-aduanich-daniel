var gulp = require('gulp');
var shell = require('gulp-shell');
var task = require('shell-task');
var ghpages = require('gh-pages');
var gitbook = require('gitbook');
var connect = require("gulp-connect")
var shell = require('shelljs');

gulp.task('deploy', function(){
	require ('./scripts/deploy-gitbook.js')
	require ('./scripts/deploy-wiki.js');
});

gulp.task('build', function(cb){
	require ('./scripts/generate-wiki.js');
	require ('./scripts/generate-gitbook.js');
});

gulp.task('serve', function(){
	shell.exec("gitbook serve txt");
});

gulp.task('heroku', function(){
	shell.exec("git push heroku master");
});

//Tarea que muestra como ejemplo el funcionamiento de Router
//Ejecutar y luego desde el navegador, acceder a localhost:8000/user/id
gulp.task('routing', function() {
  return gulp.src('')
    .pipe(shell(['node ../src/Routing.js']));
});
gulp.task('BasicRouting', function() {
  return gulp.src('')
    .pipe(shell(['node ../src/Br.js']));
});
gulp.task('middle1', function() {
  return gulp.src('')
    .pipe(shell(['node ../src/middleware1.js']));
});
gulp.task('middle2', function() {
  return gulp.src('')
    .pipe(shell(['node ../src/middleware2.js']));
});
gulp.task('middle3', function() {
  return gulp.src('')
    .pipe(shell(['node ../src/middleware3.js']));
});
gulp.task('middle4', function() {
  return gulp.src('')
    .pipe(shell(['node ../src/middleware4.js']));
});

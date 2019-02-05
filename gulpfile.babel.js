var gulp = require('gulp');
var connect = require('gulp-connect');

var browserify = require('browserify');
var babelify = require('babelify'); // Converts jsx to js
var source = require('vinyl-source-stream'); // Converts string to a 
/* cooper s - in case I want to run it via server, but I prefer bundled url
gulp.task('connect', function() {
    connect.server({
        base: 'http://localhost', 
        port: 9000,
        root: './dist',
        livereload: true
    });
});//end connect
*/
gulp.task('js', function() {
    browserify('./src/index.js')
        .transform(babelify)
        .bundle().on('error', function (e){
            console.log(e)
        })
        .pipe(source('index.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(connect.reload());
})//end js

gulp.task('html', function(){
    gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('copy', function(){
	gulp.src('index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('css/*.*')
		.pipe(gulp.dest('dist/css'));
});


gulp.task('watch', function(){
    gulp.watch('./src/**/*.js',['js']);
    gulp.watch('./*.html', ['html']);
})

gulp.task('default', ['js','html','watch'], function() {

})


var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass',function(){
	gulp.src('sass/style.sass')
		.pipe(sass())
		.pipe(gulp.dest('sass'))
});

gulp.task('serve',function(){
	browserSync.init({
		server:{
			baseDir:''
		}
	});

});

gulp.task('watch',function(){
	gulp.watch(['sass/style.sass','modules/*/*.sass'],['sass']).on('change',browserSync.reload);
	gulp.watch('modules/*/*.html').on('change',browserSync.reload);
});

gulp.task('default', ['sass','serve','watch']);
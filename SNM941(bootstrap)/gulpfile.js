var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass',function(){
	gulp.src('css/app.sass')
		.pipe(sass())
		.pipe(gulp.dest('css'))
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

gulp.task('watch', function() {
    gulp.watch("modules/*/*.html").on('change', browserSync.reload);
    gulp.watch("modules/*/*/*.html").on('change', browserSync.reload);
    gulp.watch("modules/*/*/*.js").on('change', browserSync.reload);
    gulp.watch(["js/*/*.js","modules/*/*.js"]).on('change', browserSync.reload);
    gulp.watch("css/app.sass",['sass']).on('change', browserSync.reload);
    
});

gulp.task('default',['serve','sass','watch']);

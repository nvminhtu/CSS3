var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.css", ['sass']);
});

gulp.task('sass', function() {
    return gulp.src("*.css")
        .pipe(reload({stream: true}));
});


gulp.task('default', ['serve']);
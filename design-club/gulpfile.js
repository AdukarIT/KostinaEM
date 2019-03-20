let gulp = require('gulp');
let sass = require('gulp-sass');
let server = require('browser-sync').create();
let clean = require('gulp-clean');


gulp.task('clean', () => {
    return gulp.src('public/css/*.css', {read: false})
        .pipe(clean());
});

gulp.task('style', () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public/css/'));
});


gulp.task('server', () => {
    server.init({
        server: "./public",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
    server.watch('public', server.reload);
});

gulp.task('watch', () => {
    gulp.watch("src/scss/**/*.scss", gulp.series('style'));
    gulp.watch("*.html").on("change", server.reload);
});

gulp.task('default', gulp.series(
    gulp.parallel('clean'),
    gulp.parallel('style'),
    gulp.parallel('watch', 'server')

));



export const copy = () => {
    return app.gulp.src([app.path.src.files, app.path.src.phpmailer])
        .pipe(app.gulp.dest(app.path.build.files))
}
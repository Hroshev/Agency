export const copy = () => {
    const srcFiles = [];
    const buildFiles = [];
    
    if (app.path.src.files) {
        srcFiles.push(app.path.src.files);
        buildFiles.push(app.path.build.files);
    }
    
    if (app.path.src.phpmailer) {
        srcFiles.push(app.path.src.phpmailer);
        buildFiles.push(app.path.build.phpmailer);
    }
    
    return app.gulp.src(srcFiles, { base: app.path.srcFolder })
        .pipe(app.gulp.dest(app.path.buildFolder));
}
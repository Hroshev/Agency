export const phpmailer = () => {
	return app.gulp.src(app.path.src.phpmailer)
		.pipe(app.gulp.dest(app.path.build.phpmailer))
}
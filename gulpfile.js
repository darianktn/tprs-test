const { src, dest, watch, series } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const browsersync = require('browser-sync').create();
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));

const convert = () => {
	return src('dist/src/styles/main.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(cleanCSS())
		.pipe(rename('styles.css'))
		.pipe(dest('dist/src/styles'))
		.pipe(browsersync.stream());
};

const watchFiles = () => {
	watch('src/styles/**/*.scss', convert).on('change', browsersync.reload);
	browsersync.init({
		server: {
			baseDir: 'dist',
			serveStatic: [
				{
					route: '/fonts',
					dir: 'dist/src/fonts'
				}
			]
		}
	});
};

exports.convert = convert;
exports.watchFiles = watchFiles;
exports.default = series(convert, watchFiles);

// Получаем имя папки проекта
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

export const path = {
	build: {
		js: `${buildFolder}/js/`,
		css: `${buildFolder}/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/img/`,
		fonts: `${buildFolder}/fonts/`,
		files: `${buildFolder}/files/`,
		phpmailer: `${buildFolder}/phpmailer/`,
		php: `${buildFolder}/`, // Добавить код для обработки php
	},
	src: {
		js: `${srcFolder}/js/**/app.js`,
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
		svg: `${srcFolder}/img/**/*.svg`,
		scss: `${srcFolder}/scss/**/style.scss`,
		html: `${srcFolder}/*.html`, //.pug
		files: `${srcFolder}/files/**/*.*`,
		phpmailer: `${srcFolder}/phpmailer/**/*.*`,
		svgicons: `${srcFolder}/svgicons/*.svg`,
		php: `${srcFolder}/*.php`, // Добавить код для обработки php
	},
	watch: {
		js: `${srcFolder}/js/**/*.js`,
		scss: `${srcFolder}/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`, //.pug
		images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
		files: `${srcFolder}/files/**/*.*`,
		phpmailer: `${srcFolder}/phpmailer/**/*.*`,
		php: `${srcFolder}/**/*.php`, // Добавить код для обработки php
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ``
}
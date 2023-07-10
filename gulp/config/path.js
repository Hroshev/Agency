// Получаем имя папки проекта
import * as nodePath from 'path';
import * as fs from 'fs';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`; // Также можно использовать rootFolder
const srcFolder = `./src`;

// Проверка существования папки в пути
function folderExists(path) {
    return fs.existsSync(path) && fs.lstatSync(path).isDirectory();
}

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
        files: folderExists(`${srcFolder}/files`) ? `${buildFolder}/files/` : '', // Изменено
        phpmailer: folderExists(`${srcFolder}/phpmailer`) ? `${buildFolder}/phpmailer/` : '' // Изменено
    },
    src: {
        js: `${srcFolder}/js/**/app.js`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,ico}`,
        svg: `${srcFolder}/img/**/*.svg`,
        scss: `${srcFolder}/scss/**/style.scss`,
        html: `${srcFolder}/*.html`, //.pug
        files: folderExists(`${srcFolder}/files`) ? `${srcFolder}/files/**/*.*` : '', // Изменено
        svgicons: `${srcFolder}/svgicons/*.svg`,
        php: `${srcFolder}/**/*.php`,
        phpmailer: folderExists(`${srcFolder}/phpmailer`) ? `${srcFolder}/phpmailer/**/*.*` : '' // Изменено
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`, //.pug
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
        files: folderExists(`${srcFolder}/files`) ? `${srcFolder}/files/**/*.*` : '', // Изменено
        phpmailer: folderExists(`${srcFolder}/phpmailer`) ? `${srcFolder}/phpmailer/**/*.*` : '' // Изменено
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
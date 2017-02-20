const argv = require('yargs').argv;
const path = require('path');

module.exports = () => {
  const basePaths = {
    root: path.join(__dirname, '..'),
    src: 'src/',
    content: 'content/',
    static: 'static/',
    dest: 'build/',
    tmp: '.tmp/',
  };

  const languages = ['en'];

  const paths = {
    scripts: {
      src: `${basePaths.src}scripts/`,
      dest: `${basePaths.dest}js/`,
    },
    styles: {
      src: `${basePaths.src}styles/`,
      dest: `${basePaths.dest}css/`,
    },
    content: {
      src: `${basePaths.content}`,
      dest: `${basePaths.dest}content/`,
    },
    pages: {
      src: `${basePaths.src}pages/`,
      dest: basePaths.dest,
    },
    layouts: {
      src: `${basePaths.src}layouts/`,
    },
    assets: {
      src: `${basePaths.static}assets/`,
      dest: `${basePaths.dest}assets`,
    },
    meta: {
      src: `${basePaths.static}meta/`,
      dest: `${basePaths.dest}`,
    },
    revManifest: {
      dest: `${basePaths.dest}rev-manifest.json`,
    },
  };

  const appFiles = {
    scripts: `${paths.scripts.src}**/*.js`,
    styles: `${paths.styles.src}**/*.scss`,
    content: `${paths.content.src}**/*.yml`,
    pages: `${paths.pages.src}**/*.pug`,
    layouts: `${paths.layouts.src}**/*.pug`,
    assets: `${paths.assets.src}**/*`,
    meta: `${paths.meta.src}**/*`,
  };

  const components = [
    `${basePaths.src}modules/`,
    `${basePaths.src}elements/`,
  ];

  const gulpFiles = [
    'gulp/**/*.js',
    'gulpfile.js',
  ];

  return {
    basePaths,
    languages,
    paths,
    appFiles,
    components,
    gulpFiles,
    isProd: process.env.NODE_ENV === 'production',
  };
};

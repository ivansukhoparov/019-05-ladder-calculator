const gulp = require('gulp');

const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.hello = tasks.test;
exports.dev_html = tasks.dev_html;
exports.dev_sass = tasks.dev_sass;
exports.dev_js = tasks.dev_js;
exports.serverv = tasks.server;
exports.watcher = tasks.watcher;

exports.default = gulp.parallel(
    exports.serverv,
    exports.watcher
)
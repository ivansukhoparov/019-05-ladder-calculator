const gulp = require('gulp');

const requireDir = require('require-dir');
const tasks = requireDir('./tasks');

exports.build_html = tasks.build_html;
exports.build_js = tasks.build_js;
exports.build_sass = tasks.build_sass;
exports.dev_html = tasks.dev_html;
exports.dev_sass = tasks.dev_sass;
exports.dev_js = tasks.dev_js;
exports.serverv = tasks.server;
exports.watcher = tasks.watcher;

exports.default = gulp.parallel(
    exports.serverv,
    exports.watcher
)


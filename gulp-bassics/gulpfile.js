const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const sass = gulpSass(require("sass"));

// sass compile with gulp

gulp.task("sass", async function () {
  gulp.src("index.scss").pipe(sass()).pipe(gulp.dest("css3"));
});

// top level function [task - src - dest - watch]

// gulp.task("log", async function () {
//   console.log("gulp is running");
// });

// gulp.task("move", async function () {
//   gulp.src("css1/*.css").pipe(gulp.dest("css2"));
// });

// gulp.task("watching", async function () {
//   gulp.watch("css1/style.css", async function () {
//     gulp.src("css1/*.css").pipe(gulp.dest("css2"));
//   });
// });

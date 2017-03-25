// require gulp
var gulp = require('gulp');
// require gulp-nodemon
var nodemon = require('gulp-nodemon');

// Create new gulp default task
gulp.task('default', function () {
  // Run nodemon with the following conig
  nodemon({
      // Run app.js
      script: 'app.js',
      // Watch for changes of js files
      ext: 'js',
      // Set the environment variable PORT to 8000
      env: {
        PORT: 8000
      },
      // Ignore the node_module directory in when watching for changes
      ignore: ['./node_modules/**']
    })
    // When the server restarts
    .on('restart', function () {
      // Console.log 'Restarting'
      console.log('Restarting');
    });
});
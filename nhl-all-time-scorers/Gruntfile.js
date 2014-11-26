module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    browserify: {
      'build.js': ['main.js'],
    },



    watch: {
      files: ['lib/**/*.js', 'main.js'],
      tasks: ['browserify']
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['browserify']);
};

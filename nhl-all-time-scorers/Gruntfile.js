module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),


    browserify: {
      'build.js': ['main.js']
    },

    uglify: {
      'build.min.js': ['build.js']
    },


    watch: {
      files: ['lib/**/*.js', 'main.js'],
      tasks: ['browserify', 'uglify']
    }

  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['browserify', 'uglify']);
};

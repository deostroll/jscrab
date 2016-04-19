module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  grunt.initConfig({
    watch: {
      www: {
        files: ['www/src/*.*'],
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      }
    },
    connect:{
      options: {
        hostname: 'localhost',
        livereload: true,
        port: 3000,
      },

      www: {
        options: {
          base: 'www'
        }
      }
    }
  });

  grunt.registerTask('default', ['connect', 'watch']);
}

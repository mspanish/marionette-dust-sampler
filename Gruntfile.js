module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['public/templates/*.js'],
        dest: 'public/templates.js'
      }
    },
  
    watch: {
      files: ['public/templates/**/*.js'],
      tasks: ['concat']
    }

  });

//  grunt.loadNpmTasks('grunt-contrib-uglify');

//  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

 // grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat']);

};
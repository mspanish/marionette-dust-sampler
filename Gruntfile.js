module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },

      js: {
        src: ['public/templates/*.js'],
        dest: 'public/templates.js'
      },
      css: {
        src: ['public/css/*.css'],
        dest: 'public/styles.css'
      },

},
      cssmin: {
        css:{
          src: 'public/styles.css',
          dest: 'public/styles.min.css'
        }
/*
      dist: {
        src: ['public/templates/*.js'],
        dest: 'public/templates.js'
      }
*/
    },
  
    watch: {
      files: ['public/templates/**/*.js', 'public/css/**/*.css'],
      tasks: ['concat', 'cssmin']
    }

  });

  grunt.loadNpmTasks('grunt-contrib-cssmin');

//  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

 // grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat', 'cssmin']);

};
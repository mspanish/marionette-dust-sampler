module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },

      js: {
        src: ['public/templates/*.js'],
        dest: 'public/app/templates.js'
      }
      // css: {
      //   src: ['public/css/*.css'],
      //   dest: 'public/styles.css'
      // },

},
/*
      dist: {
        src: ['public/templates/*.js'],
        dest: 'public/templates.js'
      }
*/
 
  
    watch: {
      files: ['public/templates/**/*.js'],
      tasks: ['concat']
    }

  });

 // grunt.loadNpmTasks('grunt-contrib-cssmin');

//  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

 // grunt.registerTask('test', ['jshint', 'qunit']);

  grunt.registerTask('default', ['concat']);

};
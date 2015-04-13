module.exports =
  options:
    includePaths: ['lib/bower_components', '<%= config.libDir %>/toolset/grunt-tasks/assembler', '<%= config.srcDir %>/css']
  dev:
    files: [{
      expand: true
      cwd: '<%= config.srcDir %>/css'
      src: ['**/*.scss']
      dest: '<%= config.targetDir %>/css'
      ext: '.css'
    }]

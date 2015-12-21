"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var config = {
    pkg: grunt.file.readJSON("package.json"),

    less: {
      style: {
        files: {
          "build/css/style.css": "source/less/style.less"
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")({browsers: "last 2 versions"})
        ]
      },
      style: {
        src: "build/css/style.css"
      }
    },

    watch: {
      style: {
        files: ["less/**/*.less"],
        tasks: ["less", "postcss"],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },
    copy:{
      build:{
        files:[{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "index.html",
            "form.html",
            "less/**"
          ],
          dest: "build"
        }]
        }
      },
    cmq:{
    style:{
      file:{
        "build/css/style.css":["build/css/style.css"]
      }
    }
  },
    cssmin:{
      options:{
        keepSpecialComments: 0,
        report: "gzip"
      },
      style:{
        files:{
          "build/css/style.min.css":["build/css/style.css"]
        }
      }
    },
    imagemin:{
      images:{
        options:{
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png,jpg,gif,svg}"]
        }]
      }
    },
    htmlmin:{
      options:{
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        caseSensitive: true,
        keepClosingSlash: false
      },
      html:{
        files:{
          "build/index.min.html":["build/index.html"],
          "build/form.min.html":["build/form.html"]
        }
      }
    },
    uglify: {
      script: {
        files: {
          "build/js/index.min.js":["build/js/index.js"],
          "build/js/form.min.js":["build/js/form.js"]
        }
      }
    },
    concat: {
      options: {

      },
      index: {
        src: ["source/js/menu.js", "source/js/map.js"],
        dest: "build/js/index.js"
      },
      form: {
        src: ["source/js/menu.js", "source/js/script.js", "source/js/mustache.min.js"],
        dest: "build/js/form.js"
      }
    }
  };
  grunt.registerTask("build",[
    "copy",
    "less",
    "postcss",
    "cmq",
    "cssmin",
    "imagemin",
    "htmlmin",
    "concat",
    "uglify"
  ]);



  // Не редактируйте эту строку
  config = require("./.gosha")(grunt, config);

  grunt.initConfig(config);
};



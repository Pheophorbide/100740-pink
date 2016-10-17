"use strict";

module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);

  var config = {
    pkg: grunt.file.readJSON("package.json"),

    less: {
      style: {
        files: {
          "css/style.css": "source/less/style.less"
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
        src: "css/style.css"
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
            "form.html"
          ],
          dest: "build"
        }]
        }
      },
    cmq:{
    style:{
      file:{
        "css/style.css":["css/style.css"]
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
          "css/style.min.css":["css/style.css"]
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
          src: ["img/**/*.{png,jpg,gif,svg}"]
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
          "index.min.html":["index.html"],
          "form.min.html":["form.html"]
        }
      }
    },
    uglify: {
      script: {
        files: {
          "js/index.min.js":["js/index.js"],
          "js/form.min.js":["js/form.js"]
        }
      }
    },
    concat: {
      options: {

      },
      index: {
        src: ["js/menu.js", "js/map.js"],
        dest: "js/index.js"
      },
      form: {
        src: ["js/menu.js", "js/script.js", "js/mustache.min.js"],
        dest: "js/form.js"
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



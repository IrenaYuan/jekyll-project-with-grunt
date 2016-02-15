"use strict";
module.exports = function(grunt) {
    grunt.initConfig({
        exec: {
            jekyll: {
                cmd: "jekyll build --trace"
            }
        },
        watch: {
            options: {
                livereload: true
            },
            source: {
                files: ["_drafts/**/*", 
                        "_includes/**/*", 
                        "_layouts/**/*", 
                        "_posts/**/*", 
                        "css/**/*", 
                        "js/**/*", 
                        "_config.yml", 
                        "*.html", 
                        "*.md"
                        ],
                tasks: ["exec:jekyll"]
            }
        },
        connect: {
            server: {
                options: {
                    port: 4000,
                    base: '_site',
                    livereload: true
                }
            }
        }
    });
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-exec");

    grunt.registerTask("build", [
        "exec:jekyll"
    ]);

    grunt.registerTask("serve", [
        "build", 
        "connect:server", 
        "watch"
    ]);

    grunt.registerTask("default", ["serve"]);
};
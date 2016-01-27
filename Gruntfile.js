module.exports = function(grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015','react']
            },
            dist: {
                files: [
                    { expand: true, flatten: false, cwd: 'src/', src: '**/*.js', dest: 'dist/js/'}
                ]
            }
        },
        copy: {
            main: {
                files: [
                    { expand: true, flatten: true, src: 'node_modules/requirejs/require.js', dest: 'dist/js/' },
                    { expand: true, flatten: true, src: 'node_modules/react/dist/react.js', dest: 'dist/js/' },
                    { expand: true, flatten: true, src: 'node_modules/react-dom/dist/react-dom.js', dest: 'dist/js/' },
                ]
            }
        },
        clean: [
            'dist/js'
        ]

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'copy','babel']);

};
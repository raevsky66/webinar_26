const path = require('path');
module.exports = {
    entry:'./src/main.js',
    output: {
        filename: "output.js",
        path: path.resolve(__dirname,'build')
    },
    mode: 'development'
}

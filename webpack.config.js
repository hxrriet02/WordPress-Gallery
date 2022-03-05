const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'hkh_gallery.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
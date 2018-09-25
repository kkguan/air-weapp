const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const srcPath = path.join(__dirname, '../src');
const distPath = path.join(__dirname, isProduction ? '../dist': '../examples/dist/');
const ext = ['wxml', 'json', 'wxs', 'js', 'less'];

module.exports = {
    isProduction,
    srcPath,
    distPath,
    ext
};

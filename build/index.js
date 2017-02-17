'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var format = function format(item) {
  if (item.lang) {
    return '<meta property="' + item.property + '" lang="' + item.lang + '" content="' + item.content + '" />';
  }
  return '<meta property="' + item.property + '" content="' + item.content + '" />';
};

var OpengraphWebpackPlugin = function OpengraphWebpackPlugin(options) {
  var _this = this;

  _classCallCheck(this, OpengraphWebpackPlugin);

  this.apply = function (compiler) {
    return compiler.plugin('compilation', function (compilation) {
      return compilation.plugin('html-webpack-plugin-before-html-processing', function (htmlPluginData, callback) {
        var filesToInclude = (0, _lodash.map)(_this.options, format).join('\n');
        htmlPluginData.html = htmlPluginData.html.replace('</head>', filesToInclude + '\n</head>');
        callback(null, htmlPluginData);
      });
    });
  };

  this.options = options;
};

exports.default = OpengraphWebpackPlugin;
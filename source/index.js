import { extend, map } from 'lodash';

const format = (item) => {
  if (item.lang) {
    return `<meta property="${item.property}" lang="${item.lang}" content="${item.content}" />`;
  }
  return `<meta property="${item.property}" content="${item.content}" />`;
};

export default class OpengraphWebpackPlugin {

  constructor(options) {
    this.options = options;
  }

  apply = compiler =>
    compiler.plugin('compilation', compilation =>
      compilation.plugin('html-webpack-plugin-before-html-processing', (htmlPluginData, callback) => {
        const filesToInclude = map(this.options, format).join('\n');
        htmlPluginData.html = htmlPluginData.html.replace('</head>', filesToInclude + '</head>');
        callback(null, htmlPluginData);
      }));

}
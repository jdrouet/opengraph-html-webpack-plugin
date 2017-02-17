import { expect } from 'chai';
import OpengraphWebpackPlugin from '../source';

class Compiler {

  constructor(compilation) {
    this.compilation = compilation;
    this.plugins = {};
  }

  plugin(state, fn) {
    this.plugins[state] = fn;
    fn(this.compilation);
  }

}

class Compilation {

  constructor(callback) {
    this.callback = callback;
    this.plugins = {};
  }

  plugin(state, fn) {
    const htmlPluginData = {
      html: '<head>\n</head>',
    };
    fn(htmlPluginData, this.callback);
  }

}

const test = (options, output, done) => {
  const compilation = new Compilation((err, res) => {
    expect(res.html).to.eql(output);
    done();
  });
  const compiler = new Compiler(compilation);
  const instance = new OpengraphWebpackPlugin(options);
  instance.apply(compiler);
}

describe('opengraph-html-webpack-plugin', function() {

  it('should happen in the header', (done) => {
    test(
      [
        { property: 'og:title', content: 'My title' },
        { property: 'og:type', content: 'article' },
      ],
      '<head>\n' +
        '<meta property="og:title" content="My title" />\n' +
        '<meta property="og:type" content="article" />\n' +
        '</head>',
      done,
    );
  });

});
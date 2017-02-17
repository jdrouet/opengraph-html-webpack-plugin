# Opengraph Html Webpack Plugin

[![circleci](https://circleci.com/gh/jdrouet/opengraph-html-webpack-plugin.svg)](https://circleci.com/gh/jdrouet/opengraph-html-webpack-plugin)
[![codecov](https://codecov.io/gh/jdrouet/opengraph-html-webpack-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/jdrouet/opengraph-html-webpack-plugin)

Let wepback generate all your opengraph informations for you !

## Howto install and use

Install the dependencies after installing [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin)
```bash
npm install opengraph-html-webpack-plugin --save-dev
```

Then add in your plugin section

```javascript
  plugins: [
    new OpengraphHtmlWebpackPlugin([
      { property: 'og:title', content: 'My website title' },
      { property: 'og:description', lang: 'en_UK', content: 'My website is really awesome' },
      { property: 'og:description', lang: 'fr_FR', content: 'Mon site web est trop ouf' },
      ...
    ]),
  ],
```

And that's it !

## what's next

* Configure the opengraph data with an object and not with an ugly mapping
* Import images and resize them automatically
* Please make some issues if you want more !
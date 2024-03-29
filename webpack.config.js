var path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'chime.js',
    library: {
      name: 'chime',
      type: 'umd',
    },
  }
};

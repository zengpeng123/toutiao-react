const { override, addLessLoader } = require('customize-cra');

module.exports = override(
  // fixBabelImports('import', {
  //   libraryDirectory: 'es',
  //   style: true
  // }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {}
  })
);

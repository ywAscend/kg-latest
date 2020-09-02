const { override,fixBabelImports,addLessLoader}  = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      // style 的选项 ‘css' 表示引入的css文件   true 表示引入的less
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        //'@primary-color': '#d214a2',
        '@font-size-base': '16px',
      }
    }),
  );
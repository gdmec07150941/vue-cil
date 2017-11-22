// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
        "indent": ["error", 4], //缩进风格
        "no-mixed-spaces-and-tabs": [0], //关闭禁止混用tab和空格
        "semi": [0], // 关闭语句强制分号结尾
        "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
        "quotes": [0, "single"],//引号类型 `` "" ''
    }
}

'use strict';

var node4 = require('./node4.js');

var rules = Object.assign(node4.rules, {
  indent: [1, 2],
  'no-console': 'warn',
});

module.exports = {
    env: {node: true, es6: true},
    parserOptions: {
      ecmaVersion: 2017
    },
    rules: rules
};

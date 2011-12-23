var assert = require('assert'),
trim = require('../src/trim.js').trim;

module.exports = {
  'left' : function () {
    assert.equal(trim(' abc'), 'abc');
  }
  ,'right' : function () {
    assert.equal(trim('abc '), 'abc');
  }
  ,'both' : function () {
    assert.equal(trim(' abc '), 'abc');
  }
};

/**
 * TODO:
 *  - ttest all white space
 */
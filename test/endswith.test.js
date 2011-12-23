var assert = require('assert'),
endsWith = require('../src/endswith.js').endsWith;

module.exports = {
  '1-1: true': function () {
    assert.equal(endsWith('a', 'a'), true);
  }
  , '1-1: false': function () {
    assert.equal(endsWith('a', 'b'), false);
  }

  , '2-1: true': function () {
    assert.equal(endsWith('aa', 'a'), true);
  }
  , '2-1: false': function () {
    assert.equal(endsWith('aa', 'b'), false);
  }

  , '2-2: true': function () {
    assert.equal(endsWith('aa', 'aa'), true);
  }
  , '2-2: false': function () {
    assert.equal(endsWith('aa', 'ab'), false);
  }

  , 'n-n: true': function () {
    assert.equal(endsWith('supercalifrag', 'frag'), true);
  }
  , 'n-n: false': function () {
    assert.equal(endsWith('supercalifrag', 'ifra'), false);
  }

};

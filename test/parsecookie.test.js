var assert = require('assert'),
parseCookie = require('../src/parsecookie.js').parseCookie;

var cookie = "__utma=171487074.1233332229.1324596987.1324596987.1324596987.1; __utmc=171487074; __utmz=171487074.1324596987.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)",
obj = parseCookie(cookie);

var obj = parseCookie(cookie);

module.exports = {
  'cook' : function () {
    assert.equal(obj['__utma'], '171487074.1233332229.1324596987.1324596987.1324596987.1');
  }
};

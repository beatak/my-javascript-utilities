var trim = require('./trim.js').trim;

var parseCookie = function (str) {
  var each,
  result = {},
  arr = trim(str).split(';'),
  i = 0,
  len = arr.length;
  for (; i < len; ++i) {
    each = parseLine(trim(arr[i]));
    result[each.key] = each.value;
  }
  return result;
};

var parseLine = function (str) {
  var result = {},
  index = str.indexOf('=');
  if (index < 0) {
    result.key = str;
    result.value = '';
  }
  else if (index === 0) {
    result.key = '';
    result.value = str.index(1);
  }
  else {
    result.key = str.substring(0, index);
    result.value = str.substring(index + 1);
  }
  return result;
};

exports.parseCookie = parseCookie;
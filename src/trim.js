var REG_LTRIM = /^\s+/;
var REG_RTRIM = /\s+$/;

/**
 * trim
 * @function
 * @param {string} str 
 */
var trim = function (str) {
  if (str === null || str === undefined) {
    return '';
  }
  var s = '' + str;
  var result;
  if (String.prototype.trim) {
    result = s.trim();
  }
  else {
    result = s.replace(REG_LTRIM, '').replace(REG_RTRIM, '');
  }
  return result;
};

exports.trim = trim;
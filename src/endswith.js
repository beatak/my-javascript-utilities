/**
 * @function
 * @param {string} needle
 * @param {string} hay
 */
var endsWith = function (needle, hay) {
  var rev_n = needle.split('').reverse().join('');
  var rev_h = hay.split('').reverse().join('');
  var result = false;
  if (rev_n.indexOf(rev_h) === 0) {
    result = true;
  }
  return result;
};

exports.endsWith = endsWith;
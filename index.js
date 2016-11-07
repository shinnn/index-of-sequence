'use strict';

var appendType = require('append-type');
var arrIndexesOf = require('arr-indexes-of');

/*!
 * index-of-sequence | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/index-of-sequence
*/
function indexOfSequence(arr, searchValues, fromIndex) {
  [arr, searchValues].forEach(function(arg) {
    if (!Array.isArray(arg)) {
      throw new TypeError('Expected an array, but got ' + appendType(arg) + '.');
    }
  });

  var firstValueIndexes = arrIndexesOf(arr, searchValues[0], fromIndex);

  if (firstValueIndexes.length === 0 || searchValues.length === 0) {
    return -1;
  }

  var restSearchValues = searchValues.splice(1);

  var result = firstValueIndexes.find(function(index) {
    return restSearchValues.every(function(val, i) {
      return arr[index + i + 1] === val;
    });
  });

  if (result === undefined) {
    return -1;
  }

  return result;
}

module.exports = indexOfSequence;

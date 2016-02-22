'use strict';

/**
 * Format a given object to a comma-first tree
 *
 * @param {Object} source object
 * @return {String} comma first output
 */

module.exports = function format(obj) {
  return JSON.stringify(obj, null, 2)
    .split(/(,\n\s+)/)
    .map(function (e, i) {
      return i % 2 
        ? '\n' + e.substring(4) + ', ' 
        : e
    })
    .join('')
}

'use es6';

export var ENABLED = 'ENABLED';
export var DISABLED = 'DISABLED';
export var ERROR = 'ERROR';
/* eslint-env commonjs */
// This temporary hack ensures module system compatibility.
// Read more at go/treeshaking

if (!!module && !!module.exports) {
  module.exports.default = Object.assign({}, module.exports);
}
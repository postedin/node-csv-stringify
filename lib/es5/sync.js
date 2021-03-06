'use strict';

// Generated by CoffeeScript 2.0.3
// # CSV Stringify Sync

// Provides a synchronous alternative to the CSV stringifier.

// Usage: `data = stringify(records, [options]`
var StringDecoder, stringify;

var _require = require('string_decoder');

StringDecoder = _require.StringDecoder;

var Buffer = require('buffer').Buffer;


stringify = require('./index');

module.exports = function (records) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var data, decoder, i, len, record, stringifier;
  data = [];
  if (records instanceof Buffer) {
    decoder = new StringDecoder();
    records = decoder.write(records);
  }
  stringifier = new stringify.Stringifier(options);
  stringifier.push = function (record) {
    if (record) {
      return data.push(record.toString());
    }
  };
  for (i = 0, len = records.length; i < len; i++) {
    record = records[i];
    stringifier.write(record);
  }
  stringifier.end();
  return data.join('');
};

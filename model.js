var log = require('logger')('model-otps');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongins = require('mongins');
var validators = require('validators');
var types = validators.types;
var values = validators.values;

var TOKEN_LENGTH = 48;
var TOKEN_SIZE = 2 * TOKEN_LENGTH;

var otp = Schema({
  name: {
    type: String,
    required: true,
    validator: types.string({
      length: 50
    })
  },
  value: {
    type: String,
    required: true,
    server: true,
    validator: types.string({
      length: TOKEN_SIZE
    }),
    value: values.random({size: TOKEN_LENGTH})
  }
}, {collection: 'otps'});

otp.plugin(mongins);
otp.plugin(mongins.user);
otp.plugin(mongins.createdAt());
otp.plugin(mongins.updatedAt({expires: 600}));

module.exports = mongoose.model('otps', otp);
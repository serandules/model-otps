var log = require('logger')('model-otps');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongins = require('mongins');
var types = require('validators').types;

var otp = Schema({}, {collection: 'otps'});

otp.plugin(mongins);
otp.plugin(mongins.user);
otp.plugin(mongins.createdAt);
otp.plugin(mongins.updatedAt);

module.exports = mongoose.model('otps', otp);
var log = require('logger')('model-otps');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mongins = require('mongins');
var types = require('validators').types;

var otp = Schema({
    value: {
        type: String,
        required: true,
        server: true,
        validator: types.string({
            length: 96
        })
    }
}, {collection: 'otps'});

otp.plugin(mongins);
otp.plugin(mongins.user);
otp.plugin(mongins.createdAt());
otp.plugin(mongins.updatedAt({expires: 600}));

module.exports = mongoose.model('otps', otp);
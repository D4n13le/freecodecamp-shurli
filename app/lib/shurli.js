var validUrl = require('valid-url');
var bases = require('bases');
var Url = require('./../models/url');
var config = require('./../config.js');

exports.newUrl = function(original_url, callback) {
  if(!validUrl.isWebUri(original_url))
    return callback({ error: 'Invalid URL'});

  Url.findOneOrCreate({
    original_url: original_url
  }, function(err, url) {
    if (err) return callback(err);

    var result = {
      short_url: config.app_url + bases.toBase58(url._id),
      original_url: url.original_url
    };
    callback(null, result);
  });
};

exports.getOriginal = function(short_url, callback) {
  var id = bases.fromBase58(short_url);

  Url.findById(id, function(err, url) {
    if (err) return callback(err);

    if (!url) return callback({ error: 'The shortened url cannot be found' });

    return callback(null, url.original_url);
  });
};
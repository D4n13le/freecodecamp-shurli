var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);
var Schema = mongoose.Schema;

var urlSchema = new Schema({
  original_url: {
    type: String,
    required: true,
    unique: true,
  }
});

urlSchema.plugin(autoIncrement.plugin, 'Url');

urlSchema.statics.findOneOrCreate = function(desired, callback) {
  const self = this;

  self.findOne(desired, function(err, url) {
    if (err) return callback(err);
    if (url) return callback(null, url);

    self.create(desired, function(err, url) {
      if (err) return callback(err);
      return callback(null, url);
    });
  });
};

var Url = mongoose.model('Url', urlSchema);

module.exports = Url;
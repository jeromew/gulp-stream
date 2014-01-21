var through = require('through2');
var Stream = require('stream');

// Consts
const PLUGIN_NAME = 'gulp-stream';

function gulpStream() {
  var stream = through.obj(function(file, enc, callback) {

    // keep null files as-is
    if (file.isNull()) {
      this.push(file);
      return callback();
    }

    // keep stream files as-is
    if (file.isStream()) {
      this.push(file);
      return callback();
    }

    // transform buffer files into buffers
    if (file.isBuffer()) {
      var cstream = Readable(file.contents);
      cstream.on('error', this.emit.bind(this, 'error'));
      file.contents = cstream;
      this.push(file);
      return callback();
    }

  });

  return stream;
};

function Readable(buffer){
  var readable = new Stream.Readable();
  var idx = 0;
  readable._read = function(size) {
    var chunk = buffer.slice(0, size);
    buffer = buffer.slice(size);
    var finished = (chunk.length == 0 && buffer.length == 0);
    this.push(finished ? null : chunk);
  };
  return readable;
}



module.exports = gulpStream;

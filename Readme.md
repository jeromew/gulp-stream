# gulp-stream

  This is the companion gulp plugin of gulp-buffer.

  If you needed to use gulp-buffer in order to use a gulp-plugin that does not support streaming, now you are in the situation where all your contents in stored in memory buffers.

  That might be acceptable in some circumstances, but you may also want to go back to full streaming mode for the contents if your downstream plugins have streaming capabilities.

  This is where gulp-stream can be used: it makes sure that all your buffers are wrapped into Readable streams.
  
[![build status](https://secure.travis-ci.org/jeromew/gulp-stream.png)](http://travis-ci.org/jeromew/gulp-stream)

## Installation

```bash
$ npm install gulp-stream
```

# Licence

  MIT


var i2c = require('i2c-bus'),
  bus = i2c.openSync(1);

var add = 0x4d;
var cmd = [0xff, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00, 0x79];

bus.i2cWrite(add, cmd.length, cmd, console.log);

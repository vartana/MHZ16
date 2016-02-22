var i2c = require('i2c-bus'),
  bus = i2c.openSync(1);

var addr = 0x4d;
var cmd = [0xff, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00, 0x79];

//bus.sendByteSync(addr, byte)

cmd.forEach(function(entry) {
    bus.sendByteSync(addr, entry, cb)
    console.log(entry);
});

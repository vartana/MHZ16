var i2c = require('i2c-bus'),
  bus = i2c.openSync(1);

var addr = 0x4d;
var cmdReq = [0xff, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00, 0x79];
var cmdRes = [0xff, 0x86, 0x02, 0x60, 0x47, 0x00, 0x00, 0x00, 0xd1];

console.log("Send");
cmdReq.forEach(function(entry) {
    bus.sendByteSync(addr, entry)
    console.log(entry);
});

console.log("Receive");
cmdRes.forEach(function(entry) {
    bus.sendByteSync(addr, entry)
    console.log(entry);
});


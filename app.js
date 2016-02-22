var i2c = require('i2c-bus'),
  bus = i2c.openSync(1);

var addr = 0x4d;
var cmd_zero_sensor = "\xff\x87\x87\x00\x00\x00\x00\x00\xf2";
var cmd_span_sensor = "\xff\x87\x87\x00\x00\x00\x00\x00\xf2";
var cmd_get_sensor = "\xff\x01\x86\x00\x00\x00\x00\x00\x79";


  console.log("Send");
  var x = bus.readWordSync(addr, cmd_get_sensor);
  console.log(x);

console.log("Receive");

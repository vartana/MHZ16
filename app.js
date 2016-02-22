var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyAMA0", {
  baudrate: 9600
});

var cmdReq = new Buffer([0xff, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00, 0x79]);
var cmdRes = new Buffer([0xff, 0x86, 0x02, 0x60, 0x47, 0x00, 0x00, 0x00, 0xd1]);

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });
  
  
  serialPort.write(cmdReq, function(err, results) {
    if(err){
      console.log('err ' + err);
    }
    
    console.log('results ' + results);
  });
});


// var cmd_zero_sensor = "\xff\x87\x87\x00\x00\x00\x00\x00\xf2";
// var cmd_span_sensor = "\xff\x87\x87\x00\x00\x00\x00\x00\xf2";
// var cmd_get_sensor = "\xff\x01\x86\x00\x00\x00\x00\x00\x79";

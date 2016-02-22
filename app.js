var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/ttyAMA0", {
  baudrate: 9600
});
var binary = require('binary');

var cmdReq = new Buffer([0xff, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00, 0x79]);
var cmdRes = new Buffer([0xff, 0x86, 0x02, 0x60, 0x47, 0x00, 0x00, 0x00, 0xd1]);

serialPort.on("open", function () {
  serialPort.on('data', function(data) {
    console.log('Data: ' + data, 'typeof '+ typeof data);
    binary(data)
    .word16ls('ab')
    .word32bu('cf')
    .word8('x')
    .tap(function (vars) {
        console.dir(vars);
    });
  });
  
  serialPort.on('error', function(data) {
    console.log('Error: ' + data);
  });
  
  serialPort.write(cmdReq, function(err, results) {
    if(err){
      console.log('err ' + err);
    }
    
    console.log('results ' + results);
  });
});

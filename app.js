var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyAMA0", {
  baudrate: 9600,
  timeout: 1
});

var cmd_zero_sensor = "\xff\x87\x87\x00\x00\x00\x00\x00\xf2";
var cmd_span_sensor = "\xff\x87\x87\x00\x00\x00\x00\x00\xf2";
var cmd_get_sensor = "\xff\x01\x86\x00\x00\x00\x00\x00\x79";

serialPort.on("open", function () {
  console.log('open');
  serialPort.on('data', function(data) {
    console.log('data received: ' + data);
  });
  
  
  serialPort.write(cmd_get_sensor, function(err, results) {
    if(err){
      console.log('err ' + err);
    }
    
    console.log('results ' + results);
  });
});

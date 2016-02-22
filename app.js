var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyAMA0", {
  baudrate: 9600
});

var cmdReq = [0xff, 0x01, 0x86, 0x00, 0x00, 0x00, 0x00, 0x00, 0x79];
var cmdRes = new Buffer([0xff, 0x86, 0x02, 0x60, 0x47, 0x00, 0x00, 0x00, 0xd1]);

serialPort.on("open", function () {
  serialPort.on('data', function(data) {
    console.log('Data: ' + data);
  });
  
  serialPort.on('error', function(data) {
    console.log('Error: ' + data);
  });
  
  cmdReq.forEach(function(ent){
    serialPort.write(ent, function(err, results) {
      if(err){
        console.log('err ' + err);
      }
      
      console.log('results ' + results);
    });
  })
  
  
  // serialPort.write(cmdReq, function(err, results) {
  //   if(err){
  //     console.log('err ' + err);
  //   }
    
  //   console.log('results ' + results);
  // });
});

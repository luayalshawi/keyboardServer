var express = require('express')
var app = express()
var robot = require('robotjs');
var robotjs = require('robot-js');
var bodyParser = require('body-parser')
var keyboard = robotjs.Keyboard();

app.use(bodyParser.json())

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
})
app.post('/api/sendkeys', function (req, res) {
  
  var key = req.body.keys;

  if (key=="z")
  {
    keyboard.press(robotjs.KEY_Z);
    robotjs.Timer.sleep (160);
    keyboard.release(robotjs.KEY_Z);
  }
  else if (key=="_z")
  {
    keyboard.press(robotjs.KEY_Z);
    robotjs.Timer.sleep (25);
    keyboard.release(robotjs.KEY_Z);
  }
  else if(key=="x")
  {
    keyboard.press(robotjs.KEY_X);
    robotjs.Timer.sleep (160);
    keyboard.release(robotjs.KEY_X);
  }
  else if(key=="_x")
  {
    keyboard.press(robotjs.KEY_X);
    robotjs.Timer.sleep (25);
    keyboard.release(robotjs.KEY_X);
  }
  else if(key=="f")
  {
    keyboard.click(robotjs.KEY_D);
  }
  res.json({ success: 'message'});
})

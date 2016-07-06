# ci trafficlight driver

[![Build Status](https://travis-ci.org/richardlt/ci-trafficlight-driver.svg?branch=master)](https://travis-ci.org/richardlt/ci-trafficlight-driver)

Install :
```javascript
npm install ci-trafficlight-driver
```

Example :
```javascript
var CiTrafficlightDriver = require('ci-trafficlight-driver');

var driver = CiTrafficlightDriver.init(500); // set blink delay in ms, default to 1 sec

driver.setColor('green'); // available colors are green, orange and red
driver.setBlink(true); // true to start blinking, false to stop
driver.clean(); // shutdown all lights
```

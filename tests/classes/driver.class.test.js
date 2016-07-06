var assert = require('assert'),
    sinon = require('sinon');

var Driver = require('../../src/classes/driver.class.js'),
    ColorConstant = require('../../src/constants/color.constant.js');

describe("DriverClass", function() {

    var _driver = null;

    before(function(done) {
        _driver = new Driver(100);
        done();
    });

    after(function(done) {
        done();
    });

    it("Driver method should be executed", function() {
        _driver.setColor(ColorConstant.GREEN);
        _driver.setBlink(true);
        _driver.clean();
    });

});

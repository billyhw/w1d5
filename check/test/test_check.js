var assert = require("chai").assert;
var check = require("../lib/check");

describe("Luhn's Algorithm", function() {
  it("should return true if the number is valid", function() {
    var num = 79927398713;
    var result = check(num);
    assert.isTrue(result);
  });

  it("should return true if the number is not valid", function() {
    var num = 79927398710;
    assert.isFalse(check(num));
  });

  it("should return error if the number is not 11-digit long", function() {
    var num = 398710;
    assert.throws(function() {
      check(num);
    }, Error, "Input must be 11-digit long.");
  });
});
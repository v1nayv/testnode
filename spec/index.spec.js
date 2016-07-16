var AddAll = require('../index.js');

describe("AddAll Suite", function() {
  it("should respond with a value of 6", function(done) {
    var value = AddAll([1,2,3]);
    expect(value).toEqual(6);
    done();
  });

});

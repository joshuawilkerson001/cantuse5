Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)

function unusualFive() {
  let array = ["orange", "apple", "bike", "car", "hand"]

  return array.length
}

//sample tests
describe("unusualFive", function(){
  it("should return 5", function(){
    assert.strictEqual(unusualFive(), 5);
  });
});

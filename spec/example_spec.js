describe("Some feature", function(){
  describe("Some function", function(){
    it("should return true when called", function(){
      expect(someFunction()).toBeTruthy();
    })

    it("returns an array of names", function(){
      expect(anotherFunction()).toContain("Jenn");
      expect(anotherFunction()).not.toContain("Pizza");
    })
  })
});

describe("User", function(){
  it("should ensure that user is 21 and older", function(){
    expect(User.getAge()).toBeLessThan(20)
  })
});

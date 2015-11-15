describe("Hello World", function(){
  it("should return hello world", function(){
    expect(helloWorld()).toEqual("Hello World");
  })
});

describe("name", function(){
  it("name of the site", function(){
    expect(name()).toEqual("What is my name?");
  })
})

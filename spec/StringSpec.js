describe("Add", function() {
  it("should return zero for an empty string", function() {
    let sum = Add("");
    expect(sum).toEqual(0);
  })

  it("should return a number if there's only one number passed eg: Add('5') => 5", function() {
    let sum = Add("28");
    expect(sum).toEqual(28);

    sum = Add("5");
    expect(sum).toEqual(5);

  })

  it("should be able to add up 2 numbers", function() {
    let sum = Add("10,3");
    expect(sum).toEqual(13);

  })
    
  it("should be able to add up multiple numbers", function() {
    let sum = Add("10,3,2,1,7");
    expect(sum).toEqual(23);

  })
 
  it("should be able to add numbers separated by a comma", function() {
    let sum = Add("1,2,3");
    expect(sum).toEqual(6);

  })

  it("should be able to add numbers separated by a newline", function() {
    let sum = Add("1,2\n3");
    expect(sum).toBe(6);
      
  })

  it("should be able to handle stuff like delimiter: '//;\n1;2'", function() {
    let sum = Add("\n1;2");
    expect(sum).toBe(3);
     
  })

    
  it("should ignore numbers bigger than 1000", function() {
    let sum = Add("2,1000");
    expect(sum).toBe(2);
     
  })
    
 it("should be able to handle any length of the delimiter", function() {
    let sum = Add("//[***]\n1***2***3");
    expect(sum).toBe(6);
     
  })
    
  it("should be able to handle multiple delimiters", function() {
    let sum = Add("//[*][%]\n1*2%3");
    expect(sum).toBe(6);
     
  })
    
it("should throw an error if negative numbers are passed", function(){
        expect(function () {
            let sum = Add("-1,-2");
        }).toThrow(new Error("negatives not allowed"));
    });
    

});

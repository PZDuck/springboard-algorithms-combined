const sortedFrequency = require("./sorted-frequency")

describe("#sortedFrequency", function(){
  it("returns the frequency", function(){
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)).toBe(4)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)).toBe(1)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)).toBe(2)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3, 3, 4, 5, 5, 5, 6, 6, 7], 5)).toBe(3)
    expect(sortedFrequency([1, 2], 1)).toBe(1)
    expect(sortedFrequency([6, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 9], 8)).toBe(10)
    expect(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)).toBe(-1)
  })
})

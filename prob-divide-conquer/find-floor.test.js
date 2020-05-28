const findFloor = require("./find-floor")

describe("#findFloor", function(){
  it("returns the floor or -1", function(){
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 5)).toBe(2) // 2
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 20)).toBe(19) // 19
    expect(findFloor([1, 2, 8, 10, 10, 12, 19], 0)).toBe(-1) // -1
    expect(findFloor([1, 6, 9, 11, 23, 54, 67, 77, 78, 80, 91], 12)).toBe(11)
    expect(findFloor([6, 8, 16, 23, 25, 26, 34, 35], 25)).toBe(25)
  })
})
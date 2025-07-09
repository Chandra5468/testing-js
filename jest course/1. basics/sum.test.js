const sum = require("./sum")

// either use describe or test
test("Checking addition of two numbers 4, 5 should be equal to 9", ()=>{
    expect(sum(4,5)).toBe(9)
})
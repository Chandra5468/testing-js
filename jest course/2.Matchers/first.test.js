const abc = require("./first")

test("2 + 2 is 4", ()=>{
    expect(abc.sum(2,2)).toBe(4)
})

test("Object assignment", ()=>{
    const data = {one:1, two:2}
    
    expect(data).toEqual({one:1, two:2})
})

test("null is falsy", ()=>{
    const n= null;
    const x = 0;
    expect(n).toBeFalsy();
    expect(x).toBeFalsy();
})

test("checking if it is truth", ()=>{
    const n = 1;
    expect(n).toBeTruthy();
    // expect(n).toBeFalsy(); // This will fail the test case
})

test("throws an invalid input", ()=>{
    expect(()=>{
        abc.myFunction('ac')
    }).toThrow();
    // expect(()=>{
    //     abc.myFunction(5)
    // }).toThrow(); // this will give error function did not throw error
})
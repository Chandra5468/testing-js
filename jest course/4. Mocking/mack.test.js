const abc = require('./mack')

/*
    Mock function creation using jest

    const mockCallback = jest.fn(x => 42+x);
    mockCallback(1);
    mockCallback(2);
*/

describe("Mock Implmentation of a basic function", ()=>{
    test("Basic mock implmentation",()=>{
        const mock = jest.fn(x => 42 + x);
        expect(mock(1)).toBe(43)
    })
})
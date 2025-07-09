const controller = require('./basic')

test("Properly adds two numbers", ()=>{
    expect(
        controller.sum(1,2)
    ).toBe(3)
})

test("Checking cloned array", ()=>{
    expect(
        controller.clonedArray([1,3,2])
    ).toEqual([1,3,2]) // toBe will fail as values are not only compared but also addresses in toBe

    expect(
        controller.clonedArray([1,3,2])
    ).not.toBe([1,3,2])
})

it("checking subtration",()=>{
    expect(
        controller.subtract(1,3)
    ).toBe(-2)
})

// Describe block to group common tests
describe("check for truthy or falsy",()=>{
    it("null",()=>{
        const n = null;
        expect(n).toBeFalsy()
        // expect(n).not.toBeTruthy() // this is same as toBeFalsy()
        expect(n).toBeNull()
        expect(n).not.toBeUndefined()
    })

    it("0 Value",()=>{
        const n = 0;
        expect(n).toBeFalsy()
        expect(n).not.toBeTruthy() // this is same as toBeFalsy()
        // expect(n).toBeNull()
        // expect(n).not.toBeUndefined()
    })

    it.only("Adding floats", ()=>{
        const value = 0.1+0.2
        expect(value).toBeCloseTo(0.2999)
    })
})
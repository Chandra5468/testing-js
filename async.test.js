const services = require("./async")


// service

test("should return correct todo", async ()=>{
    const todo = await services.data(1);
    expect(todo).toBe({})
})



// If you want to initialize something or declare something after the tests you can use
// beforeAll(()=>{

// })
// beforeEach(()=>{

// })
// afterEach(()=>{

// })
// afterAll(()=>{

// })
/// THen now do
// describe("all before, each and afters", ()=>{

// })


// If you want to run one test in the entire test file. use it.only()
describe("testing something else", ()=>{
    it.only("true should be truthy", ()=>{
        expect(true).toBeTruthy()
    })
})
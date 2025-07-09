const abc = require("./furst")

test("Data is penut", (done)=>{ // What does this done do. It signals JEST the test is complete
    function callback(data){
        try{
            expect(data).toBe('Peanut butter')
            done();
        }catch(e){
            done(e);
        }
    }

    abc.fetchData(callback);
})

describe("Checking resolve and reject of promise", ()=>{
    test("the data is Peanut Butter", ()=>{
        return expect(abc.promis()).resolves.toBe('Peanut Butter')
    })

    // test("the fetch fails with an error", ()=>{
    //     return expect(abc.promis()).rejects.toThrow('error')
    // }) // This will fail as there is no error being thrown
})

describe("Using await for async functions",()=>{
    test("the data is Peanut Butter", async ()=>{
        const data = await abc.promis();
        expect(data).toBe("Peanut Butter");
    })
})
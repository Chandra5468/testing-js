// Types of Matchers are
/* 
1. toBe()
2. toEqual() for object and array kind of comparison
3. toBeFalsy() a boolean type to check if a value is null, blank, false or undefined
4. toBeTruthy() a boolean type if a value is true
5. toThrow()  handling error throwing is important essential aspect. When a function in any case should throw error to test that specific case
*/

let abc = {
    sum: function(a,b){
        return a+b
    },
    myFunction: function(input){
        if(typeof(input)!=='number'){
            throw new Error("Invalid input")
        }
    }
}

module.exports = abc
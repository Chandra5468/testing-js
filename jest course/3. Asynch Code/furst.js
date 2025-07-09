

let abc = {
    fetchData : function(callback){
        setTimeout(()=>{
            callback("Peanut butter")
        },4000)
    },
    promis: function(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>resolve("Peanut Butter"), 4000)
        })
    }
}

module.exports = abc
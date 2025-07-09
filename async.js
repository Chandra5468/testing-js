const axios = require("axios")

let services = {
    data: async function(id){
        let results = await axios.get("https://dummyjson.com/todos/"+id)
        return results.data
    }
}

module.exports = services
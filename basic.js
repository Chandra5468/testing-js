let controller = {
    sum : function(a, b){
        return a+b
    },
    subtract:function(a,b){
        return a-b
    },
    clonedArray: function(arr){
        return [...arr]
    }
}

module.exports = controller
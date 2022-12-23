const removeFromArray = function(arr, ...rm) {
    function rmv(i){
        return  !rm.includes(i);    //returns all items not(!) in ...rm
    }
    return arr.filter(rmv);
};

// Do not edit below this line
module.exports = removeFromArray;

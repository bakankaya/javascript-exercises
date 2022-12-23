const reverseString = function(word) {
    let arr = [];
    let outcome = "";
    for (let i= 0;i<word.length; i++){
        arr.unshift(word.charAt(i));
    }
    for (let j=0; j<arr.length;j++){
        outcome +=arr[j];
    }
    return outcome;
};

// Do not edit below this line
module.exports = reverseString;

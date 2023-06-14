const reverseString = function(str) {
    const arr = str.split("");
    const length = arr.length;
    let newArr = [];

    for (let i = length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr.join("");

};

// Do not edit below this line
module.exports = reverseString;

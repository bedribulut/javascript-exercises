const sumAll = function(a, b) {
    console.log(a);
    console.log(b);
    let total = 0;
    if (a < 0 || b < 0 || typeof a !== "number" || typeof b !== "number") {
        return "ERROR";
    } else if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
            total = total + i;
        }
        return total;
    } else if (b < a) {
        for (let i = b; i <= a; i++) {
            console.log(i);
            total = total + i;
        }
        return total;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;

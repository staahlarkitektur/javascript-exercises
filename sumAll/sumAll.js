const sumAll = function(a,b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";

    if (a < 0 || b < 0) return "ERROR";

    let arr = [a,b];
    let fullArr = [];
    let sum = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    arr.sort(function (a,b){return a-b});

    for (let i = arr[0]; i <= arr[1]; i++){
        fullArr.push(i);
    }
    sum = fullArr.reduce(reducer);
    return sum;

    
}

module.exports = sumAll

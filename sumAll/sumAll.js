const sumAll = function() {
    let fullArr = [];
    let sum = 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    arr.sort(function (a,b){return a-b});

    for (let i = arr[0]; i <= arr[1]M i++){
        fullArr.push(i);
    }
    sum = fullArr.reduce(reducer);
    return sum;
}

module.exports = sumAll

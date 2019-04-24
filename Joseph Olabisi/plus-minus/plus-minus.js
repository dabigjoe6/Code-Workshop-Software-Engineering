'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    let count_negative = 0;
    let count_positive = 0;
    let count_zero = 0;

    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] < 0) {
            ++count_negative;
        } else if (arr[i] > 0) {
            ++count_positive;
        } else if (arr[i] === 0) {
            ++count_zero;
        }
    }

    let ratio_positive = count_positive / arr.length;
    let ratio_negative = count_negative / arr.length;
    let ratio_zero = count_zero / arr.length;

    console.log(ratio_positive);
    console.log(ratio_negative);
    console.log(ratio_zero);

    
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

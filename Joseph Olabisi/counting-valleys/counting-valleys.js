'use strict';

const fs = require('fs');

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

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let char1 = "U";
    let char2 = "D";
    if (n >= 2 && n <= Math.pow(10, 6)) {
        if (s.includes("U") && s.includes("D")) {
            let value1 = 1;
            let value2 = -1;

            console.log(char1);
            console.log(char2);

            let counter = -1;
            let noOfValleys = 0;
            let sum = 0;
            for (let i = 0; i < n; ++i) {
                let prevSum = sum;
                if (s[i] === char1) {
                    sum = sum + value1;
                } else {
                    sum = sum + value2;
                }

                console.log(sum);

                if (sum === 0) {
                    ++counter;
                }

                if (prevSum < 0 && sum === 0) {
                    ++noOfValleys;
                }
            }

            return noOfValleys;
        } else if (s.includes("U") || s.includes("D")) {
            return 1;
        }
    }
    
    


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}

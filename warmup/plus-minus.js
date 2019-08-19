'use strict';

function count(state, sign, n) {
    if (Math.sign(sign) == Math.sign(n)) {
        return state + 1;
    }

    return state;
}


// Complete the plusMinus function below.
function plusMinus(arr) {
    return arr.reduce(([positive, negative, zero], n) => (
        [
            count(positive, 1, n),
            count(negative, -1, n),
            count(zero, 0, n),
        ]
    ), Array(3).fill(0)).map(total => total / arr.length).join('\n');
}

// Standard difference

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

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    console.log(plusMinus(arr));
}

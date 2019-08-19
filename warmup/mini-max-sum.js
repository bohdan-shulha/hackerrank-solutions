'use strict';

function sum(arr) {
    return arr.reduce((acc, n) => acc + n, 0);
}

function miniMaxSum(arr) {
    arr.sort();

    return [
        sum(arr.slice(0, 4)),
        sum(arr.slice(arr.length - 4)),
    ].join(' ')
}

// Standard boilerplate

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
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    console.log(miniMaxSum(arr));
}

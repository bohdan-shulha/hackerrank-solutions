'use strict';

function row(s, length) {
    return Array(length).fill(s).join('');
}

function staircase(n) {
    return Array.from(Array(n), (_, i) => (
        row(' ', (n - i - 1)) + row('#', (i + 1))
    )).join('\n');
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
    const n = parseInt(readLine(), 10);

    console.log(staircase(n));
}

'use strict';

function countDrops(houseS, houseT, tree, drops) {
    return drops.reduce((acc, drop) => {
        const dropLocation = tree + drop;
        
        if (dropLocation >= houseS && dropLocation <= houseT) {
            return acc + 1;
        }

        return acc;
    }, 0);
}


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    return [
        countDrops(s, t, a, apples),
        countDrops(s, t, b, oranges),
    ];
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
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    console.log(countApplesAndOranges(s, t, a, b, apples, oranges).join('\n'));
}

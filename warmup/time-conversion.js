'use strict';


function dropAmPm(time) {
    return time.substr(0, time.length - 2);
}

function timeConversion(s) {
    const amPM = s.substr(-2);

    const isTwelveOClock = s.substr(0, 2) === '12';

    const isMidnight = isTwelveOClock && amPM === 'AM';
    if (isMidnight) {
        return '00' + s.substr(2, s.length - 4);
    }

    const isNoon = isTwelveOClock && amPM === 'PM';
    if (isNoon || amPM === 'AM') {
        return dropAmPm(s);
    }
    
    const hours = (Number(s.substr(0, 2)) + 12).toString().padStart(2, '0');

    return hours + s.substr(2, s.length - 4);
}

// Standard boilerplate

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}

const readline = require('readline')
const spin = require('./slot-machine/spin')

const clearScreen = () => {
    console.log('\x1B[2J\x1B[0f');
}

clearScreen();
console.log("Hit enter to spin the wheel!");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const strip = [
    '🤑',
    '💩',
    '💩',
    '💩',
    '🤖',
    '🐸',
    '🐸',
    '🐸',
    '🙈',
    '🙈',
    '🙈',
    '🐧',
    '🐧',
    '🐧',
    '🐱',
    '🐱',
    '🐱',
    '🐱',
];
const slots = [strip, strip, strip];

const randomizer = () => Math.round(Math.random() * (strip.length-1))

let bank = 0;

rl.on('line', function(line){

    clearScreen();
    
    const result = spin(slots, randomizer)

    // bank += calculateWinnings();

    console.log("");
    console.log("");
    console.log(result.map((r) => `[${r}  ]`).join(' '));
    console.log("");
    // console.log("Bank total: " + bank);
    console.log("");
    console.log("");
    console.log("Hit enter to spin again!");
})
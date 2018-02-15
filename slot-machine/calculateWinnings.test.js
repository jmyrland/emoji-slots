const calculateWinnings = require('./calculateWinnings')

const rewards = {
    '🤕': 100,
    '🤢': 10
}

test('win condition #1', () => {

    const result = ['🤢'];
    const winnings = calculateWinnings(result, rewards)

    expect(winnings).toBe(10);

})

test('win condition #2', () => {

    const result = ['🤕'];
    const winnings = calculateWinnings(result, rewards)

    expect(winnings).toBe(100);

})

test('win condition #2', () => {

    const result = ['🤕', '🤕'];
    const winnings = calculateWinnings(result, rewards)

    expect(winnings).toBe(100);

})

test('win condition #3', () => {

    const result = ['🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕', '🤕'];
    const winnings = calculateWinnings(result, rewards)

    expect(winnings).toBe(100);

})

test('win condition #2', () => {

    const result = ['🤕', '🤢'];
    const winnings = calculateWinnings(result, rewards)

    expect(winnings).toBe(0);

})
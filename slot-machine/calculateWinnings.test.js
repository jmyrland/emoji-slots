const calculateWinnings = require('./calculateWinnings')

const rewards = {
    '❄': 10,
    '⛄': 20,
}

test('win condition #1 is properly rewarded', () => {
    const spinResults = ['❄','❄','❄'];
    const results = calculateWinnings(rewards, spinResults);

    expect(results).toBe(10);
})

test('win condition #2 is properly rewarded', () => {
    const spinResults = ['⛄','⛄','⛄'];
    const results = calculateWinnings(rewards, spinResults);

    expect(results).toBe(20);
})

test('win condition with 4 slots is properly rewarded', () => {
    const spinResults = ['⛄','⛄','⛄','⛄'];
    const results = calculateWinnings(rewards, spinResults);

    expect(results).toBe(20);
})

test('lose condition is not rewarded', () => {
    const spinResults = ['❄','❄','❄','⛄'];
    const results = calculateWinnings(rewards, spinResults);

    expect(results).toBe(0);
})
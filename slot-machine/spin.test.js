const spin = require('./slot-machine/spin')

const strip = [
    '💩',
    '🤑',
];

const slots = [
    strip,
    strip,
    strip,
]

test('result to be an array', () => {
    const randomizer = jest.fn();
    const result = spin(slots, randomizer)
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toEqual(slots.length);
})

test('randomizer is called', () => {
    const randomizer = jest.fn();
    const result = spin(slots, randomizer)
    expect(randomizer).toHaveBeenCalledTimes(slots.length);
})

test('win condition', () => {
    const randomizer = () => 1;
    const result = spin(slots, randomizer)
    expect(result).toEqual(['🤑','🤑','🤑']);
})

test('loose condition', () => {
    const randomizer = jest.fn()
        .mockReturnValueOnce(0)
        .mockReturnValue(1);

    const result = spin(slots, randomizer)
    expect(result).toEqual(['💩','🤑','🤑']);
})
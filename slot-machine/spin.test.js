const spin = require('./spin')

const reel = [
    '🤕',
    '🤢' 
]

test('that the result is an array', () => {
    const randomizer = () => 0;
    const slots = [
        reel,
        reel,
        reel
    ]
    const result = spin(slots, randomizer)
    expect(result).toBeInstanceOf(Array)
})

test('that the result is an array of correct length', () => {
    const randomizer = () => 0;
    const slots = [
        reel,
        reel,
        reel
    ]
    const result = spin(slots, randomizer)
    expect(result.length).toEqual(3)
})

test('that randomizer is called', () => {
    const fakeRandomizer = jest.fn()
        .mockReturnValue(0);
    const slots = [
        reel,
        reel,
        reel
    ]
    spin(slots, fakeRandomizer)
    expect(fakeRandomizer)
        .toHaveBeenCalledTimes(3);
})

test('Win condition', () => {
    const randomizer = () => 0;
    const slots = [
        reel,
        reel,
        reel
    ]
    const result = spin(slots, randomizer)
    expect(result).toEqual(['🤕', '🤕', '🤕'])
})

test('Loss condition', () => {
    const fakeRandomizer = jest.fn()
        .mockReturnValueOnce(0)
        .mockReturnValueOnce(1)
        .mockReturnValueOnce(0)

    const slots = [
        reel,
        reel,
        reel
    ]
    const result = spin(slots, fakeRandomizer)
    expect(result).toEqual(['🤕', '🤢', '🤕'])
})

test('variable reels yields correct result', () => {
    const fakeRandomizer = jest.fn()
        .mockReturnValue(0)
    const slots = [
        reel
    ]
    const result = spin(slots, fakeRandomizer)
    expect(result).toEqual(['🤕'])
})

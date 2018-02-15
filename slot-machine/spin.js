
const spin = (slots, randomizer) => 
    slots.map(reel => reel[randomizer()])

module.exports = spin;
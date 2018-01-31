
const spin = (slots, randomizer) => 
    slots.map(strip => strip[randomizer()] )

module.exports = spin;

const calculateWinnings = (rewards, spinResults) => {
    var key = spinResults[0];
    for(var i = 1; i < spinResults.length; i++) {
        if (spinResults[i] !== key) {
            return 0;
        }
    }
    return rewards[key];
}

module.exports = calculateWinnings;

const calculateWinnings = (results, rewards) => {
    const firstResult = results[0];

    for (let i = 1; i < results.length; i++) {
        const result = results[i];
        if (firstResult !== result)
            return 0;
    }

    return rewards[firstResult];
}

module.exports = calculateWinnings;
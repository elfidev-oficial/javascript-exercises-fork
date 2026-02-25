const removeFromArray = function(arr, ...args) {
    const set = new Set(args)
    const removalList = Array.from(set); // Filters the repeated values

    for (let item of removalList) {
        if (!arr.includes(item)) continue;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                arr.splice(i, 1);
                i--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

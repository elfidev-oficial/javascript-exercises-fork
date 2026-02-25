const repeatString = function(string, num) {
    let newString = [];

    if (num < 0) {
        return 'ERROR';
    }
    for (let i = 0; i < num; i++) {
        newString.splice(i, 0, string);
    }

    return newString.join('');
};

// Do not edit below this line
module.exports = repeatString;

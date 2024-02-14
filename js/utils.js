var utils = {};

// min to (max-1)
utils.randomInt = function (max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
};

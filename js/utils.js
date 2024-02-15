var utils = {};

utils.sleepAsync = function(ms) {
    return new Promise(r=> setTimeout(r, ms));
};

// min to (max-1)
utils.randomInt = function (max, min = 0) {
    return Math.floor(Math.random() * (max - min)) + min;
};

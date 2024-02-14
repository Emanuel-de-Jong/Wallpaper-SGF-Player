var sgfController = {};

sgfController.init = function() {
    sgfController.length = sgfController.sgfs.length;
};

sgfController.rnd = function() {
    return sgfController.get(utils.randomInt(sgfController.length));
};

sgfController.get = function(index) {
    return "(;FF[4]GM[1]SZ[19]PB[]PW[]HA[0]KM[6.5]RU[Japanese];" + sgfController.sgfs[index];
};

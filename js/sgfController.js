var sgfController = {};

sgfController.init = function() {
    sgfController.length = sgfController.sgfs.length;
};

sgfController.goToRndSGF = function() {
    sgfController.prevSGF = sgfController.sgf;
    sgfController.prevSGFName = sgfController.sgfName;

    let index = utils.randomInt(sgfController.length);
    sgfController.sgf = sgfController.sgfs[index][1];
    sgfController.sgfName = sgfController.sgfs[index][0];

    return sgfController.sgf;
};

sgfController.goToPrevSGF = function() {
    if (sgfController.prevSGF == undefined) {
        return;
    }
    
    sgfController.sgf = sgfController.prevSGF;
    sgfController.sgfName = sgfController.prevSGFName;
    
    sgfController.prevSGF = undefined;

    return sgfController.sgf;
};

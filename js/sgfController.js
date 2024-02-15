var sgfController = {};

sgfController.init = function() {
    sgfController.length = sgfController.sgfs.length;

    sgfController.sgfNameElement = document.getElementById("sgfName");
};

sgfController.SetSGFName = function(name) {
    sgfController.sgfName = name;
    sgfController.sgfNameElement.innerHTML = sgfController.sgfName;
};

sgfController.goToRndSGF = function() {
    sgfController.prevSGF = sgfController.sgf;
    sgfController.prevSGFName = sgfController.sgfName;

    let index = utils.randomInt(sgfController.length);
    sgfController.sgf = sgfController.sgfs[index][1];
    sgfController.SetSGFName(sgfController.sgfs[index][0]);

    board.loadSGF(sgfController.sgf);
};

sgfController.goToPrevSGF = function() {
    if (sgfController.prevSGF == undefined) {
        return;
    }
    
    sgfController.sgf = sgfController.prevSGF;
    sgfController.SetSGFName(sgfController.prevSGFName);
    
    sgfController.prevSGF = undefined;

    board.loadSGF(sgfController.sgf);
};

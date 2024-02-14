var responsive = {};

responsive.init = function() {
    responsive.mediaMaxWidth1000 = window.matchMedia("(max-width: 1000px)");

    responsive.mediaMaxWidth1000.addEventListener("change", responsive.mediaMaxWidth1000ChangeListener);

    responsive.mediaMaxWidth1000ChangeListener();
};

responsive.mediaMaxWidth1000ChangeListener = function() {
    if (responsive.mediaMaxWidth1000.matches) {
        besogo.treeScale = 0.65;
    } else {
        besogo.treeScale = besogo.DEFAULT_TREE_SCALE;
    }

    board.editor.rebuildNavTree();
};
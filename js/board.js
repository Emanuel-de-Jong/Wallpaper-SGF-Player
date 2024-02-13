var board = {};

board.init = function() {
	board.element = document.getElementById("board");
	board.treeScrollbarElement = document.getElementById("treeScrollbar");

	besogo.create(board.element, {
        resize: "auto",
        orient: "portrait",
        panels: "control+tree",
		coord: "western",
		variants: 2,
		nowheel: true
	});

	board.editor = board.element.besogoEditor;

    document.querySelector('#board button[title="First node"]').remove();
    document.querySelector('#board button[title="Jump back"]').remove();
    document.querySelector('#board button[title="Jump forward"]').remove();
    document.querySelector('#board button[title="Last node"]').remove();
    document.querySelector('#board button[title="Previous sibling"]').remove();
    document.querySelector('#board button[title="Next sibling"]').remove();
    document.querySelector('#board button[title="Variants: [child]/sibling"]').remove();
    document.querySelector('#board button[title="Variants: show/[hide]"]').remove();
    document.querySelector('#board button[title="Toggle coordinates"]').remove();

	board.treeScrollbarElement.addEventListener("mousemove", (event) => board.treeScrollBarMousemoveListener(event));

	board.loadNextSGF();
};

board.loadPrevSGF = function() {
	if (board.prevSGF == undefined) {
		return;
	}

	board.currentSGF = board.prevSGF;
	board.prevSGF = undefined;
	board.loadSGF(board.currentSGF);
};

board.loadNextSGF = function() {
	board.prevSGF = board.currentSGF;
	board.currentSGF = sgfs.rnd();
	board.loadSGF(board.currentSGF);
};

board.loadSGF = function(sgfContent) {
	let sgf = besogo.parseSgf(sgfContent);
	besogo.loadSgf(sgf, board.editor);
};

board.next = function() {
	board.editor.nextNode(1);
};

board.treeScrollBarMousemoveListener = function(event) {
	let treeContainerElement = document.querySelector(".besogo-tree");
	let treeElement = document.querySelector(".besogo-tree > svg");

	let mouseX = event.clientX - board.treeScrollbarElement.getBoundingClientRect().left;
	let scrollRatio = mouseX / (board.treeScrollbarElement.clientWidth);

	let scrollValue = scrollRatio * ((treeElement.clientWidth * 1.01) - board.treeScrollbarElement.clientWidth);
	treeContainerElement.scrollLeft = scrollValue;
};

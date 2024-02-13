var board = {};

board.init = function() {
	board.element = document.getElementById("board");
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

	document
		.querySelector("#board .besogo-control")
		.insertAdjacentHTML(
			"beforeend",
			'<button class="boardCustomBtn" id="stopBtn">Stop</button>' +
			'<button class="boardCustomBtn" id="startBtn">Start</button>' +
			'<button class="boardCustomBtn" id="prevSGFBtn">Prev</button>' +
			'<button class="boardCustomBtn" id="nextSGFBtn">Next</button>' +
			'<input type="text" id="timerMSInput" value="2000">'
		);

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
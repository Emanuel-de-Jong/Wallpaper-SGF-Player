var custom = {};

custom.init = function() {
    sgfs.init();
    board.init();
    settings.init();

    settings.startBtnElement.addEventListener("click", custom.startBtnClickListener);
    settings.stopBtnElement.addEventListener("click", custom.stopBtnClickListener);
    settings.prevSGFBtnElement.addEventListener("click", custom.prevSGFBtnClickListener);
    settings.nextSGFBtnElement.addEventListener("click", custom.nextSGFBtnClickListener);

	custom.isRunning = true;
    custom.timer();
};

custom.startBtnClickListener = function() {
	custom.isRunning = true;
};

custom.stopBtnClickListener = function() {
	custom.isRunning = false;
};

custom.prevSGFBtnClickListener = function() {
	board.loadPrevSGF();
};

custom.nextSGFBtnClickListener = function() {
	board.loadNextSGF();
};

custom.timer = async function() {
	while (true) {
		if (!custom.isRunning) {
            await utils.sleepAsync(50);
			continue;
        }

		if (board.editor.getCurrent().children.length == 0) {
			board.loadNextSGF();
			continue;
		}
		
		await utils.sleepAsync(settings.timerMS);
		board.editor.nextNode(1);
	}
};

(function () {
	custom.init();
})();
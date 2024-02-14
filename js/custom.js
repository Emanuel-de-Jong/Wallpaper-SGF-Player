var custom = {};

custom.init = function() {
	sgfController.init();
    board.init();
    settings.init();

    settings.prevNodeElement.addEventListener("click", custom.stopTimer);
    settings.nextNodeElement.addEventListener("click", custom.stopTimer);
    settings.startBtnElement.addEventListener("click", custom.startTimer);
    settings.stopBtnElement.addEventListener("click", custom.stopTimer);
    settings.prevSGFBtnElement.addEventListener("click", custom.prevSGFBtnClickListener);
    settings.nextSGFBtnElement.addEventListener("click", custom.nextSGFBtnClickListener);

	board.editor.addListener((event) => { if (event.treeChange) custom.stopTimer(); });

	custom.startTimer();
    custom.timer();
};

custom.startTimer = function() {
	custom.isTimerRunning = true;
};

custom.stopTimer = function() {
	custom.isTimerRunning = false;
};

custom.prevSGFBtnClickListener = function() {
	board.loadPrevSGF();
	custom.startTimer();
};

custom.nextSGFBtnClickListener = function() {
	board.loadNextSGF();
	custom.startTimer();
};

custom.timer = async function() {
	while (true) {
		if (!custom.isTimerRunning) {
            await utils.sleepAsync(50);
			continue;
        }
		
		await utils.sleepAsync(settings.timerMS);

		if (!custom.isTimerRunning) {
			continue;
        }

		if (board.editor.getCurrent().children.length == 0) {
			board.loadNextSGF();
			continue;
		}

		board.next();
	}
};

document.addEventListener('DOMContentLoaded', () => {
	custom.init();
});

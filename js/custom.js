var custom = {};

custom.init = async function() {
	sgfController.init();
    board.init();
    settings.init();
    wallpaperEngine.init();
    responsive.init();

    settings.prevNodeBtnElement.addEventListener("click", custom.stopTimer);
    settings.nextNodeBtnElement.addEventListener("click", custom.stopTimer);
    settings.startBtnElement.addEventListener("click", custom.startTimer);
    settings.stopBtnElement.addEventListener("click", custom.stopTimer);
    settings.prevSGFBtnElement.addEventListener("click", custom.prevSGFBtnClickListener);
    settings.nextSGFBtnElement.addEventListener("click", custom.nextSGFBtnClickListener);

	board.editor.addListener((event) => { if (event.userStonePlace) custom.stopTimer(); });

	await utils.sleepAsync(500);

	if (settings.startTimerOnSGFLoad) {
		custom.startTimer();
	} else {
		custom.stopTimer();
	}

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

custom.timer = function() {
	if (!custom.isTimerRunning) {
		setTimeout(custom.timer, 50);
		return;
	}

	if (board.editor.getCurrent().children.length == 0) {
		if (!settings.startTimerOnSGFLoad) {
			custom.stopTimer();
		}

		board.loadNextSGF();
		custom.timer();
		return;
	}

	board.next();

	setTimeout(custom.timer, settings.timerMS);
};

document.addEventListener('DOMContentLoaded', () => {
	custom.init();
});

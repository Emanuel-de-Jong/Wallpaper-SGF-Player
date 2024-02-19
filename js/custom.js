var custom = {};

custom.init = async function() {
    wallpaperEngine.init();

	await utils.sleepAsync(500);
	
	sgfController.init();
    board.init();
    settings.init();
    responsive.init();

    settings.prevNodeBtnElement.addEventListener("click", custom.stopTimer);
    settings.nextNodeBtnElement.addEventListener("click", custom.stopTimer);
    settings.stopBtnElement.addEventListener("click", custom.stopTimer);
    settings.startBtnElement.addEventListener("click", custom.startTimer);
    settings.prevSGFBtnElement.addEventListener("click", custom.prevSGFBtnClickListener);
    settings.nextSGFBtnElement.addEventListener("click", custom.nextSGFBtnClickListener);

	board.editor.addListener((event) => { if (event.userStonePlace) custom.stopTimer(); });

	if (settings.startTimerOnSGFLoad) {
		custom.startTimer();
	} else {
		custom.stopTimer();
	}

    custom.timer();
};

custom.startTimer = function() {
	settings.stopBtnElement.classList.remove("btnActive");
	settings.startBtnElement.classList.add("btnActive");

	custom.isTimerRunning = true;
};

custom.stopTimer = function() {
	settings.stopBtnElement.classList.add("btnActive");
	settings.startBtnElement.classList.remove("btnActive");

	custom.isTimerRunning = false;
};

custom.prevSGFBtnClickListener = function() {
	sgfController.goToPrevSGF();
	custom.startTimer();
};

custom.nextSGFBtnClickListener = function() {
	sgfController.goToRndSGF();
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

		sgfController.goToRndSGF();
		custom.timer();
		return;
	}

	board.next();

	setTimeout(custom.timer, settings.timerMS);
};

document.addEventListener('DOMContentLoaded', () => {
	custom.init();
});

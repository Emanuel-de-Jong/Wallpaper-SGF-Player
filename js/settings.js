var settings = {};

settings.init = function() {
    settings.timerMSInputElement = document.getElementById("timerMSInput");
    settings.startBtnElement = document.getElementById("startBtn");
    settings.stopBtnElement = document.getElementById("stopBtn");
    settings.prevSGFBtnElement = document.getElementById("prevSGFBtn");
    settings.nextSGFBtnElement = document.getElementById("nextSGFBtn");

    settings.timerMSInputElement.addEventListener("change", settings.timerMSInputChangeListener);
    
    settings.timerMSInputChangeListener();
};

settings.timerMSInputChangeListener = function() {
    let newTimerMS = parseInt(settings.timerMSInputElement.value);
    if (newTimerMS > 5_000) {
        newTimerMS = 5_000;
    }
    
	settings.timerMS = newTimerMS;
};
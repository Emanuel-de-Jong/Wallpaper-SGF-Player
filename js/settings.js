var settings = {};

settings.TIMER_MS_BTN_NAME = "timerMSBtn"

settings.init = function() {
    settings.startTimerOnSGFLoad = true;

    settings.timerMSOptions = [
        500,
        1000,
        1500,
        2000,
        2500,
        3000,
        3500
    ];

    let timerMSBtns = "";
    settings.timerMSOptions.forEach(option => {
        timerMSBtns += '<button id="' + settings.TIMER_MS_BTN_NAME + option + '">' + option / 1000 + '</button>';
    });


    document
      .querySelector("#board .besogo-control")
      .insertAdjacentHTML("beforeend",
        '<button id="stopBtn">Stop</button>' +
        '<button id="startBtn">Start</button>' +
        '<button id="prevSGFBtn">Prev</button>' +
        '<button id="nextSGFBtn">Next</button>' +
        timerMSBtns);
    
    settings.prevNodeBtnElement = document.querySelector('#board button[title="Previous node"]');
    settings.nextNodeBtnElement = document.querySelector('#board button[title="Next node"]');
    settings.startBtnElement = document.getElementById("startBtn");
    settings.stopBtnElement = document.getElementById("stopBtn");
    settings.prevSGFBtnElement = document.getElementById("prevSGFBtn");
    settings.nextSGFBtnElement = document.getElementById("nextSGFBtn");

    settings.timerMSOptions.forEach(option => {
        settings[settings.getTimerMSBtnElement(option)] = document.getElementById(settings.TIMER_MS_BTN_NAME + option);
    });
    
    settings.setTimerMS(2500);

    settings.timerMSOptions.forEach(option => {
        settings[settings.getTimerMSBtnElement(option)].addEventListener("click", () => { settings.setTimerMS(option); });
    });
};

settings.getTimerMSBtnElement = function(ms) {
    return settings.TIMER_MS_BTN_NAME + ms + "element";
};

settings.setTimerMS = function(ms) {
    settings.setAllBtnInactive();
    settings[settings.getTimerMSBtnElement(ms)].classList.add("btnActive");
    settings.timerMS = ms;
};

settings.setAllBtnInactive = function() {
    settings.timerMSOptions.forEach(option => {
        settings[settings.getTimerMSBtnElement(option)].classList.remove("btnActive");
    });
};

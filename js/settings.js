var settings = {};

settings.init = function() {
    settings.startTimerOnSGFLoad = true;

    document
      .querySelector("#board .besogo-control")
      .insertAdjacentHTML("beforeend",
        '<button id="stopBtn">Stop</button>' +
        '<button id="startBtn">Start</button>' +
        '<button id="prevSGFBtn">Prev</button>' +
        '<button id="nextSGFBtn">Next</button>' +
        '<button id="sgfMS500Btn">0.5</button>' +
        '<button id="sgfMS1000Btn">1</button>' +
        '<button id="sgfMS1500Btn">1.5</button>' +
        '<button id="sgfMS2000Btn">2</button>' +
        '<button id="sgfMS2500Btn">2.5</button>' +
        '<button id="sgfMS3000Btn">3</button>' +
        '<button id="sgfMS3500Btn">3.5</button>');
    
    settings.prevNodeBtnElement = document.querySelector('#board button[title="Previous node"]');
    settings.nextNodeBtnElement = document.querySelector('#board button[title="Next node"]');
    settings.startBtnElement = document.getElementById("startBtn");
    settings.stopBtnElement = document.getElementById("stopBtn");
    settings.prevSGFBtnElement = document.getElementById("prevSGFBtn");
    settings.nextSGFBtnElement = document.getElementById("nextSGFBtn");
    settings.sgfMS500BtnElement = document.getElementById("sgfMS500Btn");
    settings.sgfMS1000BtnElement = document.getElementById("sgfMS1000Btn");
    settings.sgfMS1500BtnElement = document.getElementById("sgfMS1500Btn");
    settings.sgfMS2000BtnElement = document.getElementById("sgfMS2000Btn");
    settings.sgfMS2500BtnElement = document.getElementById("sgfMS2500Btn");
    settings.sgfMS3000BtnElement = document.getElementById("sgfMS3000Btn");
    settings.sgfMS3500BtnElement = document.getElementById("sgfMS3500Btn");
    
    settings.timerMS = 2500;
    settings.sgfMS2500BtnElement.classList.add("btnActive");

    settings.sgfMS500BtnElement.addEventListener("click", () => {
        settings.setAllBtnInactive();
        settings.sgfMS500BtnElement.classList.add("btnActive");
        settings.timerMS = 500; });
    settings.sgfMS1000BtnElement.addEventListener("click", () => {
        settings.setAllBtnInactive();
        settings.sgfMS1000BtnElement.classList.add("btnActive");
        settings.timerMS = 1000; });
    settings.sgfMS1500BtnElement.addEventListener("click", () => {
        settings.setAllBtnInactive();
        settings.sgfMS1500BtnElement.classList.add("btnActive");
        settings.timerMS = 1500; });
    settings.sgfMS2000BtnElement.addEventListener("click", () => {
        settings.setAllBtnInactive();
        settings.sgfMS2000BtnElement.classList.add("btnActive");
        settings.timerMS = 2000; });
    settings.sgfMS2500BtnElement.addEventListener("click", () => {
        settings.setAllBtnInactive();
        settings.sgfMS2500BtnElement.classList.add("btnActive");
        settings.timerMS = 2500; });
    settings.sgfMS3000BtnElement.addEventListener("click", () => {
        settings.setAllBtnInactive();
        settings.sgfMS3000BtnElement.classList.add("btnActive");
        settings.timerMS = 3000; });
    settings.sgfMS3500BtnElement.addEventListener("click", () => {
        settings.setAllBtnInactive();
        settings.sgfMS3500BtnElement.classList.add("btnActive");
        settings.timerMS = 3500; });
};

settings.setAllBtnInactive = function() {
    settings.sgfMS500BtnElement.classList.remove("btnActive");
    settings.sgfMS1000BtnElement.classList.remove("btnActive");
    settings.sgfMS1500BtnElement.classList.remove("btnActive");
    settings.sgfMS2000BtnElement.classList.remove("btnActive");
    settings.sgfMS2500BtnElement.classList.remove("btnActive");
    settings.sgfMS3000BtnElement.classList.remove("btnActive");
    settings.sgfMS3500BtnElement.classList.remove("btnActive");
};

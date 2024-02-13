var settings = {};

settings.init = function() {
    settings.timerMS = 1500;

    document
		.querySelector("#board .besogo-control")
		.insertAdjacentHTML(
			"beforeend",
			'<button class="boardCustomBtn" id="stopBtn">Stop</button>' +
			'<button class="boardCustomBtn" id="startBtn">Start</button>' +
			'<button class="boardCustomBtn" id="prevSGFBtn">Prev</button>' +
			'<button class="boardCustomBtn" id="nextSGFBtn">Next</button>' +
			'<button class="boardCustomBtn" id="sgfMS500Btn">500</button>' +
			'<button class="boardCustomBtn" id="sgfMS1000Btn">1000</button>' +
			'<button class="boardCustomBtn" id="sgfMS1500Btn">1500</button>' +
			'<button class="boardCustomBtn" id="sgfMS2000Btn">2000</button>' +
			'<button class="boardCustomBtn" id="sgfMS3000Btn">3000</button>'
		);
    
    settings.startBtnElement = document.getElementById("startBtn");
    settings.stopBtnElement = document.getElementById("stopBtn");
    settings.prevSGFBtnElement = document.getElementById("prevSGFBtn");
    settings.nextSGFBtnElement = document.getElementById("nextSGFBtn");
    settings.sgfMS500BtnElement = document.getElementById("sgfMS500Btn");
    settings.sgfMS1000BtnElement = document.getElementById("sgfMS1000Btn");
    settings.sgfMS1500BtnElement = document.getElementById("sgfMS1500Btn");
    settings.sgfMS2000BtnElement = document.getElementById("sgfMS2000Btn");
    settings.sgfMS3000BtnElement = document.getElementById("sgfMS3000Btn");

    settings.sgfMS500BtnElement.addEventListener("click", () => { settings.timerMS = 500; });
    settings.sgfMS1000BtnElement.addEventListener("click", () => { settings.timerMS = 1000; });
    settings.sgfMS1500BtnElement.addEventListener("click", () => { settings.timerMS = 1500; });
    settings.sgfMS2000BtnElement.addEventListener("click", () => { settings.timerMS = 2000; });
    settings.sgfMS3000BtnElement.addEventListener("click", () => { settings.timerMS = 3000; });
};
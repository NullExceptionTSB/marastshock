// ==UserScript==
// @name        MarastShock
// @match       https://marast.fit.cvut.cz/*/kvizy/*/*
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @version     1.0
// @author      NullExceptionTSB
// @description 2/20/2025, 5:16:11 PM
// ==/UserScript==

let qr = document.getElementById("question-response");
var submit_btn = null;
let submits = document.getElementsByName("submit");

function punish() {
  console.log("Wrong answer");
  var body = JSON.stringify({
    Username: GM_getValue("username",null),
    Name: "MarastShock",
    Code: GM_getValue("sharecode",null),
    Apikey: GM_getValue("apikey",null),
    Intensity: GM_getValue("intensity",null),
    Duration: GM_getValue("duration",null),
    Op: 0
  });
  var request = GM_xmlhttpRequest({
    method: "POST",
    url: "https://do.pishock.com/api/apioperate/",
    overrideMimeType: "application/json",
    headers: {
      "Content-Type": "application/json"
    },
    data: body,
    anonymous: true,
    responseType: "text",
    onload: function (x) {console.error("PiShock API: [" + x.status + "] " + x.response);}
  });
}

function reward() {}

function check_answer() {
  console.log("Checking...");
  if (qr.childNodes[0] === undefined) {
    console.error("Unable to verify answer correctness");
    return;
  }

  if (qr.childNodes[0].classList.contains("alert-danger")) punish();
  else if (qr.childNodes[0].classList.contains("alert-success")) reward();
}

if (submits.length !== 1) {
  qr = null;
} else submit_btn = submits[0]

if (qr !== null) {
  submit_btn.addEventListener("click", function() {setTimeout(check_answer, 100);})
  console.log("MarastShock ready");
} else {
  console.error("MARAST layout changed breaking MarastShock, make an issue on GitHub");
}

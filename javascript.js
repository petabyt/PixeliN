var size = "regular"; 
/*
Regular = 100 50x50 pixels.
Medium = 200 25x25 pixels
*/
var changes = [];
var sense = false;
var sensec;
var color = "rgb(6,6,6)";
var mousedown = false;
var pixelnum = 1;
var heart = "@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(8, 8, 8)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(8, 8, 8)@rgb(8, 8, 8)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(254, 7, 1)@rgb(8, 8, 8)@rgb(254, 7, 1)@rgb(254, 7, 1)@rgb(191, 10, 0)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(254, 7, 1)@rgb(254, 7, 1)@rgb(254, 7, 1)@rgb(254, 7, 1)@rgb(191, 10, 0)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(8, 8, 8)@rgb(254, 7, 1)@rgb(254, 7, 1)@rgb(254, 7, 1)@rgb(191, 10, 0)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(8, 8, 8)@rgb(254, 7, 1)@rgb(254, 7, 1)@rgb(254, 7, 1)@rgb(191, 10, 0)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(8, 8, 8)@rgb(191, 10, 0)@rgb(191, 10, 0)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(8, 8, 8)@rgb(8, 8, 8)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)";
//Landscape:
var landscape = "@rgb(182, 236, 239)@rgb(0, 128, 64)@rgb(0, 128, 64)@rgb(0, 128, 64)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(128, 64, 0)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(0, 179, 0)@rgb(0, 179, 0)@rgb(0, 179, 0)@rgb(0, 179, 0)@rgb(0, 179, 0)@rgb(0, 179, 0)@rgb(0, 179, 0)@rgb(255, 255, 128)@rgb(182, 236, 239)@rgb(182, 236, 239)@rgb(128, 64, 0)@rgb(128, 64, 0)@rgb(128, 64, 0)@rgb(128, 64, 0)@rgb(128, 64, 0)@rgb(128, 64, 0)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(0, 128, 192)@rgb(61, 67, 66)@rgb(128, 64, 0)@rgb(128, 64, 0)@rgb(128, 64, 0)@rgb(128, 64, 0)@rgb(61, 67, 66)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(61, 67, 66)@rgb(128, 64, 0)@rgb(128, 64, 0)@rgb(61, 67, 66)@rgb(128, 64, 0)@rgb(61, 67, 66)@rgb(128, 64, 0)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(61, 67, 66)@rgb(140, 138, 140)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(140, 138, 140)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(255, 255, 128)@rgb(255, 255, 128)@rgb(61, 67, 66)@rgb(140, 138, 140)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(255, 255, 128)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(140, 138, 140)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)@rgb(61, 67, 66)";
//Pokeball:
var pokeball = "@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(255, 19, 6)@rgb(255, 19, 6)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(11, 11, 11)@rgb(255, 255, 255)@rgb(255, 255, 255)@rgb(255, 255, 255)";
//Landscape 2:
var landscape2 = "@rgb(41, 192, 192)@rgb(11, 83, 9)@rgb(41, 192, 192)@rgb(41, 192, 192)@rgb(41, 192, 192)@rgb(41, 192, 192)@rgb(41, 192, 192)@rgb(0, 128, 255)@rgb(0, 128, 255)@rgb(120, 120, 120)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(41, 192, 192)@rgb(41, 192, 192)@rgb(41, 192, 192)@rgb(0, 128, 255)@rgb(0, 128, 255)@rgb(120, 120, 120)@rgb(120, 120, 120)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(41, 192, 192)@rgb(0, 128, 255)@rgb(0, 128, 255)@rgb(120, 120, 120)@rgb(120, 120, 120)@rgb(120, 120, 120)@rgb(41, 192, 192)@rgb(45, 45, 45)@rgb(41, 192, 192)@rgb(41, 192, 192)@rgb(0, 128, 255)@rgb(0, 128, 255)@rgb(0, 128, 255)@rgb(120, 120, 120)@rgb(120, 120, 120)@rgb(120, 120, 120)@rgb(41, 192, 192)@rgb(45, 45, 45)@rgb(41, 192, 192)@rgb(41, 192, 192)@rgb(0, 128, 255)@rgb(120, 120, 120)@rgb(120, 120, 120)@rgb(120, 120, 120)@rgb(120, 120, 120)@rgb(120, 120, 120)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(11, 83, 9)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(95, 95, 95)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(95, 95, 95)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(120, 120, 120)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(120, 120, 120)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(95, 95, 95)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(106, 72, 72)@rgb(95, 95, 95)@rgb(106, 72, 72)";
function dostuffs() {
	for (var i = 0; i < 100; i++) {
		document.getElementById('pixels').innerHTML += "<div onclick='if (sense) {sensec = this; sensedone();} else {changeclick(this.id);document.getElementById(id).style.backgroundColor = color;}' onmouseover='pixel = this.id' class='pixel' id='pixel"+pixelnum+"' style='background-color:green;'></div>";
		pixelnum++
	}
	loadfile("@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(172, 241, 247)@rgb(55, 219, 232)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(55, 219, 232)@rgb(172, 241, 247)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(172, 241, 247)@rgb(55, 219, 232)@rgb(112, 232, 241)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(112, 232, 241)@rgb(55, 219, 232)@rgb(172, 241, 247)@rgb(14, 137, 137)@rgb(172, 241, 247)@rgb(55, 219, 232)@rgb(14, 137, 137)@rgb(112, 232, 241)@rgb(23, 221, 221)@rgb(23, 221, 221)@rgb(112, 232, 241)@rgb(14, 137, 137)@rgb(55, 219, 232)@rgb(172, 241, 247)@rgb(55, 219, 232)@rgb(112, 232, 241)@rgb(112, 232, 241)@rgb(23, 221, 221)@rgb(70, 236, 236)@rgb(70, 236, 236)@rgb(23, 221, 221)@rgb(112, 232, 241)@rgb(112, 232, 241)@rgb(55, 219, 232)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(23, 221, 221)@rgb(70, 236, 236)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(70, 236, 236)@rgb(23, 221, 221)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(23, 221, 221)@rgb(70, 236, 236)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(70, 236, 236)@rgb(23, 221, 221)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(55, 219, 232)@rgb(112, 232, 241)@rgb(112, 232, 241)@rgb(23, 221, 221)@rgb(70, 236, 236)@rgb(70, 236, 236)@rgb(23, 221, 221)@rgb(112, 232, 241)@rgb(112, 232, 241)@rgb(55, 219, 232)@rgb(172, 241, 247)@rgb(55, 219, 232)@rgb(14, 137, 137)@rgb(112, 232, 241)@rgb(23, 221, 221)@rgb(23, 221, 221)@rgb(112, 232, 241)@rgb(14, 137, 137)@rgb(55, 219, 232)@rgb(172, 241, 247)@rgb(14, 137, 137)@rgb(172, 241, 247)@rgb(55, 219, 232)@rgb(112, 232, 241)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(112, 232, 241)@rgb(55, 219, 232)@rgb(172, 241, 247)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(172, 241, 247)@rgb(55, 219, 232)@rgb(14, 137, 137)@rgb(14, 137, 137)@rgb(55, 219, 232)@rgb(172, 241, 247)@rgb(14, 137, 137)@rgb(14, 137, 137)");
}
function draw() {
	if (mousedown) {
		changes.push(pixel + "@" + document.getElementById(pixel).style.backgroundColor + "@" + color);
		document.getElementById(pixel).style.backgroundColor = color;
	} else {
		// No drawing
	}
}
function changeclick(clickid) {
	changes.push(clickid + "@" + document.getElementById(clickid).style.backgroundColor + "@" + color);
}
function sensecolor() {
	sense = true;
}
function undo1() {
	if (changes.length == 0) {

	} else {
		var undocode = changes[changes.length - 1];
		var id = undocode.split("@")[0];
		var old = undocode.split("@")[1];
		var new1 = undocode.split("@")[2];
		document.getElementById(id).style.backgroundColor = old;
		changes.pop();
	}
	//changes.push(id + "@" + color + "@" + document.getElementById(id).style.backgroundColor);
}
function sensedone() {
	document.getElementById('color1').value = rgb2hex(document.getElementById(sensec.id).style.backgroundColor);
	color = rgb2hex(document.getElementById(sensec.id).style.backgroundColor);
	sense = false;
}
function save() {
var filename = prompt("Please enter your file name.");
var result = "";
for (var i = 1; i < 101; i++) {
	result += "@" + document.getElementById("pixel" + i).style.backgroundColor;
}
download(filename+".pxn",result);
}
function save1() {
var filename = prompt("Please enter your file name.");
html2canvas(document.querySelector("#pixels")).then(canvas => {
    document.body.appendChild(canvas);
    var c = document.getElementsByTagName('canvas')[0]
	var d = c.toDataURL("image/png");
	document.getElementById("temp").innerHTML += "<a id='ab' href='"+d+"' download='"+filename+".png'>Download</a>";
	document.getElementById('ab').click();
	setTimeout(function() {
		document.getElementById("temp").innerHTML = "";
	},1);
});
}
function load() {
	document.getElementById("file").click();
}
function loadfile(code) {
	var list = code.split('@');
	for (var i = 1; i < 101; i++) {
		document.getElementById("pixel" + i).style.backgroundColor = list[i];
	}
}
function clear1() {
	for (var i = 1; i < 101; i++) {
		document.getElementById("pixel" + i).style.backgroundColor = "rgb(255, 255, 255)";
	}
}
// Function to download files
function download(filename, text) {
		  var element = document.createElement('a');
		  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
		  element.setAttribute('download', filename);
		  element.style.display = 'none';
		  document.body.appendChild(element);
		  element.click();
		  document.body.removeChild(element);
}
// Code from Mottie (https://jsfiddle.net/user/Mottie/fiddles/)
function rgb2hex(rgb){
 rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
 return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}
function onFileLoad(event) {
    loadfile(event.target.result);
}
// Code from https://stackoverflow.com/users/184528/cdiggins
function onChooseFile(event, onLoadFileHandler) {
    if (typeof window.FileReader !== 'function')
        throw ("The file API isn't supported on this browser.");
    let input = event.target;
    if (!input)
        throw ("The browser does not properly implement the event object");
    if (!input.files)
        throw ("This browser does not support the `files` property of the file input.");
    if (!input.files[0])
        return undefined;
    let file = input.files[0];
    let fr = new FileReader();
    fr.onload = onLoadFileHandler;
    fr.readAsText(file);
}
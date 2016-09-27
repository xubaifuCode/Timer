var second, minute, hour;
var circle_x, circle_y, show;

function $(elemId) {
	return document.getElementById(elemId);
}
function init() {
	var clock = $("clock");
	circle_x = clock.offsetLeft + 150;
	circle_y = clock.offsetTop + 150;
	second = $("second_point");
	minute = $("minute_point");
	hour = $("hour_point");
	show = $("show_time");
	
	hour.style.left = minute.style.left = second.style.left = circle_x + "px";
	hour.style.top = minute.style.top = second.style.top = circle_y + "px";

	for (var i = 1, d = 120; i <= 12; i++, d+=30) {
		$("time_" + i).style.left = (circle_x - 10 - Math.cos(toDegrees(d)) * 140) + "px";
		$("time_" + i).style.top = (circle_y - 10 - Math.sin(toDegrees(d)) * 140) + "px";
	}

	setInterval(move, 1000);
}
function move() {
	var date = new Date();
	var secondDegree = date.getSeconds() * 6 + 180;
	var minuteDegree =  date.getMinutes() * 6 + 180;
	var hourDegree = date.getHours() * 30 + 180 + (minuteDegree - 180) / 10;
	show.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	second.style.transform = "rotate(" + secondDegree + "deg)";
	minute.style.transform = "rotate(" + minuteDegree + "deg)";
	hour.style.transform = "rotate(" + hourDegree + "deg)";
}
function toDegrees(angle) {
	return angle * (Math.PI / 180);
}
function currentTime() {
	var elem = document.getElementById("currentTime");
	var deg = 0;
	
	function timeChange() {
		var t = document.getElementById("time");
		var time = new Date();
		var hour = time.getHours();
		var min = time.getMinutes();
		var sec = time.getSeconds();
		var mil = time.getMilliseconds();
		var day = time.getDay();
		var date = time.getDate();
		var mon = time.getMonth();
		if (hour>11) {
			t.textContent = "pm";
		} else t.textContent = "am";
		deg += 0.18;
		
		var Mdate = document.getElementById("date"); 
		var weekDay = document.getElementById("day"); 
		var sline = document.getElementById("clock__sline");
		var hline = document.getElementById("clock__hline");
		var mline = document.getElementById("clock__mline");
		sline.style.transform = "translate(0%, -30%) rotate("+sec*6+"deg)";
		mline.style.transform = "translate(0%, -30%) rotate("+min*6+"deg)"; 
		hline.style.transform = "translate(0%, -30%) rotate("+hour*30+"deg)";
		if (day == 1) weekDay.textContent = "Mon"
		else if (day == 2) weekDay.textContent = "Tue"
		else if (day == 3) weekDay.textContent = "Wed"
		else if (day == 4) weekDay.textContent = "Thr"
		else if (day == 5) weekDay.textContent = "Fri"
		else if (day == 6) weekDay.textContent = "Sat"
		else if (day == 7) weekDay.textContent = "Sun"
		Mdate.innerHTML = date + '.<span id = "month" ></span>';
		var moo = document.getElementById("month"); 
		moo.textContent = mon+1;
	}
	setInterval(timeChange, 30);
}
currentTime()
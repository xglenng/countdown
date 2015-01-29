//change the text below to reflect your own,
var current = "Happy Birthday Chris and Nancy!";
var monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var seconds = 1000;
var minutes = seconds*60;
var hours = minutes*60;
var days = hours*24;

function countdown(yr, m, d) {

	year = yr; month = m; day = d;
	var today = new Date();
	var futureDate = monthArray[m-1] +" "+ d +", "+ yr;
	var difference = Date.parse(futureDate) - Date.parse(today);
	var dayRemaining = Math.floor(difference/days);
	var hourRemaining = Math.floor((difference%days)/hours);
	var minRemaining = Math.floor(((difference%days)%hours)/minutes);
	var secRemaining = Math.floor((((difference%days)%hours)%minutes)/seconds);

	if(dayRemaining == 0 && hourRemaining == 0 && minRemaining == 0 && secRemaining == 1){
		document.forms.count.count2.value = current;
		return
	}
	else{
		document.forms.count.count2.value = dayRemaining +" days, "+ hourRemaining +" hours, "+ minRemaining +" minutes, and "+ secRemaining +" secs";
		setTimeout("countdown(year, month, day)",1000);
	}
}
//enter the count down date using the format year/month/day
countdown(2015, 2, 18);
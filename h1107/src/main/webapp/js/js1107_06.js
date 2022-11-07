
let today, hh, mi, ss;
let timech;
function currTime(){
	today = new Date();
	hh = today.getHours();
	mi = today.getMinutes();
	ss = today.getSeconds();
	document.getElementById('result').innerHTML = hh +':'+mi+":"+ss;
}

function startClock(){
	// currTime(); // 그냥 현재 시간 함수 호출 
	
	timech = setInterval(currTime,1000); 
	console.log(timech);
	//자바스크립트에서 setInterval(function, millisecond)는'
    //일정 시간(ms) 마다 함수를 실행하는 기능입니다.
	
}
function stopClock(){
	clearInterval(timech);
	console.log(timech);

}
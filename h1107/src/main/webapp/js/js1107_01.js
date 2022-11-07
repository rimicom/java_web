const lottoNums = []; // 숫자 6개가 들어가는 배열 

function drawBtn(){
	// alert('draw');
	
	let lotto = []; // 1-45 숫자가 들어가는 배열 생성 
	let temp = 0; 
	// lotto 1- 45를 넣기 
	for(var i=0;i<45;i++) {
		lotto[i]=i+1;
	}
	// console.log(lotto);
	// 1-45 배열 섞기 . 
	for(var i=0;i<500;i++) {
		random_num = Math.floor(Math.random()*45); //0-44
		// console.log(random_num);
		temp = lotto[0];
		lotto[0]=lotto[random_num];
		lotto[random_num]=temp;
			
	}
	// 6개 로또배열에 lotto 배열 6개 넣기 . 
	for(var i=0;i<6;i++) {
		lottoNums.push(lotto[i]);
	}
	console.log(lottoNums);
	
	document.getElementById("number").innerHTML = lottoNums;

}
function resetBtn(){
	// alert('reset');
	lottoNums.splice(0,6); // splice(시작, 수) 
	document.getElementById("number").innerHTML = lottoNums;
	
}
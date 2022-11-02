/*
키와 몸무게를 입력받아 , 평균체중보다 작습니다. 평균체중입니다. 평균체중보다 높습니다. 를 출력해보세요
평균체중 = (키 - 100) * 0.9
*/ 


let userHeight = prompt('키를 입력하세요','0');
let userWeight = prompt('몸무게를 입력하세요','0');

let normalWeight = (userHeight-100)*0.9; 
document.write("평균체중" + normalWeight +"<br>");
document.write("입력체중" + userWeight +"<br>");

if( normalWeight > userWeight ){
	document.write('평균체중보다 작습니다. ')
}else if(normalWeight == userWeight){
	document.write('평균체중과 같습니다. ')
}else{
	document.write('평균체중보다 높습니다. ')
}



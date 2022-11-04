
// 변수 
let num = 1; 

/*
function 함수이름(){
	// 코드 작성. 함수 선언식
}

const 함수이름 = function() { 
	// 코드작성 . 함수 표현식 
}
*/
// 소문자로 시작 카멜표기법을 사용하는것을 권장함. 동사를많이 사용합니다. 
// 함수기능을 표현할 수 있는 이름으로 하도록하자 . 


// 함수 선언식
function myFunc(){
	document.write('hi  <br>');
	document.write('hello  <br>');
}
// 함수 표현식 
const myFunc2 = function(){
	document.write('bye  <br>');
	document.write('byebye  <br>');
} 
// 함수 호출
myFunc(); // 함수이름();. 함수는 재사용이 쉽다. 
myFunc2(); // 함수 표현식의 경우에는 선언한것보다 위에 있을때 호출할 수 없다.  

let str = "반갑습니다. <br>"; // 전역변수 

function myFunc3(){
	str = "안녕하세요 <br>"; // 지역변수 
	document.write(str);
}



document.write(str);
myFunc3();


let result = window.confirm("확인을 눌러주세요 "); 
/* 
function confirm(a){
	if (a == '확인') return true; 
	else return false; 
}*/
 
document.write(result);
document.write('<hr>');
//
// ***  RETURN ***** ////
// return 함수로부터 데이터를 반환한다. 함수를 끝낸다. 
function prtThree(){
	return '확인'; 
}

let a = prtThree();
document.write(a);
document.write('<hr>');

function getData(){
	let re1 = 1+2+3;
	let re2 = 4+5+6; 
	return re1;
	// return re2;  // 리턴은 하나만된다. !!	
}
let rere = getData();
document.write(rere);

function prtData(){
	document.write('hi  <br>');
	document.write('hello  <br>');
	return; // 함수를 종결시킨다  
	// document.write('bye  <br>');
	
}
prtData();

document.write('<hr>');
document.write('<hr>');

// *** 매개변수 ***//
/*
function prtClass( 매개변수 ){
	// 화면에 출력하는 함수를 만들고 싶다 .. . 
	document.write();
}

prtClass('자바');
prtClass('HTML');
*/ 

function prtClass(cls){
	
	// 화면에 출력하는 함수를 만들고 싶다 .. . 
	document.write("현재 수강중인 과목 : ");
	document.write(cls);
}

document.write("현재 수강중인 과목 : "+'자바');
document.write("현재 수강중인 과목 : "+'HTML');
document.write("현재 수강중인 과목 : "+'CSS');

prtClass('자바');
document.write('<br>');
prtClass('HTML');
document.write('<br>');
prtClass('CSS');


function prtSent(str, num){
	for(var i = 0 ; i < num ; i++){
		document.write(str+'<br>');
	}
}
prtSent('hello', 9);
// bye 를 세번 출력시켜주세요 . 함수 그대로 사용 . 
prtSent('bye', 3);

function oddEven(n){
	if(n%2 == 0 ) {
		return '짝수';
	}
	else{
		return '홀수';
	}
}
document.write(oddEven(10));
document.write('<br>');
document.write(oddEven(11));

// 숫자 세개를 전달받아서 세수의 합을 구하는 함수를 만들어보세요 
function sum3(n1,n2,n3){
	// let sum = n1+n2+n3;
	//return sum;
	return  n1+n2+n3;  
}
document.write('<br>');
document.write('합계: '+ sum3(1,2,3));

// 두 수를 전달 받아서 더 큰값을 반환하는 함수를 만들어 보세요 
function bigger(n1, n2){
	if(n1>n2) {
		return n1;
	} 
	else{
	  return n2;
	}
		
}

document.write('큰수: '+ bigger(10,20));

document.write('<hr>');

let x ; 
/*
function addNum(x,y,z){
	if(x === undefined )
		x = 0; 
	if(y === undefined ) 
		y = 0;
	if(z === undefined )
		z = 0;	
	return x+y+z;
}

document.write('3개 : '+addNum(1,2,3)+'<br>');
document.write('2개 : '+addNum(1,2)+'<br>');
document.write('1개 : '+addNum(1)+'<br>');

document.write('0개 : '+addNum()+'<br>');

*/
function addNum(){
	let sum = 0; 
	for (var i = 0; i<arguments.length;i++)
	{
		sum += arguments[i];
	}
	return sum; 
	
}


document.write('4개 : '+addNum(1,2,3,4)+'<br>');
document.write('3개 : '+addNum(1,2,3)+'<br>');
document.write('2개 : '+addNum(1,2)+'<br>');
document.write('1개 : '+addNum(1)+'<br>');
document.write('0개 : '+addNum()+'<br>');
document.write('<hr>');

function prtArg(){	
	//document.write(x);
	document.write(arguments.length);
}

prtArg();
document.write('<br>');
prtArg(1);
document.write('<br>');
prtArg(1,2);
document.write('<br>');
prtArg('a','b','c');

function addNum1(x,y=0,z=0,k=0){
	return x+y+z+k;
}

document.write('3개 : '+addNum1(1,2,3)+'<br>');
document.write('2개 : '+addNum1(1,2)+'<br>');
document.write('1개 : '+addNum1(1)+'<br>');

document.write('0개 : '+addNum1()+'<br>');

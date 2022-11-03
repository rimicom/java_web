
let str = "안녕하세요.... "; 

var str1 = '두번째 문자열입니다 ..'; 

document.write(str);
console.log(str1);

str = `백틱도 이용할 수 있습니다.`; 
// ${변수이름} => 플래이스 홀더 
console.log(str);

let data1 = "데이터";
let str2 = `문자열 중간에 ${data1} 삽입하기`; 

console.log(str2);

let data2 = 100;
let str3 = `문자열 중간에 ${data2} 삽입하기`; 
console.log(str3);

let n1 = 10; 
let n2 = 20; 
document.write(`<br> ${n1}+${n2}=${n1+n2} <br>`);

let num1 = 10; 
let fruit = "사과"; 
console.log(`어머니께서 ${fruit}를 ${num1}개 사오셨어요`);
console.log(`어머니께서 ${fruit}를 ${100}개 사오셨어요`);
/*
let num2 = prompt("숫자를 입력해주세요");
let fruit1 = "사과"; 
console.log(`어머니께서 ${fruit1}를 ${num2}개 사오셨어요`);
console.log(`어머니께서 ${fruit1}를 ${prompt("숫자를 입력해주세요")}개 사오셨어요`);

window.alert("경고창 입니다. ");
document.write(window.confirm("확인해주세요 "));

document.write(window.confirm("확인해주세요 "));
*/
while( confirm("확인버튼을 눌러주세요 ")){
	document.write("확인버튼을 눌럿습니다. ");
}
document.write("취소 버튼을 눌럿습니다. ");







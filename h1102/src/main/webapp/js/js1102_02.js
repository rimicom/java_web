// 삼항조건 연산자 

let l = 10;
let m = 13; 

let result = l > m ? 'javascript' : 'hello' ; 

document.write(result); 


document.write('<hr>');

// var , let, const 
//    변수      상수
var i = 10;
document.write(i+'<br>'); 
var i = 20; 
document.write(i+'<br>'); 
var i = 30; 
document.write(i+'<br>'); 

let j = 10;  // 중복 선언이 불가능, 재할당은 가능 
document.write(j+'<br>'); 
// let j = 20;
j = 20;  // 값을 재 할당 
document.write(j+'<br>');

const k = 30;  // 상수선언.자바에서 final과 같음. 중복선언 불가능. 재할당 불가능
document.write(k+'<br>');
//k=20;
// document.write(k+'<br>');



document.write('<hr>');

var str1 = 'do it ';
var str2 = 'javascript';
document.write(typeof(str1));
document.write('<br>');
document.write(str1+str2);
document.write('<br>');
var str3 = 200; 
var str4 = '100';
document.write(typeof(str3));
document.write('<br>');
document.write(str3+str4);




document.write('<hr>');
 
var num1 = 10; 
var num2 = 5; 
var num3 = '10'; 
var num4 = Number(num3);

document.write(num1>num2);
document.write('<br>');
document.write(num1==num2);
document.write('<br>');
document.write(num1==num3);
document.write('<br>');
document.write(num1===num3);
document.write('<br>');
/* == equal operator 
   === strict equal operator 
 */   
document.write(num1===num4);
document.write('<br>');







document.write('<hr>');


// +, - , *, /,% 를 화면에 출력해보세요


document.write(num1 + '+' + num2 + '=' + (num1+num2));
document.write('<br>');
document.write(num1 + '-' + num2 + '=' + (num1-num2));
document.write('<br>');
document.write(num1 + '*' + num2 + '=' + (num1*num2));
document.write('<br>');
document.write(num1 + '/' + num2 + '=' + (num1/num2));
document.write('<br>');
document.write(num1 + '%' + num2 + '=' + (num1%num2));

document.write('<hr>');

var a = 1; 
var b = 2;

a = a+b;  // a => 3
a += b ;  // a => 5

a = a-b;  // a => 3
a -= b;   // a => 1

a = a*b;  // a => 2
a *= b;   // a => 4 

document.write('a의 결과 값: ' + a ); 
document.write('<br>');
var n1 = 5; 
var n2 = 0; 
n2  = ++n1;

document.write('n2의 결과 값: ' + n2 ); 
document.write('<br>');





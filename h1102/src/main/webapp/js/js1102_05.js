// 삼항식을 사용해서, a,b중 큰 수를 출력하세요 

let a = 17;
let b = 19;
let c = 18; 

let result = (a > b) ? a : b;
/*
if(a>b) result = a; 
else	result = b; 
*/

document.write(a+','+b+' 중에 더 큰수는 ?'+result+'<br>');

// a = 17;  b = 19; c = 18;  

let re1 = (a>b) ? ( (a>c)? a:c ) : ( (b>c) ? b: c);  
document.write(a+','+b+','+c+' 중에 더 큰수는 ?'+re1+'<br>');

let re2 = Math.max(a,b,c);
document.write(a+','+b+','+c+' 중에 더 큰수는 ?'+re2+'<br>');














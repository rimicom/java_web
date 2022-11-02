
// for 문을 사용해서 1에서부터 10까지의 합을 구해보세요 

let sum = 0; 
for (let i = 1; i<=10;i++){
	sum += i ; 
}
document.write('sum의 값 : '+ sum);
document.write('<hr>')



// for 문을 사용해서 1에서부터 입력받은 수까지의 합을 구해보세요 
// 100 입력받으면 1~100 합 
let num1 = prompt('input>> ');
let sum1 = 0;
for(let i=1;i<=num1;i++){
	sum1 += i ; 
	
}
document.write('sum의 값 : '+ sum1);
document.write('<hr>')


// while 문을 사용해서 1에서부터 입력받은 수까지의 합을 구해보세요 

let sum2 = 0 ; 
let input = prompt("while > 숫자를 입력하세요 >>");
let i = 0 ; 

// 2의 배수와 5의 배수를 제외한 수의 합을 출력하세요 
// continue ; 
while(i<input){
	i++;
	if(i%2==0 || i%5==0) continue;
	sum2 += i ; 	
}













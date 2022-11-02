
let input = prompt("숫자를 입력하세요 ","0");
let i = 0 ; 

// 10 > 홀수  짤수  홀수  짤수  5 6 7
while (i < input){
	i++; 
	if(i%2==0){
		document.write('<p class = "a1">'+ i +'</p>');
	}
	else{
		document.write('<p class = "a2">'+ i +'</p>');
	}
	
	
}
// 구구단을 출력해주세요 2-9단 
document.write ('<p class="a1">안녕하세요 </p>'); 

for(var i = 2; i<=9; i++){
	
	if(i%2 != 0){ continue; } // 짝수단만 출력 
	
	for(var j = 1; j<=9;j++){
		document.write(i+' * '+j+' = '+(i*j)+'<br>');
		
	}
}
// 짝수단은 파랑, 홀수단은 빨강 출력
// .a1{color: blue;}  .a2{color: red;}


for(var i = 2; i<=9; i++){
	if(i%2 !=0){// 홀수단일때
		for(var j = 1; j<=9;j++){
			document.write('<p class="a2">'+i+' * '+j+' = '+(i*j)+'</p>');
		} //for j 
	}  //if
	else{ // 짝수단일때 
		for(var j = 1; j<=9;j++){
			document.write('<p class="a1">'+i+' * '+j+' = '+(i*j)+'</p>');
		}// for j 
	}//else
	
}// for i 









// i =20 일때까지만 출력해보세요 
for (var i = 1; i <=100 ; i++){
	if( i % 2== 0){
		document.write("<p class='a1'>"+i+" JavaScript Class </p>")
	}
	else{
		document.write("<p class='a2'>"+i+"JavaScript Class </p>")
	}	
	if ( i == 20) break;
}

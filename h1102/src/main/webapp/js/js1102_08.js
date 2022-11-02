/*
스위치문을 사용해서 alert창을 띄워 어디에 이동한지 알려 준 뒤 화면 이동시키기.
 원하는 번호를 클릭하세요.\n 1.네이버 2.다음 3.구글  
 
 */
 
let num = prompt('숫자 >> ');
/*let num2 = Number(num);
document.write(typeof(num));
document.write(typeof(num2));*/
switch(num){
	case '1': 
		alert("네이버를 선택하셨습니다. ");
		location.href = 'https://www.naver.com'
		break;
	case '2':
		alert("다음을 선택하셨습니다. ");
		location.href = 'https://www.daum.net'
		break;
	case '3':
		alert("구글을 선택하셨습니다. ");
		location.href = 'https://www.google.com'
		break;	
	default: 
		alert("잘못입력하셨습니다. ")
		break; 
	
}










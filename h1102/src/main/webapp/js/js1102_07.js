
let id = prompt("아이디를 입력하세요 >> ");
let pwd = prompt("비밀번호를 입력하세요 >> ");

if(id == 'admin'){
	if(pwd == '1111'){
		document.write('아이디. 패스워드 일치');
		location.href = 'https://www.google.com';
	}else{
		document.write('패스워드가 일치하지 않습니다. ');
		alert('패스워드가 일치하지 않습니다. 다시 입력하세요 ');
		location.reload();
	}
}
else{
	document.write('아이디가 일치하지 않습니다. ');
	alert('아이디가 일치하지 않습니다. 다시 입력하세요 ');
	location.reload();
}
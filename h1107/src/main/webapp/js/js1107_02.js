
function myFunction(){
	// alert('my function btn');
	document.getElementById("myH1").setAttribute("class","setcolor");
	// <p><a id="test" target="_blank">링크 추가를 해보세요</a></p>
	document.getElementById("test").setAttribute("href", "https://www.naver.com");
	
}



let adminId = 'admin';
let adminPW = '1111';
function loginBtn(){
	let uid = prompt("아이디를 입력하세요");
	let upw = prompt("비밀번호를 입력하세요");
	// 함수안에서도 다른 함수를 부를 수 있다. 
	login(uid, upw);
}
function login(uid, upw){
	if(uid == adminId && upw == adminPW){
		alert("로그인 성공 !");
		location.href = "https://www.naver.com";
	}else{
		alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력하세요 ");
	}
	
}



function hello(){
	//document.write("<h1>안녕 "+name+"</h1>");
	document.write("<h1>안녕 "+arguments[0]+"</h1>");
}

// hello("홍길동");
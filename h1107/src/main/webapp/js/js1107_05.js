
function loginCheck(){
     let u_id = document.getElementById('id').value;
     let u_pw = document.getElementById('pw').value; // 사용X
     let str1='아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.입력하신 내용을 다시 확인해주세요.'
     if (u_id != 'admin'){ // ! -> not 
		alert('아이디가 잘못입력되었습니다. 다시 입력하세요.');
        document.getElementById('txt').innerHTML=str1;
        return false;
     }
}


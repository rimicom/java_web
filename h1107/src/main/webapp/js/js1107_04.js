
function vbtn(){
    let name1 =document.getElementById('name').value;
    //프로그램 하시오.
    let kor1 =Number(document.getElementById('kor').value);
    let eng1 =Number(document.getElementById('eng').value);
    let math1 =Number(document.getElementById('math').value);
    let sum1 = kor1+eng1+math1;
    let avg1 = (kor1+eng1+math1)/3;
    avg1 = avg1.toFixed(1); // 소수점 자르기 
    prnt(name1,kor1,eng1,math1,sum1,avg1);
}


let title=['이름','국어','영어','수학','합계','평균']
function prnt(){
	// document.write('이름 : '+arguments[0]+'<br>')
	// document.write('국어 : '+arguments[1]+'<br>')
    for(let i=0;i<title.length;i++){
        document.write(title[i]+' : '+arguments[i]+'<br>')
    }
}








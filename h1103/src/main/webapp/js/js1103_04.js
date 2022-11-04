

var arr1 = [1,'홍길동',90,'1등']; 
var str = '';

for ( var i = 0; i<arr1.length;i++ ){
	str += '<p>'+arr1[i]+'</p>';
}
document.write(str);
document.write('<hr>');
// 테이블로 출력하기 
var arr2 =[ [1, "html"],[2, "css"],[3, "JavaScript"] ];
let str2 = '<table border="1">';

/*
str2 += '<tr><td>'+ arr2[0][0]+' </td>	<td>'+arr2[0][1]+'</td></tr>';
str2 += '<tr><td>'+ arr2[1][0]+' </td>	<td>'+arr2[1][1]+'</td></tr>';
str2 += '<tr><td>'+ arr2[2][0]+' </td>	<td>'+arr2[2][1]+'</td></tr>';
*/
for (var i in arr2){
	str2 += '<tr>'
	for (var j in arr2[i]){
		str2 += '<td>'+ arr2[i][j]+' </td>';
	}
	str2 += '</tr>'
	
}


str2 += "</table>";

document.write(str2);
document.write('<hr>');
// 자바스크립트는 3번째 과목입니다. 출력하기 


var lectures = ["html", "css", "자바스크립트", "php"];
var topic = "자바스크립트";

for (var i = 0 ; i <lectures.length; i++ ){
	
	if(lectures[i] == topic){
		document.write(topic+"는 "+(i+1)+"번째 과목입니다.");
	}
}


for(var idx in lectures ){
	if(lectures[idx] == topic)
		document.write(topic+"는 "+(Number(idx)+1)+"번째 과목입니다.");

}

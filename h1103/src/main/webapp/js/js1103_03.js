// 배열 

var arr1 = [1, 2, 3] ;
var arr2 = Array(1,2,3);
var arr3 = new Array(1,2,3);
console.log(arr1);
console.log(arr2);
console.log(arr3);

var arr4 = Array();
arr4.push(5); //0 번째
arr4.push(6); // 1번째
arr4.push(7); // 2번째  
arr4[arr4.length] = 10; // arr4.length : 3
arr4[100] = 20; 
console.log(arr4);
delete arr4[1];
console.log(arr4[96]);
console.log(arr4.length);

var a = [11,2,33,4,55,6,77,8,9,10];
document.write(a);
document.write('<br>')
for(var i = 0 ; i<a.length;i++){
	document.write(a[i]);
	document.write('&nbsp;');
	
}
// 배열 속 값의 합계를 출력해보세요 
let sum = 0; 
for (var i = 0; i<a.length; i++){
	sum = sum + a[i];	
}
document.write('<br>'+sum);
sum = 0;
for( var i in a ){ // 향상된 for문 
	sum += a[i];
}
document.write('<br>'+sum);



//자바스크립트 날짜 함수
let today = new Date();
let todayYear = today.getFullYear(); //2022
let todayMonth = today.getMonth()+1; //0월->0+1월,1,2,....11
let todayDate = today.getDate();     //1,2,3,....31
let todayDay = today.getDay();       //0-월요일,1-화,수...금,6-일   
    
let year1=''
let month1=''
let day1=''
for(var i=1900;i<=2022;i++){
	if(i == todayYear){
		year1 +='<option value="'+i+'" selected>'+i+'</option>';
	}else{
		year1 +='<option value="'+i+'">'+i+'</option>';
	}
}    
  
for(var i=1;i<=12;i++){
	if(i == todayMonth ){
		month1 +='<option value="'+i+'" selected>'+i+'</option>';
		}
	else{
		month1 +='<option value="'+i+'">'+i+'</option>';
	}
}        

for(var i=1;i<=31;i++){
	if( i == todayDate) {
 	   day1 +='<option value="'+i+'" selected>'+i+'</option>';
	}
	else{	
	    day1 +='<option value="'+i+'">'+i+'</option>';
	}
} 

document.getElementById('year').innerHTML=year1;
document.getElementById('month').innerHTML=month1;
document.getElementById('day').innerHTML=day1;


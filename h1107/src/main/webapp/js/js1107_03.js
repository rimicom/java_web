
let n = 1; 

function gallery(num){
	// alert("클릭하셧습니다. ");	

	n = n + num; 
	// 4이상이 되면 1로 갈수 있도록 프로그램 하시오.
    // 1이하가 되면 4로 변경될수 있도록 프로그램 하시오.
    if(n>4) n=1;
    else if(n<1) n=4;
    
	
	let photoId = document.getElementById("photo");
	photoId.setAttribute("src", "./images/"+n+".jpg");
	
	document.getElementById("viewNum").innerHTML = n;
	
}
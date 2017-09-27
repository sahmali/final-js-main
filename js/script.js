var innerContent=document.querySelector(".inner-content");
var contentItem=document.querySelectorAll(".content-item");
var contentitemArr=[];
var contentTopOlcu=0;
var navLi=document.querySelectorAll(".nav ul li");
var navLiArr=[]

for (var i = 0; i < contentItem.length; i++) {
	contentitemArr.push(contentItem[i])
	navLiArr.push(navLi[i]);
}
function qaldirMans () {
	 

contentTopOlcu-=280;
 if (contentTopOlcu<=-2520) {
 	contentTopOlcu=-280*(contentitemArr.length-1)
 }

 innerContent.style.top = contentTopOlcu+"px";

}
function dusMans(){
	say=0
	contentTopOlcu+=280;
	if (contentTopOlcu>=0) {
		contentTopOlcu=0
	}
	else{
		innerContent.style.top = contentTopOlcu+"px";
	}
	innerContent.style.top = contentTopOlcu+"px";
}
function selectedLi(par){
	contentTopOlcu=-(navLiArr.indexOf(par))*280
	innerContent.style.top = contentTopOlcu+"px";

}
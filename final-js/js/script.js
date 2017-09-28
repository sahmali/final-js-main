var innerContent=document.querySelector(".inner-content");
var contentItem=document.querySelectorAll(".content-item");
var contentitemArr=[];
var contentTopOlcu=0;
var navTopOlcu=0;
var navLi=document.querySelectorAll(".nav ul li");
var mainNav=document.querySelector(".main-nav");
var innerNav=document.querySelector(".nav");
var navLiArr=[];


for (var i = 0; i < contentItem.length; i++) {
	contentitemArr.push(contentItem[i])
	navLiArr.push(navLi[i]);
}
navLiArr[0].style.height = '280px'
function qaldirMans () {
	 

contentTopOlcu-=280;
navTopOlcu-=navLiArr[0].clientHeight;

 if (contentTopOlcu<=-2520) {
 	contentTopOlcu=-280*(contentitemArr.length-1);
 	navTopOlcu=-navLiArr[0].clientHeight*(contentitemArr.length-1)
 }
 innerContent.style.top = contentTopOlcu+"px";
 innerNav.style.top=navTopOlcu+"px"

}
function dusMans(){
	contentTopOlcu+=280;
	navTopOlcu+=navLiArr[0].clientHeight
	if (contentTopOlcu>=0) {
		contentTopOlcu=0;
		navTopOlcu=0;
		
	}
	
	innerContent.style.top = contentTopOlcu+"px";
	innerNav.style.top=navTopOlcu+"px"
}
function selectedLi(par){
	contentTopOlcu=-(navLiArr.indexOf(par))*280
	innerContent.style.top = contentTopOlcu+"px";
	for (var i = 0; i < navLiArr.length; i++) {
		navLiArr[i].style.height = '65px';
	}
console.log(navLiArr.indexOf(par))
navLiArr[navLiArr.indexOf(par)].style.height = contentitemArr[0].clientHeight+"px"
navTopOlcu=-((navLiArr.indexOf(par))*(navLiArr[0].clientHeight+2))
innerNav.style.top=navTopOlcu+"px"


}
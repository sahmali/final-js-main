var innerContent=document.querySelector(".inner-content");
var contentItem=document.querySelectorAll(".content-item");
var contentitemArr=[];
var contentTopOlcu=0;
for (var i = 0; i < contentItem.length; i++) {
	contentitemArr.push(contentItem[i])
}
function qaldirMans () {
 contentTopOlcu-=280;
 innerContent.style.top = contentTopOlcu+"px"

}
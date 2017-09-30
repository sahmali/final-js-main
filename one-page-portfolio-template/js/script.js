$(".col-6").on("click",function (event) {
	
	$(this).show("1")
	var hidden=$(this).find('.hidden-item')
	$(hidden).show().css('opacity', '1').height(100+"vh");
})
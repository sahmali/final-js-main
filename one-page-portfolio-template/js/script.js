$(".item").on("click",function () {
	
	
	var hidden=$(this).parent().find(".hidden-item")

	$(hidden).removeClass("hide-hidden").addClass("show-hidden")
	$(this).parent().find(".fa-times-circle").show(1000)
$(".fa-times-circle").on("click", function () {
		$(".col-6").show()
		$(".show-hidden").removeClass("show-hidden").addClass("hide-hidden");
		$(this).parent().find(".fa-times-circle").css("display", "none");
	})
	

	})
$("ul li img").on("click",function(){
	$(".slider .slider-item").each()
	console.log((".slider .slider-item").each())
	console.log($(this).parent().index())
})


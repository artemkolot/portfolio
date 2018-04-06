$(document).ready(function(){

	$(".go-down").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1100);
	});

	$(window).scroll(function(e){
		var top = $('nav').offset().top;
	 if (top <= 1) {
	 	$("nav").removeClass('active');
	 } else{
	 	$("nav").addClass('active');
	 }
	});
});

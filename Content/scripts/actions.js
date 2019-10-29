var $wW = $(window).width(),
		$modLink = $(".ap-mod"),
		$mClose = $(".ap-modal-close"),
		$mCloseBtn = $('.ap-mod-close');

function sliderHome() {
	var swiper = new Swiper('.ap-modal-gallery-slide', {
			loop: true,
			autoplay: {
				delay: 5000,
			}
	});

	$('.ap-slide-home-img').imagefill();
}

function sliderGallery() {
	if ($('.ap-modal-gallery-slide').length) {
		var swiper = new Swiper('.ap-gallery-slide', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: {
					delay: 5000,
				}
		});
	}
}

function modalBox() {
	$modLink.on('click', function (e) {
		e.preventDefault();

		var $link = $(this).attr('href'),
				$el = $($link),
				$vis = $('.ap-modal--is-visible');

		$vis.removeClass('ap-modal--is-visible');

		$el.fadeIn(function () {
			$el.addClass('ap-modal--is-visible');
		});
	});

	$mClose.on('click', function (e) {
		e.preventDefault();
		closemodal.call(this);
	});

	$mCloseBtn.on('click', function (e) {
		e.preventDefault();
		closeEsc();
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			e.preventDefault();
			closeEsc();
		}
	});

	function closemodal() {
		var $la = $(this),
				$elm = $la.closest('.ap-overlay');

		$elm.fadeOut(function(){
			$elm.removeClass('ap-modal--is-visible').removeAttr('style');
		});
	}

	function closeEsc() {
		$('.ap-overlay').fadeOut(function () {
			$(this).removeClass('ap-modal--is-visible').removeAttr('style');
		});
	}
}

function enter() {
	$('.ap-intro-close').on('click', function (e) {
		e.preventDefault();
		var $la = $(this),
				$elm = $la.closest('.ap-slider-home');

		$elm.fadeOut();
	});
}

function tabs() {
	var $listItem = $('.ap-tabs-link'),
			$insights = $('.ap-insights');

	if ($insights.length) {
		$listItem.on('click', function(e) {
			e.preventDefault();
			console.log('Holi')
			$(this).parent().addClass("ap-tabs-item--current");
			$(this).parent().siblings().removeClass("ap-tabs-item--current");
			var tab = $(this).attr("href");

			$(tab).siblings().removeClass('ap-tab--active');
			$(tab).addClass('ap-tab--active');
		});
	}
}

$(function(){
	$('.ap-prtc-img').imagefill();
	sliderHome();
	sliderGallery();
	modalBox();
	tabs();
	enter();
});

$(document).ready(function(){

});
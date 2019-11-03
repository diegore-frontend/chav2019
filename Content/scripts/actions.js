var $wW = $(window).width(),
		$modLink = $(".ap-mod"),
		$mClose = $(".ap-modal-close"),
		$infoHeight = "",
		$infoSize = "",
		$tl ="",
		$ww = $(window).width(),
		p,
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

function imageFill() {
	if ($('.ap-us').length) {
		$('.ap-us-img').imagefill();
	}

	if ($('.ap-prtc-img').length) {
		$('.ap-prtc-img').imagefill();
	}
	if ($('.ap-gal-img').length) {
		$('.ap-gal-img').imagefill({runOnce:true});
	}
}

function sliderGallery() {
	$video = $('.ap-video-src').get(0);

	if ($('#ap-gallery').length) {
		var swiper = new Swiper('.ap-gallery-slide', {
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: {
					delay: 5000,
				}
		});

		function videoControl() {
			$video.play();

			$('.ap-video-src').bind('ended', function(){
				$('.ap-gal-overlay').fadeOut();
			});
		}

		$('.ap-gal-link').on('click', function(e){
			e.preventDefault();
			var $tar = $(this).attr('href');

			$($tar).fadeIn("1", function(){
				videoControl();
			});
		})

		$('.ap-gal-close').on('click', function(e){
			e.preventDefault();
			$(this).parent().fadeOut("slow", function(){
				$video.pause();
			});
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

function urlCntrol() {
	var $page = jQuery.url.attr("file");

	if(!$page) {
		$page = 'index.html';
	}
	$('.ap-nav-cont .ap-nav-list .ap-nav-item').each(function(){
		var	$href = this.href.substring(this.href.lastIndexOf('/') + 1);
		if ( ($href == $page) || ($href == '') ) {
			$(this).parent().addClass('ap-nav-list--current');
		} else {
			$(this).parent().removeClass('ap-nav-list--current');
		}
	});
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
			$(this).parent().addClass("ap-tabs-item--current");
			$(this).parent().siblings().removeClass("ap-tabs-item--current");
			var tab = $(this).attr("href");

			$(tab).siblings().removeClass('ap-tab--active');
			$(tab).addClass('ap-tab--active');
		});
	}
}


function updateScrollBar() {
	$(".ap-scroll").perfectScrollbar("update");
}



function infoHeight() {
	$ww = $(window).width();

	if($ww >= 760) {
		// Si es ipad
		$infoHeight = "30";
		$infoSize = 'ipad';

		return $infoSize
		return $infoHeight
	} else {
		// Menos que ipad
		$infoHeight = "18";

		return $infoHeight
	}
}

$(function(){
	urlCntrol();
	infoHeight();
	imageFill();
	sliderHome();
	sliderGallery();
	modalBox();
	tabs();
	enter();

	if ($(".ap-scroll").length) {
		$(".ap-scroll").perfectScrollbar();
	}

	$(window).smartresize(function(){
		infoHeight();
	});
});
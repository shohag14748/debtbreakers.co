$(document).ready(function () {
	new WOW().init();

	$(".benefit-blockwrap").mouseenter(function () {
		$(this).find('#benefitOne').attr("src", "onepage/images/benefit-pay-icon-black.png");
		$(this).find('#benefitTwo').attr("src", "onepage/images/benefit-blacklist-icon-black.png");
		$(this).find('#benefitThree').attr("src", "onepage/images/benefit-asset-icon-black.png");
		$(this).find('#benefitFour').attr("src", "onepage/images/benefit-icon-1-black.png");
		$(this).find('#benefitFive').attr("src", "onepage/images/benefit-icon-2-black.png");
		$(this).find('#benefitSix').attr("src", "onepage/images/benefit-icon-3-black.png");
	});
	$(".benefit-blockwrap").mouseleave(function () {
		$(this).find('#benefitOne').attr("src", "onepage/images/benefit-pay-icon-white.png");
		$(this).find('#benefitTwo').attr("src", "onepage/images/benefit-blacklist-icon-white.png");
		$(this).find('#benefitThree').attr("src", "onepage/images/benefit-asset-icon-white.png");
		$(this).find('#benefitFour').attr("src", "onepage/images/benefit-icon-1-white.png");
		$(this).find('#benefitFive').attr("src", "onepage/images/benefit-icon-2-white.png");
		$(this).find('#benefitSix').attr("src", "onepage/images/benefit-icon-3-white.png");
	});

	$(".debt-counselling-blockwrap").mouseenter(function () {
		$(this).find('#counsellingOne').attr("src", "onepage/images/budget-advice-icon-white.png");
		$(this).find('#counsellingTwo').attr("src", "onepage/images/reduced-payment-icon-white.png");
		$(this).find('#counsellingThree').attr("src", "onepage/images/reduced-rate-icon-white.png");
	});
	$(".debt-counselling-blockwrap").mouseleave(function () {
		$(this).find('#counsellingOne').attr("src", "onepage/images/budget-advice-icon-orange.png");
		$(this).find('#counsellingTwo').attr("src", "onepage/images/reduced-payment-icon-orange.png");
		$(this).find('#counsellingThree').attr("src", "onepage/images/reduced-rate-icon-orange.png");
	});

	$('#accordionExample').on('shown.bs.collapse', function () {
		var currentBtn = $(this).find('.card').find('.btn:not(.collapsed)');
		var findBtn = $(this).find('.card').find('.btn').hasClass('collapsed');
		if (findBtn == true) {
			$(currentBtn).find('img').attr('src', 'onepage/images/plus-icon-white.png');
		} else {
			$(currentBtn).find('img').attr('src', 'onepage/images/plus-icon-orange.png');
		}
	});

	$('#accordionExample').on('hidden.bs.collapse', function () {
		var currentBtn = $(this).find('.card').find('.btn.collapsed');
		var findBtn = $(this).find('.card').find('.btn').hasClass('collapsed');
		if (findBtn == true) {
			$(currentBtn).find('img').attr('src', 'onepage/images/plus-icon-orange.png');
		} else {
			$(currentBtn).find('img').attr('src', 'onepage/images/plus-icon-white.png');
		}
	});
});

$(function () {
	var i = 0;	
	$('.next-btn').on('click', function (e) {

		if(i == 0){
			i++;
		}
		/*for text-bold*/
		if (i == 1) {			
			$('.step2-text-bold').addClass('text-bold');
		}
		else if(i == 2)
		{
			if ($('#EntertainmentExpenses').val() == '0') {
				$('.step2-error-message').css("display", "block");
				return false;	
			}
			i++;
			$('.step3-text-bold').addClass('text-bold');
		}

		if($(this).hasClass('cal-btn')){
			/*if ($('#HouseAndCarCreditors').val() == '0' && $('#PersonalLoansAndOtherCreditors').val() == '0') {
				$('.step3-house-error-message').css("display", "block");
				$('.step3-personal-error-message').css("display", "block");
				return false;	
			}
			else*/ if ($('#HouseAndCarCreditors').val() == '0') {
				$('.step3-house-error-message').css("display", "block");
				return false;	
			}
			/*else if($('#PersonalLoansAndOtherCreditors').val() == '0'){
				$('.step3-personal-error-message').css("display", "block");
				return false;	
			}*/
				$('.steps-nav .nav-link.active').addClass('completed');
				$('.steps-nav .nav-link.active').removeClass('active');
		}
		/*text-bold complete*/

		e.preventDefault();
		$('.steps-nav .nav-link.active').removeClass('active').next().addClass('active');
		if (i > 0) {
			i++;
			$('.steps-nav .nav-link.active').prev().addClass('completed');
		}
		/* for fadding effect */
		var tab = $(this).parentsUntil('tab-pane').removeClass('show active').next();
		$(this).parentsUntil('tab-pane').removeClass('show active').next().addClass('active');
		setTimeout(function () {
			tab.addClass('show');
		}, 80);
		/*----------- fadding effect js ends -----------------*/
	});

	$('.prev-btn').on('click', function (e) {
		if(i == 4){
			i--;
		}
		e.preventDefault();
		/*for text-bold*/
		if (i == 3) {
			i--;
			$('.step2-error-message').css("display", "none");
			$('.step3-text-bold').removeClass('text-bold');
		}
		else if(i == 2)
		{	i--;
			$('.step2-text-bold').removeClass('text-bold');
		}
		/*text-bold complete*/	
		if($(this).hasClass('break-debt-back-btn')){
			$('#step3').addClass('active');
			$('#step3').removeClass('completed');

		}
		else if($(this).hasClass("prev-step3"))
		{
			$('#step3').removeClass('active');			
			$('#step2').addClass('active');
			$('#step2').removeClass('completed');			
		}
		else if($(this).hasClass("prev-step2"))
		{
			$('#step2').removeClass('active');			
			$('#step1').addClass('active');
			$('#step1').removeClass('completed');			
		}
		/*$('.steps-nav .nav-link.active').removeClass('active').prev().addClass('active');
		$('.steps-nav .nav-link.active').removeClass('completed');*/

		/* for fadding effect */
		var tab = $(this).parentsUntil('tab-pane').removeClass('show active').prev();
		$(this).parentsUntil('tab-pane').removeClass('show active').prev().addClass('active');
		setTimeout(function () {
			tab.addClass('show');
		}, 80);
		/*----------- fadding effect js ends -----------------*/
	});
	$('.cal-btn').on('click', function (e) {
			
		
		/*if ($('#HouseAndCarCreditors').val() == '0' && $('#PersonalLoansAndOtherCreditors').val() == '0') {
			$('.step3-house-error-message').css("display", "block");
			$('.step3-personal-error-message').css("display", "block");
			e.preventDefault();
			return false;	
		}
		else*/ if ($('#HouseAndCarCreditors').val() == '0') {
			$('.step3-house-error-message').css("display", "block");
			e.preventDefault();
			return false;	
		}
		/*else if($('#PersonalLoansAndOtherCreditors').val() == '0'){
			$('.step3-personal-error-message').css("display", "block");
			e.preventDefault();
			return false;	
		}*/
		$('.step3-house-error-message').css("display", "none");
			//$('.step3-personal-error-message').css("display", "none");
		
		$('.banner-last-steps-wrapper').removeClass('d-none').addClass('d-block');
		$('.calculated-info-wrapper').removeClass('d-none').addClass('d-block');
		$('.banner-calculator-wrapper').removeClass('d-block').addClass('d-none');
		$('.banner-try-txt').removeClass('active');
		$('.banner-try-txt').removeClass('show');
		$('.banner-try-txt').removeClass('d-block').addClass('d-none');
		$('.calculated-right-info').get(0).scrollIntoView({
			behavior: 'smooth'
		});
	});

	$('.break-debt-btn').on('click', function (e) {
		var reference_number = Math.floor(100000 + Math.random() * 900000);
		$('#reference_number').text(reference_number);
		$('#reference_number_DB').val(reference_number);
		$('.calculated-info-wrapper').removeClass('d-block').addClass('d-none');
		$('.breaking-debt-form-wrap').removeClass('d-none').addClass('d-block');
		$('html, body').animate({
			scrollTop: $('.home-banner-section').offset().top
		}, 500);
	});


	$('.break-debt-back-btn').on('click', function (e) {
		i--;
		$('.banner-calculator-wrapper').removeClass('d-none').addClass('d-block');
		$('.banner-try-txt').removeClass('d-none').addClass('d-block');
		$('.calculated-info-wrapper').removeClass('d-none').addClass('d-block');
		$('.calculate-step').addClass('active');
		$('.calculate-step').addClass('show');
		$('.banner-last-steps-wrapper').removeClass('d-block').addClass('d-none');
		$('html, body').animate({
			scrollTop: $('.home-banner-section').offset().top
		}, 500);
	});

	var winWid = $(document).width();
	if (winWid > 767) {

	} else {
		$('.home-banner-section').get(0).scrollIntoView();
	}
});
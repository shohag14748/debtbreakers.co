// Important Note
// ----------------------------- //

// Class name 
// BannerIdentity -- Parent class
// bannerGet -- The classname of slider in the parent class
// textboxGet -- The classname of Textbox in the parent class
// TextBoxIdentity -- The classname of the main div which contain whole individual steps
// BannerId2 -- This variable stores the next textbox id which is increment of first one
// For example -- first one is 'banner1' then it stores 'banne'+numeric increment so 'banner2'
// The string concatinate as 'slider' or 'textbox' stores the final sum total display values

// ----------------------------- //


// Function for setting slider value from textbox

$(function () {
    $('#banner1banner2').html(parseInt($('#banner1banner2').html()).toLocaleString().replace(/,/g, ' '));
});

function textboxToslider(inputValue,inputId){
    var SliderId = $('#'+inputId).closest(".BannerIdentity").find(".bannerGet").attr("id");    
    /*parseInt($(this).val()).toLocaleString().replace(/,/g, ' ')*/
    $('#'+SliderId).slider('setValue', Math.trunc(inputValue), true);
    sliderTotextbox(inputValue,SliderId);    
}


// Function for setting textbox value from slider
function sliderTotextbox(inputValue,inputId){
    var inputValue = $('#'+inputId).data('slider').getValue();
    var TextboxId = $('#'+inputId).closest(".BannerIdentity").find(".textboxGet").attr("id");
    var decPart = ($('#'+TextboxId).val()+"").split(".")[1];
    var DecimalValueTrunc = decPart;
    $('#'+TextboxId).val(parseFloat(inputValue+"."+DecimalValueTrunc));
    var BannerId1 = $('#'+inputId).closest(".TextBoxIdentity").find(".bannerGet").attr("id");
    var NextNumber= BannerId1.substr(BannerId1.indexOf('banner')+6);
    var BannerId2 = "banner"+(parseFloat(NextNumber)+1);

    var TextboxIds = $('#'+inputId).closest(".TextBoxIdentity").find(".textboxGet").map(function() {
      return $(this).attr('id');
    });
    var FirstTextboxDecimal = ($('#'+TextboxIds[0]).val()+"").split(".")[1];
    var SecondTextboxDecimal = ($('#'+TextboxIds[1]).val()+"").split(".")[1];

    var TotalvalueText = parseFloat($('#'+BannerId1).data('slider').getValue()+'.'+FirstTextboxDecimal) + parseFloat($('#'+BannerId2).data('slider').getValue()+'.'+SecondTextboxDecimal);

    var TotalvalueSlider = parseFloat($('#'+BannerId1).data('slider').getValue()) + parseFloat($('#'+BannerId2).data('slider').getValue());

    var TotalvalueText = Number(TotalvalueText);
    var TotalvalueSlider = Number(TotalvalueSlider);


    $('#'+BannerId1+''+BannerId2).html(parseInt(TotalvalueText).toLocaleString().replace(/,/g, ' '));
    $('.'+BannerId1+''+BannerId2+'Slider').slider('setValue', TotalvalueSlider, true);
    $('.'+BannerId1+''+BannerId2+'Text').val(TotalvalueText);
    setCalculation();
    DecimalValueTrunc = 0;
}
$('.TotalDebtRepayments').html($('#TotalMonthlyDebtRepayments').val());
$('#banner7,#banner8,#banner9').on('change',function(){
    if($(this).attr('id') == "banner7"){
        var ValueDecimal = ($('#TotalMonthlyNetIncome').val()+"").split(".")[1];
        $('#TotalMonthlyNetIncome').val(parseFloat($(this).data('slider').getValue()+'.'+ValueDecimal));
        $('#banner7').slider('setValue', Number($(this).val()), true);
    }
    if($(this).attr('id') == "banner8"){
        var ValueDecimal = ($('#TotalMonthlyLivingExpenses').val()+"").split(".")[1];
        $('#TotalMonthlyLivingExpenses').val(parseFloat($(this).data('slider').getValue()+'.'+ValueDecimal));
        $('#banner8').slider('setValue', Number($(this).val()), true);
    }
    if($(this).attr('id') == "banner9"){
        var ValueDecimal = ($('#TotalMonthlyDebtRepayments').val()+"").split(".")[1];
        $('#TotalMonthlyDebtRepayments').val(parseFloat($(this).data('slider').getValue()+'.'+ValueDecimal));
        $('#banner9').slider('setValue', Number($(this).val()), true);
    }
    setCalculation();
    
});
$('#TotalMonthlyNetIncome,#TotalMonthlyLivingExpenses,#TotalMonthlyDebtRepayments').on('change',function(){
    if($(this).attr('id') == "TotalMonthlyNetIncome"){
        if(Number(Math.trunc($(this).val())) >= 1000 && Number(Math.trunc($(this).val())) <= 198001)
            $('#banner7').slider('setValue', Number(Math.trunc($(this).val())), true);
        else if(Number(Math.trunc($(this).val())) < 1000)
        {
            $('#banner7').slider('setValue', 1000, true);
            $('#TotalMonthlyNetIncome').val(1000);
        }
        else if(Number(Math.trunc($(this).val())) > 198001){
            $('#banner7').slider('setValue', 198001, true);
            $('#TotalMonthlyNetIncome').val(198001);
        }
    }
    if($(this).attr('id') == "TotalMonthlyLivingExpenses"){
        if(Number(Math.trunc($(this).val())) <= 198001)
            $('#banner8').slider('setValue', Number(Math.trunc($(this).val())), true);
        else if(Number(Math.trunc($(this).val())) > 198001){
            $('#banner8').slider('setValue', 198001, true);
            $('#TotalMonthlyLivingExpenses').val(198001);
        }
    }
    if($(this).attr('id') == "TotalMonthlyDebtRepayments"){
        if(Number(Math.trunc($(this).val())) >= 1000 && Number(Math.trunc($(this).val())) <= 198001)
            $('#banner9').slider('setValue', Number(Math.trunc($(this).val())), true);
        else if(Number(Math.trunc($(this).val())) < 1000)
        {
            $('#banner9').slider('setValue', 1000, true);
            $('#TotalMonthlyDebtRepayments').val(1000);
        }
        else if(Number(Math.trunc($(this).val())) > 198001){
            $('#banner9').slider('setValue', 198001, true);
            $('#TotalMonthlyDebtRepayments').val(198001);
        }
    }
    setCalculation();
});

function setCalculation(){
    var B = parseInt($('#TotalMonthlyNetIncome').val().replace(/ /g, ''));
    var BPer = 55 * parseFloat($('.banner5banner6Text').val().replace(/ /g, '')) / 100;
    var Cval = parseFloat($('.banner5banner6Text').val().replace(/ /g, '')) - BPer;
    
    $('.priceinfo_Span1').html(parseInt(BPer.toFixed(2)).toLocaleString().replace(/,/g, ' '));
    $('.priceinfo_Span2').html(parseInt(Cval.toFixed(2)).toLocaleString().replace(/,/g, ' '));
    $('.TotalDebtRepayments').html(parseInt($('#TotalMonthlyDebtRepayments').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));

    $('#MonthlyNetSalary').val(parseInt($('#MonthlyNetSalary').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));
    $('#MonthlyNetOther').val(parseInt($('#MonthlyNetOther').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));
    $('#EntertainmentExpenses').val(parseInt($('#EntertainmentExpenses').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));
    $('#OtherExpenses').val(parseInt($('#OtherExpenses').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));
    $('#HouseAndCarCreditors').val(parseInt($('#HouseAndCarCreditors').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));
    $('#PersonalLoansAndOtherCreditors').val(parseInt($('#PersonalLoansAndOtherCreditors').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));
    $('#TotalMonthlyNetIncome').val(parseInt($('#TotalMonthlyNetIncome').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));
    $('#TotalMonthlyLivingExpenses').val(parseInt($('#TotalMonthlyLivingExpenses').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));
    $('#TotalMonthlyDebtRepayments').val(parseInt($('#TotalMonthlyDebtRepayments').val().replace(/ /g, '')).toLocaleString().replace(/,/g, ' '));

}

// Onload set value to 1000 by deafult
$( document ).ready(function() {
    $('#banner1').slider('setValue', 17500, true);
    $('#banner2').slider('setValue', 27700, true);
    $('#banner3').slider('setValue', 0, true);
    $('#banner4').slider('setValue', 0, true);
    $('#banner5').slider('setValue', 0, true);
    $('#banner6').slider('setValue', 0, true);
    $('#banner7').slider('setValue', 45200, true);
    $('#banner8').slider('setValue', 0, true);
    $('#banner9').slider('setValue', 2000, true);
    setCalculation();

});
function ValidateNumber(e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110]) !== -1 ||
        (e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
        (e.keyCode >= 35 && e.keyCode <= 40)) {
             return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
}


$(document).ready(function(){

/***  animating slider1 after 2-sec of page being loaded  -  START ***/

    var contentWidth = $('#slider-txt').width(); // taking width of content in the slider
    var sliderWidth = $('#ex1Slider1').width(); // taking width of slider

    
    $('#slider-txt').hide(); // hide the content
    var leftCSS = $('#ex1Slider1 .min-slider-handle').css('left'); // taking left property (in px) of the slider handle
    var leftCSSChanges = contentWidth + 50; // add 100px more to slide left

    // check if slider handle swipe left out side slider
    if(sliderWidth <= leftCSSChanges){
      leftCSSChanges = sliderWidth // swipe handle max to slider width only.
    }


    function slideLeft(){

        $('#ex1Slider1 .min-slider-handle').animate({left: leftCSSChanges + 'px'},"1000");
        $('#ex1Slider1 .slider-selection').animate({width: leftCSSChanges}, "1000");
        $('#slider-txt').fadeIn( 800 ).delay( 2000 ).fadeOut();
    }

    function slideBack(){
      $('#ex1Slider1 .min-slider-handle').animate({left: leftCSS}, "1000");
      $('#ex1Slider1 .slider-selection').animate({width: leftCSS}, "1000");
    }

    // first slide left
    setTimeout(function() {
        slideLeft();
    }, 2000);
        
    // first slide back to normal
    setTimeout(function() {
        slideBack();
    }, 5000);

    // Second time slide left
    setTimeout(function() {
        slideLeft();
    }, 7000);
        
    // Second slide back to normal
    setTimeout(function() {
        slideBack();
    }, 10000);

  /***  animating slider1 after 2-sec of page being loaded  -  END ***/


});
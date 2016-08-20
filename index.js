$(document).ready(function(){

    $('.subHeaders').hide();
    $('#Button').fadeIn();
    optionBorderOn('#opButton');

    $('img').not('#monoColorImg').not('#logo+summary').click(function(){
        unselectAll(this);//turn
        $(this).parent('div').addClass('selectedDiv');
    });

    $('#opButton').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#Button').fadeIn();
        optionBorderOn(this);
    });
    $('#opLapel').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#Lapel').fadeIn();
        optionBorderOn(this);
    });
    $('#opVent').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#Vent').fadeIn();
        optionBorderOn(this);
    });
    $('#opPocket').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#Pocket').fadeIn();
        optionBorderOn(this);
    });
    $('#opMonogram').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#Monogram').fadeIn();
        optionBorderOn(this);
    });
    $('#opPantStyle').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#pantStyle').fadeIn();
        optionBorderOn(this);
    });
    $('#opPantsPocket').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#pantsPocket').fadeIn();
        optionBorderOn(this);
    });
    $('#opPantsClose').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#pantsWaist').fadeIn();
        optionBorderOn(this);
    });
    $('#opCuffs').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#Cuffs').fadeIn();
        optionBorderOn(this);
    });
    $('#opMonoPants').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#MonogramPants').fadeIn();
        optionBorderOn(this);
    });
    $('#Summary').click(function(){
        $('.subHeaders').hide();
        optionBorderOff();
        $('#summaryDiv').empty();
        $('.selectedDiv').each(function(){
            $('#summaryDiv').append($(this).attr('id'));
            $('#summaryDiv').append('<br>');
        });
        $('#summaryDiv').append('Change Pocket: '+$('#changePckt option:selected').text());
        $('#summaryDiv').append('<br>');
        $('#summaryDiv').append('Suspender Buttons: '+$('#suspenders option:selected').text());
        $('#summaryDiv').append('<br>');
        $('#summaryDiv').append('Coat Monogram: '+ $('#monoText').val()+' Color: '+$('#monoColorName').val()+' Font: '+$('#monoFontName').val());
        $('#summaryDiv').append('<br>');
        $('#summaryDiv').append('Pants Monogram: '+ $('#monoPantsText').val()+' Color: '+$('#monoPantsColorName').val()+' Font: '+$('#monoPantsFontName').val());
        $('#sumDiv').fadeIn();
    });

});



function optionBorderOn(button){
    $(button).css('border-style', 'solid');
    $(button).css('border-width', '4px');
    $(button).css('border-color', 'black');
    $(button).css('overflow', 'hidden');
}

function optionBorderOff(){
    $('#options').children().each(function(){
        $(this).css('border', 'none');
    });
}

function imgBorderOn(button){
    $(button).css('outline-style', 'solid');
    $(button).css('outline-width', '4px');
    $(button).css('outline-color', '#294bc0');
}

function unselectAll(selected){
    $(selected).parent().parent().children('div').each(function(){
        $(this).removeClass('selectedDiv');
    });
}








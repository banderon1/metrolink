//setInterval(function(){
setTimeout(function(){
    $('.box-1').addClass('magictime rotateLeft');
    $('.box-2').addClass('magictime rotateRight');
    $('.box-3').addClass('magictime rotateUp');
    $('.box-4').addClass('magictime rotateDown');
}, 2000);
setTimeout(function(){
    $('.box-1').removeClass('magictime rotateLeft');
    $('.box-2').removeClass('magictime rotateRight');
    $('.box-3').removeClass('magictime rotateUp');
    $('.box-4').removeClass('magictime rotateDown');
}, 4000);

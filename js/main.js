//setInterval(function(){
var timeoutMontage;
$(function(){
    showNextMontage(0);
});

$('.montage').click(function(){
    var page = parseInt($(this).attr('id').replace(/\D/g,''));
    clearTimeout(timeoutMontage);
    showNextMontage(page);
});

function showNextMontage(page) {
    var nextPage = page+1;
    var animations = ['', 'swap', 'swap', 'swap', 'swap', 'swap', 'swap', 'swap', 'swap'];
    if(page >= animations.length-1) nextPage = 1;
    var nextAnimation = animations[nextPage];
    $('#page' + nextPage + ' .row div').addClass('magictime ' + nextAnimation);
    $('#page' + page).hide();
    $('#page' + nextPage).show();
    var snd = new Audio("audio/whoosh.wav"); // buffers automatically when created
    snd.play();
    timeoutMontage = setTimeout(function(){
        showNextMontage(nextPage);
    }, 8000);
}

$('.video').click(function(e){
    e.stopPropagation();
    clearTimeout(timeoutMontage);
    var videoId = parseInt($(this).attr('id').replace(/\D/g,''));
    console.log('video click' + videoId);
});

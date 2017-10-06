//setInterval(function(){
$(function(){
    var page = 0;
    showNextMontage(page);
    setTimeout(function(){
        page = page + 1;
        showNextMontage(page);
    }, 3000);
});
$('.montage').click(function(){
    var page = parseInt($(this).attr('id').replace(/\D/g,''));
    showNextMontage(page);
});

function showNextMontage(page) {
    var nextPage = page+1;
    if(page >= 2) nextPage = 1;
    var animations = ['', 'perspectiveLeftReturn', 'swap'];
    var nextAnimation = animations[nextPage];
    $('#page' + nextPage + ' .row div').addClass('magictime ' + nextAnimation);
    $('#page' + page).hide();
    $('#page' + nextPage).show();
    var snd = new Audio("audio/whoosh.wav"); // buffers automatically when created
    snd.play();
    setTimeout(function(){
        $('#page' + nextPage + ' .row div').removeClass('magictime ' + nextAnimation);
    }, 3000);
}

//setInterval(function(){
$(function(){
    var page = 0;
    showNextMontage(page);
    setTimeout(function(){
        page = page + 1;
        showNextMontage(page);
    }, 8000);
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
    console.log(nextAnimation);
    $('#page' + nextPage + ' .row div').addClass('magictime ' + nextAnimation);
    $('#page' + page).hide();
    $('#page' + nextPage).show();
    setTimeout(function(){
        $('#page' + nextPage + ' .row div').removeClass('magictime ' + nextAnimation);
    }, 1000);
}

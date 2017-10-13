//setInterval(function(){
var timeoutMontage;
$(function(){
    showNextMontage(0);

    $('.montage').click(function(){
        var page = parseInt($(this).attr('id').replace(/\D/g,''));
        clearTimeout(timeoutMontage);
        showNextMontage(page);
    });

    $('.video').click(function(e){
        e.stopPropagation();
        clearTimeout(timeoutMontage);
        videos = [
            '',
            '//www.youtube.com/embed/fcDRFCeq_9Q',
            '//www.youtube.com/embed/UP7Ccni9gjM',
            '//www.youtube.com/embed/tSmyOFvIy04',
            '//www.youtube.com/embed/ypTEQWy7cuQ ',
            '//www.youtube.com/embed/OTmGj9OMguM',
            '//www.youtube.com/embed/vuhSJAtGOVY',
            '//www.youtube.com/embed/ZTmtFJAq2MM',
            '//www.youtube.com/embed/hg4Z4BAKHWU'
        ];
        $('#videoModal').modal();
        var videoId = parseInt($(this).attr('id').replace(/\D/g,''));
        $("#videoPopup").attr('src', videos[videoId]);
    });

    //pause the video if the popup is closed
    $('#videoModal').on('hidden.bs.modal', function (e) {
        $("#videoPopup").attr('src', '');
    });
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

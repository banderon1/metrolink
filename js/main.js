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
            '07-13-17_National Icecream Month (Ben & Jerry\'s)_B-Roll',
            'How to Ride Metrolink',
            'Metrolink 25 Years - Draft 5',
            'Metrolink Destination Series  Beaches',
            'Metrolink Destination Series  Hollywood',
            'Metrolink Destination Series  Olvera Street',
            'Metrolink Destinations - San Juan Capistrano',
            'Metrolink_PTC'
        ];
        $('#videoModal').modal();
        var myVideo = document.getElementById("videoPopup");
        var videoId = parseInt($(this).attr('id').replace(/\D/g,''));
        myVideo.src = 'img/videos/' + encodeURIComponent(videos[videoId]) + '.mp4';
        myVideo.play();
    });

    //pause the video if the popup is closed
    $('#videoModal').on('hidden.bs.modal', function (e) {
        var myVideo = document.getElementById("videoPopup");
        myVideo.pause();
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

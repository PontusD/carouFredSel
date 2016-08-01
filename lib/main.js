$(function () {
    $("#caroufredsel_2012").carouFredSel({
        width: '100%',
        align: 'center',

        items: {
            visible: 1,
            start: -1
        },

        curcular: false,
        infinite: true,
       
        pagination: "#foot_pager"
    });
});

$(function () {


    var iframe = $("#player1")[0];
    var player = $f(iframe);

    // When the player is ready, add listeners for pause, finish, and playProgress
    player.addEvent('ready', function() {

        player.addEvent('play', onPlay);
        player.addEvent('pause', onPause);
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', onPlayProgress);
    });
 
    function onPause() {
        $("#caroufredsel_2012").trigger('play');    
    }

    function onFinish() {
        $("#caroufredsel_2012").trigger('play');    
    }

    function onPlay() {
        $("#caroufredsel_2012").trigger('pause');  
    }
    function onPlayProgress(data) {
        $("#caroufredsel_2012").trigger('pause');  
    }


});


$(function () {

    var iframe = $("#player2")[0];
    var player = $f(iframe);

    // When the player is ready, add listeners for pause, finish, and playProgress
    player.addEvent('ready', function() {

        player.addEvent('play', onPlay);
        player.addEvent('pause', onPause);
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', onPlayProgress);
    });

    function onPause() {
        $("#caroufredsel_2012").trigger('play');    
    }

    function onFinish() {
        $("#caroufredsel_2012").trigger('play');    
    }

    function onPlay() {
        $("#caroufredsel_2012").trigger('pause');  
    }
    function onPlayProgress(data) {
        $("#caroufredsel_2012").trigger('pause');  
    }


});


$(function () {

    var iframe = $("#player3")[0];
    var player = $f(iframe);

    // When the player is ready, add listeners for pause, finish, and playProgress
    player.addEvent('ready', function() {

        player.addEvent('play', onPlay);
        player.addEvent('pause', onPause);
        player.addEvent('finish', onFinish);
        player.addEvent('playProgress', onPlayProgress);
    });

    function onPause() {
        $("#caroufredsel_2012").trigger('play');    
    }

    function onFinish() {
        $("#caroufredsel_2012").trigger('play');    
    }

    function onPlay() {
        $("#caroufredsel_2012").trigger('pause');  
    }
    function onPlayProgress(data) {
        $("#caroufredsel_2012").trigger('pause');  
    }


});


/*
 
        prev: {
            button: "#foo_prev",
            key: "left"
        },
        next: {
            button: "#foo_next",
            key: "right"
        },

auto: {
            pauseOnHover: 'resume',
            onPauseStart: function (percentage, duration) {
                $(this).trigger('configuration', ['width', function (value) {
                    $('#timer').stop().animate({
                        width: value
                    }, {
                        duration: duration,
                        easing: 'linear'
                    });
                }]);
            },
            onPauseEnd: function (percentage, duration) {
                $('#timer').stop().width(0);
            },
            onPausePause: function (percentage, duration) {
                $('#timer').stop();
            }
        },
*/
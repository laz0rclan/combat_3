var x = 0;
var y = 0;
var isFullscreen = false;

function oFull() {
    isFullscreen = true;
    if (x == 0) {
        x = $('#game_embed').width();
        y = $('#game_embed').height();
    }

    $('#close').css('bottom', '4px').css('right', '4px')
    $('#close').css('zIndex', '30').css('position', 'fixed')
    $('#close').show();
    $('#game_embed').css({top: '0px', left: '0px', width: '100%', height: '100%'});
    $('#game_embed').css({position: 'fixed', zIndex: 20, backgroundColor: '#000'});
    $('#swf').width('100%').height('100%');
    $('#game_embed div[style^="visib"]').remove();
    $('#game_embed').show()
}

function cFull() {
    isFullscreen = false;
    $('#close').hide();
    $('#swf').width('100%').height('100%');
    $('#game_embed').width(x + 'px').height(y + 'px').css('position', 'relative');
}

function initFullscreen() {
    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            if (isFullscreen) {
                cFull();
            }
        }
    });

    setTimeout(function () {
        $('#fullscreen').bind('click', function () {
            oFull();
        });
    }, 2000);
}

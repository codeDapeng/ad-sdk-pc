function bigFlashBanner() {
    //首页大广告
    var gg960ShowTime = 10000; //播放时间
    var gg960Time = null;

    function open_gg960(showBtn) {
        $('.advbox .advcon').html(gg960Con).slideDown(300, function () {
            if (showBtn !== false) {
                $('.advbox .advbtn').fadeIn();
            }
            if (gg960Time) {
                clearTimeout(gg960Time);
            }
            gg960Time = setTimeout(close_gg960, gg960ShowTime);
        });
    }

    function close_gg960() {
        $('.advbox .advcon').slideUp(500, function () {
            $(this).html('');
            $('.advclose').hide();
            $('.advreplay').show();
        });
    }
    $('.advclose').click(function () {
        if (gg960Time) {
            clearTimeout(gg960Time);
        }
        close_gg960();
        return false;
    });
    $('.advreplay').click(function () {
        if (gg960Time) {
            clearTimeout(gg960Time);
        }
        open_gg960(false);
        $('.advreplay').hide();
        $('.advclose').show();
        return false;
    });

    var gg960Con;
    var fullAdType = 'swf';
    var fullAdUrl = 'http://www.baidu.com/'
    var fullAdName = 'images/qpad.swf';
    if (fullAdName) {
        if (fullAdType == 'swf') {
            gg960Con = '<embed wmode="transparent" height="400" width="980" flashvars="alink1=' + fullAdUrl + '" allowscriptaccess="always" quality="high" name="Advertisement" id="Advertisement" style="" src="images/qpad.swf" type="application/x-shockwave-flash"></embed>';

        } else {
            gg960Con = '<a href="' + fullAdUrl + '" target="_blank"><img width="980" height="400" src="images/qpad.jpg"/></a>'; //flash无法显示时，显示JPG广告
        }

        setTimeout(open_gg960, 1500); //延迟显示
    }
}

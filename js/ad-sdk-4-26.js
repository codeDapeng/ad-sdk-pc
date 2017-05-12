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


// JavaScript Document
var lastScrollY = 0;

function heartBeat() {
    var diffY;
    if (document.documentElement && document.documentElement.scrollTop)
        diffY = document.documentElement.scrollTop;
    else if (document.body)
        diffY = document.body.scrollTop
    else { /*Netscape stuff*/ }

    //alert(diffY);
    var percent = .1 * (diffY - lastScrollY);
    if (percent > 0) percent = Math.ceil(percent);
    else percent = Math.floor(percent);
    document.getElementById("lovexin12").style.top = parseInt(document.getElementById("lovexin12").style.top) + percent + "px";
    document.getElementById("lovexin14").style.top = parseInt(document.getElementById("lovexin12").style.top) + percent + "px";

    lastScrollY = lastScrollY + percent;
    //alert(lastScrollY);
}


function couplet() {
	var param ="domainName="+ window.location.host;
    $.ajax({
        type: 'get',
        data: param,
        url: 'http://192.168.0.57:8080/getCoupletAd.jspa',
        success:function(data){

        	//获取页面完整地址
        	var k_url = window.location.href;

		    console.log(data.src);
		    suspendcode12 = "<DIV id=\"lovexin12\" style='left:22px;POSITION:absolute;TOP:69px;'><a href='http://www.cuoxin.com/' target='_blank'><img border=0 src='"+data.src+"' alt=网络交易，风险自担！><br><a href=JavaScript:; onclick=\"lovexin12.style.visibility='hidden'\"><img border=0 src=images/close.gif></a></div>"

		    suspendcode14 = "<DIV id=\"lovexin14\" style='right:22px;POSITION:absolute;TOP:69px;'><a href='http://www.cuoxin.com/' target='_blank'><img border=0 src=images/you.jpg alt=网络交易，风险自担！><br><a href=JavaScript:; onclick=\"lovexin14.style.display = 'none'\"><img border=0 src=images/close.gif></div>"

		    document.write(suspendcode12);
		    document.write(suspendcode14);
		    window.setInterval("heartBeat()", 1);
        }
    });
}


function creatBox() {
    var rbbox = '<div id="rbbox"><a class="button" onclick="closeBox()">关闭</a><img src="images/box.png" alt=""></div>';
    document.write(rbbox);
    showBox();
    setTimeout("closeBox()", 5000)
}

function showBox(o) {
    if (o == undefined) o = document.getElementById("rbbox");
    o.style.height = o.clientHeight + 2 + "px";
    if (o.clientHeight < 200) setTimeout(function () {
        showBox(o)
    }, 5);
}

function closeBox() {
    document.getElementById("rbbox").style.display = "none";
}

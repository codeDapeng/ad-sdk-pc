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
    document.getElementById("coupletLeft").style.top = parseInt(document.getElementById("coupletLeft").style.top) + percent + "px";
    document.getElementById("coupletRight").style.top = parseInt(document.getElementById("coupletLeft").style.top) + percent + "px";

    lastScrollY = lastScrollY + percent;
    //alert(lastScrollY);
}


function couplet(ads) {

    var url = window.location.href;
    $.ajax({
        type: 'get',
        url: 'http://192.168.0.57:8080/getCoupletAd.jspa?domainName=www.codecreator.cn&appId=1&adSpaceId=2',
//        data: ads,
//        headers: {
//            "aaa":"aaaaaaaaaaaaaaaaaaaaaaaaaaa"
//        },
        success: function (data) {
            if (data.ret == 0) {
                var coupletLeft = "<DIV id=\"coupletLeft\" style='left:22px;position:absolute;top:69px;'><a href='"+data.jsonCreative.destUrl+"' target='_blank'><img style='width:100px;height:300px' border=0 src='" + data.jsonCreative.imageUrl + "' alt=网络交易，风险自担！><br><a href=JavaScript:; onclick=\"coupletLeft.style.visibility='hidden'\"><img  border=0 src=images/close.gif></a></div>"

                var coupletRight = "<DIV id=\"coupletRight\" style='right:22px;position:absolute;top:69px;'><a href='http://www.baidu.com/' target='_blank'><img style='width:100px;height:300px' border=0 src='" + data.jsonCreative.imageUrl + "' alt=网络交易，风险自担！><br><a href=JavaScript:; onclick=\"coupletRight.style.display = 'none'\"><img border=0 src=images/close.gif></div>"

                document.write(coupletLeft);
                document.write(coupletRight);
                window.setInterval("heartBeat()", 1);
            }
        }
    });
}


function creatBox(ads) {
    var url = window.location.href;
    $.ajax({
        type: 'get',
        url: 'http://192.168.0.57:8080/getCoupletAd.jspa?domainName=www.codecreator.cn&appId=1&adSpaceId=2',
//        data: ads,
//        headers: {
//            domainName: url
//        },
        success: function (data) {
            if (data.ret == 0) {
                var rbbox ="<div id=\"rbbox\" style=\"position:absolute;right:0;bottom:0;width:300px;height:144px;overflow:hidden\"><a class=\"button\" style=\"display:inline;float:right;font-size:12px;cursor:pointer\" onclick=\"closeBox()\">关闭</a><img src=\""+data.jsonCreative.imageUrl+"\" alt=\"\"></div>';
                document.write(rbbox);
                showBox();
                setTimeout("closeBox()", 5000);
            }
        }
    });

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

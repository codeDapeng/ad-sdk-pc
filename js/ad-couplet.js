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
    document.getElementById("adPicLeft").style.top = parseInt(document.getElementById("adPicLeft").style.top) + percent + "px";
    document.getElementById("adPicRight").style.top = parseInt(document.getElementById("adPicLeft").style.top) + percent + "px";

    lastScrollY = lastScrollY + percent;
    //alert(lastScrollY);
}


function couplet() {
    var param = "domainName=" + window.location.host;
    var adLeft;
    var adRight;
    $.ajax({
        type: 'get',
        data: param,
        url: 'http://192.168.0.57:8080/getCoupletAd.jspa',
        success: function (data) {
            //获取页面完整地址
            //        	var k_url = window.location.href;

            //		    console.log(data.src);
            adLeft = "<DIV id=\"adPicLeft\" style='left:22px;POSITION:absolute;TOP:69px;'><a href='http://www.baidu.com/' target='_blank'><img border=0 width=100 height=300 src='" + data.src + "' alt=网络交易，风险自担！><br><a href=JavaScript:; onclick=\"adPicLeft.style.visibility='hidden'\"><img border=0 src=images/close.gif></a></div>"

            adRight = "<DIV id=\"adPicRight\" style='right:22px;POSITION:absolute;TOP:69px;'><a href='http://www.baidu.com/' target='_blank'><img border=0 width=100 height=300 src=images/you.jpg alt=网络交易，风险自担！><br><a href=JavaScript:; onclick=\"adPicRight.style.display = 'none'\"><img border=0 src=images/close.gif></div>"
//            document.appendChild(adLeft);
//            document.appendChild(adRight);
            $('body').append(adLeft);
            $('body').append(adRight);
            window.setInterval("heartBeat()", 1);

        }
    });

}
couplet();

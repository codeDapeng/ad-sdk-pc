function creatBox() {
    var rbbox = '<div id="rbbox" style="position:absolute;right:0;bottom:0;width:300px;height:144px;overflow:hidden"><a class="button" style="display:inline;float:right;font-size:12px;cursor:pointer" onclick="closeBox()">关闭</a><img src="images/box.png" alt=""></div>';
    document.write(rbbox);
    showBox();
    setTimeout("closeBox()", 5000);
//    window.setInterval("heartBeat2()", 1);
}

function showBox(o) {
    if (o == undefined) {
        o = document.getElementById("rbbox");
        o.style.height = o.clientHeight + 2 + "px";

    }
    if (o.clientHeight < 200) {
        setTimeout(function () {
            showBox(o)
        }, 5);
    }
}

function closeBox() {
    document.getElementById("rbbox").style.display = "none";
}
creatBox();


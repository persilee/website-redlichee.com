$(document).ready(function() {


    function myBrowser() {
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
        var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
        var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
        if (isIE) {
            var IE5 = IE55 = IE6 = IE7 = IE8 = false;
            var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
            reIE.test(userAgent);
            var fIEVersion = parseFloat(RegExp["$1"]);
            console.log(fIEVersion);
            IE55 = fIEVersion == 5.5;
            IE6 = fIEVersion == 6.0;
            IE7 = fIEVersion == 7.0;
            IE8 = fIEVersion == 8.0;
            IE9 = fIEVersion == 9.0;
            IE10 = fIEVersion == 10;
            if (IE55) {
                return "IE55";
            }
            if (IE6) {
                return "IE6";
            }
            if (IE7) {
                return "IE7";
            }
            if (IE8) {
                return "IE8";
            }
            if (IE9) {
                return "IE9";
            }
            if (IE10) {
                return "IE10";
            }
        } //isIE end
        if (isFF) {
            return "FF";
        }
        if (isOpera) {
            return "Opera";
        }
        if (isSafari) {
            return "Safari";
        }
    } //myBrowser() end

    //以下是调用上面的函数
    // if (myBrowser() == "FF") {
    //     alert("我是 Firefox");
    // }
    // if (myBrowser() == "Opera") {
    //     alert("我是 Opera");
    // }
    // if (myBrowser() == "Safari") {
    //     alert("我是 Safari");
    // }
    if (myBrowser() == "IE55") {
        $('html').html('');
        alert("你使用的浏览器是IE 5.5，版本太低，请更新到IE8以上版本！");
    }
    if (myBrowser() == "IE6") {
        $('html').html('');
        alert("你使用的浏览器是IE 6，版本太低，请更新到IE8以上版本！");
    }
    if (myBrowser() == "IE7") {
        $('html').html('');
        alert("你使用的浏览器是IE 7，版本太低，请更新到IE8以上版本！");
    }
    if (myBrowser() == "IE8") {
        $('html').html('');
        alert("你使用的浏览器是IE 8，版本太低，请更新到IE8以上版本！");
    }
    // if (myBrowser() == "IE9") {
    //     alert("我是 IE9");
    // }
    // if (myBrowser() == "IE10") {
    //     $('html').html('');
    //     alert("你使用的浏览器是IE10，版本太低，请更新到IE8以上版本！");
    // }
})

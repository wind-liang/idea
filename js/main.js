/**
 * @file FECS test file
 * @author windliang(wechat:17771420231)
 */
//主要用于生成随机数，一边产生随机的效果，每次都会生成随机数
var start = false;
function set() {
    var random = Math.random();
    if (random > 0.5) {
        document.getElementById('choice').textContent = '正';
    }
    else {
        document.getElementById('choice').textContent = '反';
    }
}
document.getElementById('start').onclick = function () {
    if (!start) {
        document.getElementById('start').textContent = '再来一次';
        start = true;
    }

    var t = setInterval(set, 3);
    setTimeout(
        function () {
            clearTimeout(t);
        },
    2000);
};

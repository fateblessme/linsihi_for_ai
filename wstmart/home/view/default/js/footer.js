var path = "{:WSTConf('CONF.companyAddress')}";
var src = "http://api.map.baidu.com/geocoder?address="+path+"&output=html&src=yourAppName";

function onpath() {
    window.location.href=src;
}

function AddFavorite(title, url) {
    try {
        window.external.addFavorite(url, title);
    }
    catch (e) {
        try {
            window.sidebar.addPanel(title, url, "");
        }
        catch (e) {
            alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}

function onSearch(){
    var obj = WST.getParams('.ipts1');
    var url = '/search.html?keys='+obj.keys;
    location.href= url;
}

function onSearch2(){
    var obj = WST.getParams('.ipts2');
    var url = '/search.html?keys='+obj.keys;
    location.href= url;
}


function openwin(){
    var url = 'https://dbt.zoosnet.net/LR/Chatpre.aspx?id=DBT13749132&lng=cn';//转向网页的地址;
    var name;                           //网页名称，可为空;
    var iWidth = 800;                          //弹出窗口的宽度;
    var iHeight = 600;                        //弹出窗口的高度;
    var iTop = (window.screen.availHeight-30-iHeight)/2;       //获得窗口的垂直位置;
    var iLeft = (window.screen.availWidth-10-iWidth)/2;           //获得窗口的水平位置;
    window.open(url,name,'height='+iHeight+',,innerHeight='+iHeight+',width='+iWidth+',innerWidth='+iWidth+',top='+iTop+',left='+iLeft+',toolbar=no,menubar=no,scrollbars=auto,resizeable=no,location=no,status=no');

}

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https') {
        bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
    }
    else {
        bp.src = 'http://push.zhanzhang.baidu.com/push.js';
    }
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);
})();
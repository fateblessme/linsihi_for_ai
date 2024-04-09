function laytpls(type="product"){
    
 
    var obj = WST.getParams('.ipts');
    obj.id = $("#id_"+type).val();
    obj.page = $("#page_"+type).val();
    obj.limit = $("#limit_"+type).val();
    
    var url = $('#url_'+type).val();
    $.post(url,obj,function(data,textStatus){
        var objs = WST.toJson(data);
        var count =  $("#count_"+type).val();
        if(count==1){
            pages(objs.Total,type);
        }
        $("#count_"+type).val(objs.Total);

        $("#limit_"+type).val(objs.PerPage);
        if(objs.Rows){
            layui.use('laytpl', function(){
                var demo =  document.getElementById('demo_'+type);
                var laytpl = layui.laytpl;
                var getTpl = demo.innerHTML;
                var view = document.getElementById('view_'+type);
                laytpl(getTpl).render(objs.Rows, function(html){
                    view.innerHTML = html;
                });
            });
        }
    });
}

function laytplss(type="product"){
    
 
    var obj = WST.getParams('.ipts');
    obj.id = $("#id_"+type).val();
    obj.page = $("#page_"+type).val();
    obj.limit = $("#limit_"+type).val();

    
    var url = $('#url_'+type).val();
    $.post(url,obj,function(data,textStatus){
        var objs = WST.toJson(data);
        var count =  $("#count_"+type).val();
        if(count==1){
            honorpages(objs.Total,type);
        }
        $("#count_"+type).val(objs.Total);

        $("#limit_"+type).val(objs.PerPage);
        if(objs.Rows){
            layui.use('laytpl', function(){
                var demo =  document.getElementById('demo_'+type);
                var laytpl = layui.laytpl;
                var getTpl = demo.innerHTML;
                var view = document.getElementById('view_'+type);
                laytpl(getTpl).render(objs.Rows, function(html){
                    view.innerHTML = html;
                });
            });
        }
    });
}

//调用分页
function pages(count,type){
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
            ,layer = layui.layer;
        //完整功能
        var page = $("#page_"+type).val()|1;
        laypage.render({
            elem: 'pageview_'+type // div 的id
            ,count: count
            ,groups:3
            ,limit: $("#limit_"+type).val()
            ,curr:page
            ,first: false
            ,last: false
            ,prev: '<img src="/wstmart/home/view/default/images/prev.png">' //若不显示，设置false即可
            ,next: '<img src="/wstmart/home/view/default/images/prev.png">' //若不显示，设置false即可
            ,jump: function(e,first){
                if(!first){ //一定要加此判断，否则初始时会无限刷新
                    $("#page_"+type).val(e.curr);
                    laytpls(type);
                }
            }
        });
    })
}


//调用分页
function honorpages(count,type){
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage
            ,layer = layui.layer;
        //完整功能
        var page = $("#page_"+type).val()|1;
        laypage.render({
            elem: 'pageview_'+type // div 的id
            ,count: count
            ,groups:3
            ,limit: $("#limit_"+type).val()
            ,curr:page
            ,first: false
            ,last: false
            ,prev: '<' //若不显示，设置false即可
            ,next: '>' //若不显示，设置false即可
            ,jump: function(e,first){
                if(!first){ //一定要加此判断，否则初始时会无限刷新
                    $("#page_"+type).val(e.curr);
                    laytpls(type);
                }
            }
        });
    })
}

function laytplsss(type="product",page){
    
 
    var obj = WST.getParams('.ipts');
    obj.id = $("#id_"+type).val();
    obj.page = page;
    obj.limit = $("#limit_"+type).val();
    var url = $('#url_'+type).val();
    $.post(url,obj,function(data,textStatus){
        var objs = WST.toJson(data);
        var count =  $("#count_"+type).val();
        if(count){
            honorpages(objs.Total,type);
        }
        $("#count_"+type).val(objs.Total);

        $("#limit_"+type).val(objs.PerPage);
        if(objs.Rows){
            layui.use('laytpl', function(){
                var demo =  document.getElementById('demo_'+type);
                var laytpl = layui.laytpl;
                var getTpl = demo.innerHTML;
                var view = document.getElementById('view_'+type);
                laytpl(getTpl).render(objs.Rows, function(html){
                    view.innerHTML = html;
                });
            });
        }
    });
}

// contant表单
function contant() {
    var params = WST.getParams('.float');

    if(!params.con_name){
        layer.msg('请填写您的名', {icon: 2});
        return false;
    }
    // if(!params.con_name2){
    //     layer.msg('请填写您的姓', {icon: 2});
    //     return false;
    // }
    if(!params.con_email){
        layer.msg('请填写您的邮箱', {icon: 2});
        return false;
    }
    if(!params.con_phone){
        layer.msg('请填写您的手机号码', {icon: 2});
        return false;
    }
    if(!params.company){
        layer.msg('请填写您的公司名称', {icon: 2});
        return false;
    }
    if(!params.con_desc){
        layer.msg('请填写您提交的留言内容', {icon: 2});
        return false;
    }
    
    $("#sub_btn").attr('disabled',true);
    $.post(WST.U('home/join/index'),params,function(data,textStatus){
        if(data.status=='1'){
            layer.msg('申请提交成功,请稍后关注电话、短信或电子邮件！', {icon: 1}, function(){
                location.reload()
            });
        }else{
            $("#sub_btn").attr('disabled',false);
            layer.msg(data.msg, {icon: 5});
        }
    });
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
}

/**
 * 
 * @returns 表单2
 */
function contant2() {
    var params = WST.getParams('.float2');

    if(!params.verifyCode){
        layer.msg('请输入验证码', {icon: 2});
        $(".sr_yzm").attr('src',WST.U('home/index/getVerify','rnd='+Math.random()));
        return false;
    }

    if(!params.con_name){
        layer.msg('请填写您的姓名', {icon: 2});
        return false;
    }
    // if(!params.con_name2){
    //     layer.msg('请填写您的姓', {icon: 2});
    //     return false;
    // }
    if(!params.con_email){
        layer.msg('请填写您的邮箱', {icon: 2});
        return false;
    }
    if(!params.con_phone){
        layer.msg('请填写您的手机号码', {icon: 2});
        return false;
    }
    if(!params.company){
        layer.msg('请填写您的公司名称', {icon: 2});
        return false;
    }
    if(!params.con_desc){
        layer.msg('请填写您提交的留言内容', {icon: 2});
        return false;
    }
    $("#sub_btn").attr('disabled',true);
    $.post(WST.U('home/join/index'),params,function(data,textStatus){
        if(data.status=='1'){
            layer.msg('申请提交成功,请稍后关注电话、短信或电子邮件！', {icon: 1}, function(){
                location.reload()
            });
        }else{
            $("#sub_btn").attr('disabled',false);
            layer.msg(data.msg, {icon: 5});
        }
    });
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
}


// contant表单
function contant3() {
    var params = WST.getParams('.float2');

    if(!params.verifyCode){
        layer.msg('请输入验证码', {icon: 2});
        $(".sr_yzm").attr('src',WST.U('home/index/getVerify','rnd='+Math.random()));
        return false;
    }

    if(!params.con_name){
        layer.msg('请填写您的姓名', {icon: 2});
        return false;
    }
   
    if(!params.con_email){
        layer.msg('请填写您的邮箱', {icon: 2});
        return false;
    }
    if(!params.con_phone){
        layer.msg('请填写您的手机号码', {icon: 2});
        return false;
    }
    if(!params.company){
        layer.msg('请填写您的公司名称', {icon: 2});
        return false;
    }
    if(!params.con_desc){
        layer.msg('请填写您的留言内容', {icon: 2});
        return false;
    }
    $("#sub_btn").attr('disabled',true);
    $.post(WST.U('home/join/index'),params,function(data,textStatus){
        if(data.status=='1'){
            layer.msg('申请提交成功,请稍后关注电话、短信或电子邮件！', {icon: 1}, function(){
                location.reload()
            });
        }else{
            $("#sub_btn").attr('disabled',false);
            layer.msg(data.msg, {icon: 5});
        }
    });
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
}

// 重置表单
function reset() {
    $('.float').val('');
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
}

// 重置表单
function resemit2() {
    $('.float2').val('');
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
}


// footer表单
function onsemfloatfoot() {
    var params = WST.getParams('.sem_iptfoot');
    var obj = {};
    obj.con_name = params.con_namefoot;
    obj.con_phone = params.con_phonefoot;

    var desc = '留言内容：'+params.con_descfoot;
    if( params.con_urlfoot!=''){
        desc = '公司网址：'+params.con_urlfoot+'；留言内容：'+params.con_descfoot;
    }
    obj.con_desc = desc;
    console.log(obj);

    if(!obj.con_name){
        layer.msg('请输入您的称呼', {icon: 2});
        return false;
    }
    if(!obj.con_phone){
        layer.msg('请输入您的手机号码', {icon: 2});
        return false;
    }

    $.post(WST.U('home/index/consult'),obj,function(data,textStatus){
        if(data.status=='1'){
            layer.msg('申请提交成功，稍后请留意电话或短信或邮箱消息!', {icon: 1}, function(){
                location.reload()
            });
        }else{
            $("#sub_btn").attr('disabled',false);
            layer.msg(data.msg, {icon: 5});
        }
    });
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
}


// tag表单
function onsemfloattag() {
    var params = WST.getParams('.sem_ipttag');
    var obj = {};
    obj.con_name = params.con_nametag;
    obj.con_phone = params.con_phonetag;

    var desc = '留言内容：'+params.con_descfoot;
    if( params.con_urlfoot!=''){
        desc = '公司网址：'+params.con_urlfoot+'；留言内容：'+params.con_descfoot;
    }
    obj.con_desc = desc;
    console.log(obj);

    if(!obj.con_name){
        layer.msg('请输入您的称呼', {icon: 2});
        return false;
    }
    if(!obj.con_phone){
        layer.msg('请输入您的手机号码', {icon: 2});
        return false;
    }

    $.post(WST.U('home/index/consult'),obj,function(data,textStatus){
        if(data.status=='1'){
            layer.msg('申请提交成功，稍后请留意电话或短信或邮箱消息!', {icon: 1}, function(){
                location.reload()
            });
        }else{
            $("#sub_btn").attr('disabled',false);
            layer.msg(data.msg, {icon: 5});
        }
    });
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
}



// sem表单
function onsemfloatNew() {
    var params = WST.getParams('.sem_iptNew');
    var obj = {};
    obj.con_name = params.con_nameNew;
    obj.con_desc = params.con_descNew;
    obj.con_phone = params.con_phoneNew;

    if(!obj.con_phone){
        layer.msg('请输入您的手机号码', {icon: 2});
        return false;
    }

    $.post(WST.U('home/index/consult'),obj,function(data,textStatus){
        if(data.status=='1'){
            layer.msg('申请提交成功，稍后请留意电话或短信或邮箱消息!', {icon: 1}, function(){
                location.reload()
            });
        }else{
            $("#sub_btn").attr('disabled',false);
            layer.msg(data.msg, {icon: 5});
        }
    });
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
}

// sem2表单

function onsemfloat2() {
    var params = WST.getParams('.sem_ipt2');
    console.log(params);
    if(!params.con_phone){
        layer.msg('请输入您的手机号码', {icon: 2});
        return false;
    }


    $.post(WST.U('home/index/consult'),params,function(data,textStatus){
        if(data.status=='1'){
            layer.msg('申请提交成功，稍后请留意电话或短信或邮箱消息!', {icon: 1}, function(){
                location.reload()
            });
        }else{
            $("#sub_btn").attr('disabled',false);
            layer.msg(data.msg, {icon: 5});
        }
    });
    return false; //阻止表单跳转。如果需要表单跳转，去掉这段即可。
}


function newNum(id) {
    var params = {};
    params.id=id
    $.post(WST.U('home/news/visitorNum'),params,function(data,textStatus){
        location.href=WST.U('home/news/detail','id='+id);
    });
}


function visitorNum(id) {
    var params = {};
    params.id=id
    $.post(WST.U('home/solution/visitorNum'),params,function(data,textStatus){
        location.href=WST.U('home/solution/detail','id='+id);
    });
}

function serverNum(id) {
    var params = {};
    params.id=id
    $.post(WST.U('home/server/visitorNum'),params,function(data,textStatus){
        location.href=WST.U('home/server/detail','id='+id);
    });
}

function goodsNum(id) {
    var params = {};
    params.id=id
    $.post(WST.U('home/product/visitorNum'),params,function(data,textStatus){
        location.href=WST.U('home/product/detail','id='+id);
    });
}
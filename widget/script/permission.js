/**
 *	判断APP是否持有该权限
 * @param array   one_per  	- 权限数组['camera','location']
 */
function hasPermission(one_per) {
    var rets = api.hasPermission({
        list: one_per
    });

    //获取需要判断的权限
    var temp = new Array();
    var status = true;
    for (var obj in rets) {
        var granted = rets[obj].granted;
        var names = rets[obj].name;
        if (granted == false) {
            temp.push(names);
            status = false;
        }
    }
    //返回结果，和需要申请的权限
    return {
        "status": status,
        "perms": temp
    };
}

/**
 *	获取权限
 * @param array		one_per  	- 权限数组['camera','location']
 * @param function  callback  	- 回调函数
 */
function reqPermission(one_per, callback) {
    api.requestPermission({
        list: one_per,
        code: 100001
    }, function(ret, err) {
        //获取处理结果
        var list = ret.list;
        for (var i in list) {
            //只有有一项权限不足，就返回
            if (list[i].granted == false) {
                api.toast({
                    msg: '权限不足，无法进行下一步操作',
                    duration: 2000,
                    location: 'bottom'
                });
                return false;
            }
        }

        if (callback) {
            callback();
            return;
        }
    });
}

/**
 * 判断是否持有数组中的权限，无权限获取对应的权限
 * @param array		perm	  	- 权限数组['camera','location']
 * @param function  callback  	- 回调函数
 */
function confirmPer(perm, callback) {
    //权限类型有
    //calendar日历，camera相机，contacts通讯录，location位置信息，microphone麦克风
    //phone电话，sensor身体传感器，sms短信，storage存储空间，photos相册

    //ios系统直接跳过
    if (api.systemType == 'ios') {
        // callback();
        // return false;
    }
    //判断多个权限是，使用 ,（英文逗号隔开）
    if (perm.indexOf(",") != -1) {
        var perms = perm.split(',');
    } else {
        var perms = new Array(perm);
    }

    //判断是否持有该数组中的权限
    var has = hasPermission(perms);
    if (!has.status) {
        //获取权限
        reqPermission(has.perms, callback);
        return false;
    }

    callback();
    return true;
}

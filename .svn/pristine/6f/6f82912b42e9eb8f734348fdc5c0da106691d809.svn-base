// userId  //用户id
// enterpriseId  //企业或项目id
// currentProject  //当前企业或项目名称
// token  //用户登录状态
// enterpriseName  //项目或企业列表
// enterLoginInfo  拉取登陆企业或项目信息
// checkType判断当前是随机检查还是分项检查
//problemtypeInfo 质量问题类型缓存
//problemlocation_storage 质量问题部位缓存

var dialogBox, openinstall;
apiready = function () {

    dialogBox = api.require('dialogBox');

    // openinstall唤醒页面
    openinstall = api.require('openinstall');
    api.addEventListener({
        name: 'appintent'
    }, function (ret, err) {
        openinstall.getWakeup({
            "uri": ret
        }, function (ret, err) {
            installFn();
            reportRegisterFn()
        });
    });

    //个性安装
    function installFn() {
        openinstall.getInstall({
            timeout: 10
        }, function (ret, err) {
        });
    }
    //上报注册量
    function reportRegisterFn() {
        openinstall.reportRegister();
    }



    //监听网络连接
    api.addEventListener({
        name: 'online'
    }, function (ret, err) {
        api.toast({
            msg: '网络已连接',
            duration: 2000,
            location: 'bottom'
        });
        api.closeWin({
            name: 'neteworke'
        });
    });
    //监听是否同意协议
    api.addEventListener({
        name: 'clickRole'
    }, function (ret, err) {
        if (ret) {
            console.log($api.jsonToStr(ret));
            if (ret.value.roleFn == 1) {
                api.setPrefs({
                    key: 'zhuji_version',
                    value: api.version
                });

            } else {
                api.alert({
                    title: '提示',
                    msg: '退出app',
                }, function (ret, err) {
                    if (ret) {
                        api.closeWidget({
                            id: 'A6017026983510', //你的APPid
                            retData: {
                                name: 'closeWidget'
                            },
                            animation: {
                                type: 'flip',
                                subType: 'from_bottom',
                                duration: 500
                            },
                            silent: true
                        });
                    } else {
                        //  alert( JSON.stringify( err ) );
                    }
                });


            }
        } else { }
    });


    // 监听网络断开
    api.addEventListener({
        name: 'offline'
    }, function (ret, err) {
        api.toast({
            msg: '网络已断开',
            duration: 2000,
            location: 'bottom'
        });
        api.openWin({
            name: 'neteworke',
            url: './noteworke.html',
            pageParam: {}
        });
    })
    //监听修改密码
    api.addEventListener({
        name: 'loginPhone'
    }, function (ret, err) {
        if (ret) {
            vm.phone = $api.getStorage('loginPhone');
            vm.passWord = ''
        }
    });
    var vm = new Vue({
        el: '#app',
        data: {
            phone: '', //账号
            passWord: '' //密码
        },
        methods: {
            //是否弹出协议
            layer: function () {
                // api.removePrefs({
                //     key: 'zhuji_version'
                // });

                api.getPrefs({
                    key: 'zhuji_version'
                }, function (ret, err) {
                    if ((!ret.value) || (ret.value != api.version)) {
                        vm.contentShow()
                    } else {

                    }
                });
            },
            //弹窗
            contentShow: function () {

                api.openFrame({
                    name: 'layerrole',
                    url: 'widget://html/person/agreement0.html',
                    pageParam: {
                        name: 'test'
                    },
                    bounces: false,
                    bgColor: 'transparent',
                });
            },


            //资料文件预加载
            fileLoad: function () {
                var params = {
                    "prefix": ''
                }
                ajaxPost(
                    false,
                    '加载中...',
                    getAllObjectsByPrefix,
                    params,
                    function (ret) {
                        if (ret.obj.length) {

                            api.setPrefs({
                                key: 'getAllObjectsByPrefixInfo',
                                value: JSON.stringify(ret.obj)
                            });
                        } else {
                            // $api.setStorage('getAllObjectsByPrefixInfo', '')
                            api.setPrefs({
                                key: 'getAllObjectsByPrefixInfo',
                                value: ''
                            });
                        }
                    }
                )
            },
            login: function () {
                //清除质量部位缓存
                api.removePrefs({
                    key: 'problemlocation_storage'
                });

                //// 删除质量问题类型
                api.removePrefs({
                    key: 'problemtypeInfo'
                });
                api.removePrefs({
                    key: 'getAllObjectsByPrefixInfo'
                });
                api.removePrefs({
                    key: 'basis'
                });
                // $api.clearStorage();
                //检查账号输入
                api.setPrefs({
                    key: 'zhuji_version',
                    value: api.version
                });

                if (!fnUsername(this.phone)) {
                    api.toast({
                        msg: '请输入正确的账号',
                        duration: 2000,
                        location: 'bottom'
                    });
                    return false
                }
                // 验证输入是否为空
                if (!(this.phone || !this.passWord)) {
                    api.toast({
                        msg: '不能为空...',
                        duration: 2000,
                        location: 'bottom'
                    });
                    return false
                }

                if (checkName(this.phone) || checkName(this.passWord)) {
                    api.toast({
                        msg: '不能输入特殊字符',
                        duration: 2000,
                        location: 'bottom'
                    });
                    return false;
                }

                // 登录请求
                $app.post(
                    true,
                    loginURL,
                    {
                        phone: this.phone,
                        passWord: this.passWord
                    },
                    function (loginRet, err) {
                        if (loginRet) {
                            api.toast({
                                msg: loginRet.msg,
                                duration: 2000,
                                location: 'bottom'
                            });
                        }
                        if (loginRet.status == '1') { //判断是(1)否(0)成功
                            $api.setStorage('loginFlag', loginRet.obj);
                            $api.setStorage('userId', loginRet.obj[0].userId);

                            var ajpush = api.require('ajpush');
                            //极光初始化
                            ajpush.init(function (ret) {
                                if (ret && ret.status) { }
                            });
                            ajpush.setListener(
                                function (ret) {

                                }
                            );
                            //绑定别名
                            var param = {
                                alias: loginRet.obj[0].userId,
                                tags: []
                            };
                            ajpush.bindAliasAndTags(param, function (ret) { });
                            // android极光推送模块会往设备状态栏上发送通知
                            api.addEventListener({
                                name: 'appintent'
                            }, function (ret, err) {
                                if (ret && ret.appParam.ajpush) { }
                            })

                            // ios应用在前台运行，通过setListener方法监听到
                            api.addEventListener({
                                name: 'noticeclicked'
                            }, function (ret, err) {
                                if (ret && ret.value) {
                                    ajpush.setBadge({
                                        badge: 0
                                    });
                                }
                            })

                            if (loginRet.obj.length > 1) { //判断是否有多个身份
                                var typeName = loginRet.obj.map(function (item) {
                                    return item.typeName
                                })
                                var selectProjectType = loginRet.obj.map(function (item) {
                                    return item.type
                                })
                                api.actionSheet({
                                    title: '请选择身份',
                                    cancelTitle: '取消',
                                    buttons: typeName
                                }, function (ret, err) {
                                    if (ret) {
                                        var btnIndex = ret.buttonIndex - 1;
                                        if (btnIndex >= typeName.length) {
                                            return false;
                                        }
                                        $api.setStorage('selectProjectType', loginRet.obj[btnIndex].type);
                                        if (typeName[btnIndex] == '企业') {
                                            var oneLoginUserInfoURL = BASE_URL + 'appE/user/getEnterpriseLoginUserInfo';

                                        } else {
                                            var oneLoginUserInfoURL = BASE_URL + 'app/user/getProjectLoginUserInfo';

                                        }
                                        loginCommon(loginRet, oneLoginUserInfoURL, btnIndex)

                                    }
                                });
                            } else {
                                //当用户只有一个身份时拉取用户信息appE/user/getEnterpriseLoginUserInfo
                                $api.setStorage('selectProjectType', loginRet.obj[0].type);

                                if (loginRet.obj[0].type == 1) {
                                    var oneLoginUserInfoURL = BASE_URL + 'appE/user/getEnterpriseLoginUserInfo';

                                } else {
                                    var oneLoginUserInfoURL = BASE_URL + 'app/user/getProjectLoginUserInfo';

                                }
                                loginCommon(loginRet, oneLoginUserInfoURL, 0)
                            }

                        }
                    }

                )

            },
            //验证输入是否是11位且为数字
            regLength: function (val) {
                var reg = /^\d{11}$/;
                if (!reg.test(val)) {
                    api.toast({
                        msg: '账号必须为数字且长度必须为11位',
                        duration: 2000,
                        location: 'bottom'
                    });

                    return false;
                }
            },
            toggleInput: function (id) {
                var el = $api.byId('toggleInput');
                var prev = $api.next(el);

                if ($api.attr(el, 'type') == 'text') {
                    $api.attr(el, 'type', 'password');
                    $api.removeCls(prev, 'aui-icon-display');
                    $api.addCls(prev, 'aui-icon-hide');
                } else {
                    $api.attr(el, 'type', 'text');
                    $api.removeCls(prev, 'aui-icon-hide');
                    $api.addCls(prev, 'aui-icon-display');
                }
            },
            //清除账号
            clearInput: function () {
                this.phone = '';
                this.passWord = ''
            },


        },
        created: function () {
            this.isLoginFlag;

        },
        computed: {
            isLoginFlag: function () {
                if (this.phone && this.passWord) {
                    $api.removeAttr($api.byId('loginBtn'), 'disabled');
                    return true;
                } else {
                    $api.attr($api.byId('loginBtn'), 'disabled', 'disabled');
                    return false;
                }
            }
        },
        mounted: function () {
            this.layer()
        },

    })

    api.addEventListener({
        name: 'keyback'
    }, function (ret, err) {
        api.closeWidget({
            id: 'A6017026983510',
            retData: {
                name: 'closeWidget'
            },
            animation: {
                type: 'flip',
                subType: 'from_bottom',
                duration: 500
            }
        });

    });
    if ($api.getStorage('token')) {
        vm.phone = $api.getStorage('loginPhone');
        vm.passWord = $api.getStorage('loginPwd');
        vm.login()
    } else {
        vm.phone = '';
        vm.passWord = '';
    };

    function loginCommon(loginRet, oneLoginUserInfoURL, btnIndex) {
        var selectIndex = loginRet.obj.length > 1 ? btnIndex : 0;
        $api.setStorage('selectionType', loginRet.obj[selectIndex].type);
        $app.post(
            true,
            oneLoginUserInfoURL,
            { userId: $api.getStorage('userId') },
            function (ret, err) {
                // console.log($api.jsonToStr(ret));
                if (ret.status == 1) {
                    //预加载文件
                    vm.fileLoad();
                    var getEnterpriseListsRet = ret;
                    $api.setStorage('enterLoginInfo', ret.obj);
                    $api.setStorage('userId', ret.obj.userId);
                    $api.setStorage('userName', ret.obj.name);
                    //对企业列表和项目列表进行融合
                    if (loginRet.obj[selectIndex].type == 1) { //判断是企业(1)还是项目(2)
                        var listRet = ret.obj.enterprises; //企业列表
                    } else {
                        var listRet = ret.obj.projects; //项目列表
                    }
                    if (listRet.length == 1) { //当前企业或项目列表是否只有一条数据
                        if (listRet[0].expireStatus != 0) { //判断企业是(1)否(0)到期
                            if (loginRet.obj[selectIndex].type == 1) { //判断是企业(1)还是项目(2)
                                var listRetName = listRet[0].enterprisesName; //企业列表
                            } else {
                                var listRetName = listRet[0].projectName; //项目列表
                            }
                            api.alert({
                                title: '提示',
                                msg: listRetName + '已过期，请尽快续期',
                            }, function (ret, err) { });
                        } else {
                            if (loginRet.obj[selectIndex].type == 1) { //判断是企业(1)还是项目(2)
                                var listId = ret.obj.enterprises[0].enterpriseId; //企业列表
                                var listName = ret.obj.enterprises[0].enterpriseName;
                                $api.setStorage('enterpriseType', ret.obj.enterprises[0].enterpriseType);

                            } else {
                                var listId = ret.obj.projects[0].projectId; //项目列表
                                var listName = ret.obj.projects[0].projectName
                            }
                            $api.setStorage('enterpriseSelectCurren', listRet[0]);
                            $api.setStorage('enterpriseId', listId);
                            $api.setStorage('currentProject', listName);

                            $api.setStorage('token', getEnterpriseListsRet.obj.token);
                            $api.setStorage('loginPhone', vm.phone);
                            $api.setStorage('loginPwd', vm.passWord);

                            if (loginRet.obj[selectIndex].type == 1) {
                                api.openWin({
                                    name: 'Index',
                                    url: './index.html',
                                    reload: true,
                                    slidBackEnabled: false,
                                    pageParam: {}
                                });
                            } else {
                                api.openWin({
                                    name: 'projectIndex',
                                    url: './wgt/html/index.html',
                                    reload: true,
                                    slidBackEnabled: false,
                                    pageParam: {}
                                });
                            }
                        }
                    } else if (listRet == '') { //判断企业是否离职
                        api.alert({
                            title: '温馨提示',
                            msg: '你已离职,不能登录',
                        }, function (ret, err) {

                        });

                    } else {
                        //融合企业和项目的默认项目列表
                        if (loginRet.obj[selectIndex].type == 1) { //判断是企业(1)还是项目(2)
                            var currenListRet = ret.obj.currentEnterprise; //企业列表
                        } else {
                            var currenListRet = ret.obj.currentProject; //项目列表
                        }
                        if (currenListRet != null && currenListRet.expireStatus == 0) { //当前是否有默认项且未过期
                            if (currenListRet.expireStatus == 0) { //当前是(1)否(0)到期
                                // $api.setStorage('getEnterpriseLoginUserInfo', ret.obj);
                                $api.setStorage('token', ret.obj.token);
                                api.toast({
                                    msg: loginRet.msg,
                                    duration: 2000,
                                    location: 'bottom'
                                });
                                if (loginRet.obj[selectIndex].type == 1) { //判断是企业(1)还是项目(2)
                                    var enterpriseName = currenListRet.enterpriseName; //企业列表
                                    var enterpriseId = currenListRet.enterpriseId;
                                    $api.setStorage('enterpriseType', currenListRet.enterpriseType)
                                } else {
                                    var enterpriseName = currenListRet.projectName; //项目列表
                                    var enterpriseId = currenListRet.projectId
                                }
                                $api.setStorage('enterpriseSelectCurren', currenListRet)
                                $api.setStorage('enterpriseId', enterpriseId);
                                $api.setStorage('currentProject', enterpriseName);
                                $api.setStorage('loginPhone', vm.phone);
                                $api.setStorage('loginPwd', vm.passWord);
                                if (loginRet.obj[selectIndex].type == 1) {
                                    api.openWin({
                                        name: 'Index',
                                        url: './index.html',
                                        reload: true,
                                        slidBackEnabled: false,
                                        pageParam: {}
                                    });
                                } else {
                                    api.openWin({
                                        name: 'projectIndex',
                                        url: './wgt/html/index.html',
                                        reload: true,
                                        slidBackEnabled: false,
                                        pageParam: {}
                                    });
                                }
                            } else {
                                if (loginRet.obj[selectIndex].type == 1) { //判断是企业(1)还是项目(2)
                                    var enterpriseName = currenListRet.enterpriseName; //企业列表
                                } else {
                                    var enterpriseName = currenListRet.projectName; //项目列表
                                }
                                api.toast({
                                    msg: enterpriseName + '已过期,请及时续费',
                                    duration: 2000,
                                    location: 'bottom'
                                });

                            }
                        } else {
                            if (!listRet) { //判断当前企业列表信息是否存在
                                api.alert({
                                    title: '温馨提示',
                                    msg: ret.obj.msg,
                                }, function (ret, err) { });
                                return false;
                            }
                            var enterpriseName = [];
                            if (loginRet.obj[selectIndex].type == 1) { //(1)企业
                                ret.obj.enterprises.forEach(function (item) {
                                    enterpriseName.push(item.enterpriseName)
                                });
                            } else {
                                ret.obj.projects.forEach(function (item) {
                                    enterpriseName.push(item.projectName)
                                });
                            }
                            api.actionSheet({
                                title: '选择单位/项目',
                                buttons: enterpriseName
                            }, function (ret, err) {
                                if (ret) {
                                    var index = ret.buttonIndex - 1;
                                    if (index >= enterpriseName.length) {
                                        return
                                    }

                                    if (listRet[index].expireStatus != 0) { //判断企业是否到期
                                        //融合企业项目名称
                                        if (loginRet.obj[selectIndex].type == 1) {
                                            var listRetName = listRet[index].enterpriseName
                                        } else {
                                            var listRetName = listRet[index].projectName
                                        }
                                        api.alert({
                                            title: '提示',
                                            msg: listRetName + '单位名已过期，请尽快续期',
                                        }, function (ret, err) { });
                                    } else {
                                        if (loginRet.obj[selectIndex].type == 1) {
                                            var listRetName = listRet[index].enterpriseName;
                                            var lisrRetId = listRet[index].enterpriseId;
                                            $api.setStorage('enterpriseType', listRet[index].enterpriseType)

                                        } else {
                                            var listRetName = listRet[index].projectName;
                                            var lisrRetId = listRet[index].projectId
                                        }
                                        $api.setStorage('enterpriseSelectCurren', listRet[index]);
                                        $api.setStorage('token', getEnterpriseListsRet.obj.token);
                                        $api.setStorage('enterpriseId', lisrRetId);
                                        $api.setStorage('currentProject', listRetName);
                                        $api.setStorage('loginPhone', vm.phone);
                                        $api.setStorage('loginPwd', vm.passWord);
                                        if (loginRet.obj[selectIndex].type == 1) {
                                            api.openWin({
                                                name: 'Index',
                                                url: './index.html',
                                                reload: true,
                                                slidBackEnabled: false,
                                                pageParam: {}
                                            });
                                        } else {
                                            api.openWin({
                                                name: 'projectIndex',
                                                url: './wgt/html/index.html',
                                                reload: true,
                                                slidBackEnabled: false,
                                                pageParam: {}
                                            });
                                        }
                                    }
                                } else {
                                    api.toast({
                                        msg: ret.msg,
                                        duration: 2000,
                                        location: 'bottom'
                                    });

                                }
                            });
                        }

                    }


                }
            }
        )

    }


    // dbSlect('SELECT * FROM zhuji_from')
}

//

function openagreement(type) {
    var url = './html/person/' + (type == 1 ? 'agreement' : 'privacyprotocol') + '.html';

    api.openWin({
        name: 'agreement' + type,
        url: url,
        pageParam: {
            isheaderShow: true
        }
    });

}

//login流程

function openIndex() {
    if (api.getGlobalData({ key: 'token' })) {
        if (api.getGlobalData({ key: 'selectionType' }) == '1') {
            api.openWin({
                name: 'Index',
                url: './index.html',
                pageParam: {
                    name: 'test'
                }
            });
        } else {
            api.openWin({
                name: 'projectIndex',
                url: './wgt/html/index.html',
                pageParam: {}
            });
        }


    }

}

//跳转密码
function openPwd() {
    api.openWin({
        name: 'fogetpwd',
        url: './html/user/forgetPwd.html'
    })
}

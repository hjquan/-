apiready = function() {
    confirmPer('camera,photos', function() {})
    confirmPer('location', function() {})
    api.addEventListener({
        name: 'refreInit0'
    }, function(ret, err){
        if( ret ){
            vm.init();
        }
    });
    ///监听推送消息
    // api.addEventListener({
    //     name: 'noticeclicked'
    // }, function(ret, err) {
    //     vm.init();
    //     vm.getCheckNumber()
    // });

    var vm = new Vue({
        el: '#app',
        data: {
            menuBox: '', //菜单列表
            selctList: [], //用户拉取企业或项目列表
            listNuumber: '', //列表数量
            isShowMenu: false, //安全检查菜单是否展示
            isCheckMenu: false,
            menu_url: [ //菜单图标
                [],
                ['', '', '../image/menu/02_03.png', '../image/menu/02_04.png', '../image/menu/02_05.png'],
                []
            ],
            menu_href: [
                [],
                ['', '', '', '', './ledger/index.html']
            ]
        },
        mounted: function() {},
        methods: {
            init: function() {
                vm.isShowMenu = false;
                vm.isCheckMenu = false
                var dataJson = {
                    userId: $api.getStorage('userId'),
                    enterpriseId: $api.getStorage('enterpriseId'),
                    rightsType: 'list'
                }
                ajaxPost(
                    true,
                    '数据加载中...',
                    enterpriseMenuURL,
                    dataJson,
                    function(ret) {
                        console.log($api.jsonToStr(ret.obj));
                        vm.menuBox = ret.obj;
                        $api.setStorage('menuIfo', ret.obj);
                        //控制首页应用中心是否显示
                        vm.menuBox.forEach(function(item) {
                                if (item.menu_order == 2) {
                                    item.submenu.forEach(function(item) {
                                        if (item.menu_order == 3) {
                                            vm.isShowMenu = true;
                                            //预加载依旧
                                            ajaxPost(
                                                false,
                                                '加载中...',
                                                showDictListURL, {
                                                    'dictCode': '11'
                                                },
                                                function(ret) {
                                                    api.setPrefs({
                                                        key: 'basis',
                                                        value: ret.obj
                                                    });
                                                }
                                            )
                                        }
                                    })
                                }

                            })
                            //控制首页安全台账是否显示
                        vm.menuBox.forEach(function(item) {
                            if (item.menu_order == 2) {
                                item.submenu.forEach(function(item) {
                                    if (item.menu_order == 5) {
                                        vm.isCheckMenu = true;
                                    }
                                })
                            }
                        })
                        api.sendEvent({
                            name: 'frame1Init',
                            extra: {}
                        });

                    }
                )
                vm.getCheckNumber();

            },
            getCheckNumber: function() {
                //获取首页首页列表计量总数
                ajaxPost(
                    true,
                    '加载中...',
                    getHomePageTotalsURL, {
                        userId: $api.getStorage('userId'),
                        enterpriseId: $api.getStorage('enterpriseId')
                    },
                    function(ret) {
                        vm.listNuumber = ret.obj;
                    }
                );
            },
            //分项检查
            openSubItem: function() {
                $api.setStorage('checkType',null);
                $api.setStorage('checkType', '1');
                api.openWin({
                    name: 'enterpriceBasis',
                    url: './randomCheckBox/enterpriceBasis.html',
                    pageParam: {}
                });

            },

            //随机检查
            openCamera: function() {
                confirmPer('camera,photos', function() {})
                $api.setStorage('checkType',null);
                if ($api.getStorage('token')) {

                    $api.setStorage('checkType','2');
                    api.openWin({
                        name: 'randomCheck',
                        url: './randomCheckBox/randomCheck.html',
                        pageParam: {
                        }
                    });
                }
            }
        }
    })
    vm.init();
    //监听问题检查的数量变化
    api.addEventListener({
        name: 'frame0TotalNumber'
    }, function(ret, err) {
        if (ret) {
            vm.getCheckNumber()
        }
    });
    //监听企业切换更新菜单
    api.addEventListener({
        name: 'currenProject'
    }, function(ret, err) {
        if (ret) {
            vm.getCheckNumber();
            vm.init();
        }
    });
    api.addEventListener({
        name: 'peojectMsgCenterList'
    }, function(ret, err) {
        if (ret) {
            vm.getCheckNumber();
        }
    });
    api.setRefreshHeaderInfo({
        visible: true,
        loadingImg: 'widget://image/refresh.png',
        bgColor: '#ccc',
        textColor: '#fff',
        textDown: '下拉刷新...',
        textUp: '松开刷新...',
        showTime: true
    }, function(ret, err) {
        vm.getCheckNumber();
        api.sendEvent({
            name: 'refreshFrame',
            extra: {}
        });

        api.refreshHeaderLoadDone();

    });



}


// //打开台账
function openLenger() {
    api.openWin({
        name: 'ledger',
        url: './ledger/index.html',
        pageParam: {
            name: 'test'
        }
    });

}

//打开未封闭
function openProblem() {
    api.openWin({
        name: 'problem',
        url: './ledger/problem.html',
        pageParam: {
            name: 'test'
        }
    });
}
//打开发现问题
function openDisoverProblems() {
    api.openWin({
        name: 'DisoverProblems',
        url: './ledger/discoverProblems.html',
        pageParam: {
            name: 'test'
        }
    });
}
//打开我的检查
function openMyExamination() {
    api.openWin({
        name: 'MyExamination',
        url: './ledger/MyExamination.html',
        pageParam: {
            name: 'test'
        }
    });
}

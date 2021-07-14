apiready = function() {


    //侵入式导航栏
    $api.fixStatusBar( $api.dom('header') );
    var vm = new Vue({
        el: '#app',
        data: {
            iconFlag: 1, //密码是否可见
            phone: '', //手机号
            code: '', //短信验证码
            newPwd: '', //new密码
            comfirgPwd: '', //验证密码
            show: true,
            count: '',
            timer: null

        },
        created:function(){
            this.isLoginFlag
        },
        computed: {
            isLoginFlag: function() {
                if (this.phone && this.newPwd && this.code && this.comfirgPwd) {
                    $api.removeAttr($api.byId('submit'), 'disabled');
                    return true;
                } else {
                    $api.attr($api.byId('submit'), 'disabled', 'disabled');

                    return false;
                }
            }
        },
        methods: {
            backLogin: function() { //关闭当前window页面(返回)
                api.closeWin();
            },
            getCod:function() { //点击验证码倒计时
                const TIME_COUNT = 60;
                if (!this.timer) {
                    this.count = TIME_COUNT;
                    this.show = false;
                    this.timer = setInterval(function(){
                        if (this.count > 0 && this.count <= TIME_COUNT) {
                            this.count--;
                        } else {
                            this.show = true;
                            clearInterval(this.timer);
                            this.timer = null;
                        }
                    }, 1000)
                }
            },
            toggleIcon:function(id){ //控制密码是否可见

                var el = $api.byId(id);
                var InputEl = $api.prev(el);

                if($api.hasCls(el,'aui-icon-hide')){
                    $api.removeCls(el, 'aui-icon-hide');
                    $api.addCls(el, 'aui-icon-display');
                    $api.attr(InputEl, 'type', 'text');

                }else{
                    $api.removeCls(el, 'aui-icon-display');
                    $api.addCls(el, 'aui-icon-hide');
                    $api.attr(InputEl, 'type', 'password');
                }
                // $api.jsonToStr(json);

            },
            sendSms: function() { //发送验证码
                if (!$api.trim(this.phone)) {
                    api.toast({
                        msg: 'phone不能为空...',
                        duration: 2000,
                        location: 'bottom'
                    });
                    return false;

                }
                if (checkName(this.phone)) {
                    api.toast({
                        msg: '不能输入特殊字符...',
                        duration: 2000,
                        location: 'bottom'
                    });
                    return false;

                }
                var validateCode = randomNumber(false, 6); //验证码生成6位
                $api.setStorage('validateCode', validateCode);
                $app.post(
                    true,
                    smsValidateURL,
                    {
                        phone: this.phone,
                        validateCode: validateCode
                    },
                    function(ret){
                        if (ret.status == 1) {
                            api.toast({
                                msg: ret.msg,
                                duration: 2000,
                                location: 'bottom'
                            })
                            vm.getCod()
                        } else {
                            api.toast({
                                msg: ret.msg,
                                duration: 2000,
                                location: 'bottom'
                            });
                        }
                    }
                )

            },
            setpwd: function() { //修改密码

                var isFlag = $api.trim(this.phone) && $api.trim(this.code) && $api.trim(this.newPwd) && $api.trim(this.comfirgPwd);
                if (!isFlag) {
                    api.toast({
                        msg: '不能为空...',
                        duration: 2000,
                        location: 'bottom'
                    });
                    return false;

                }
                if (checkName(this.newPwd) && checkName(this.comfirgPwd)) {
                    api.toast({
                        msg: '不能输入特殊字符...',
                        duration: 2000,
                        location: 'bottom'
                    });
                    return false;

                }
                if (!pwdReg(this.newPwd) || !pwdReg(this.comfirgPwd)) {
                    api.toast({
                        msg: '密码需要输入6~12位',
                        duration: 2000,
                        location: 'bottom'
                    });
                    return false;

                }
                if (this.newPwd != this.comfirgPwd) {
                    api.toast({
                        msg: '密码不一致',
                        duration: 2000,
                        location: 'bottom'
                    });
                    return false;

                }


                if ($api.getStorage('validateCode') != this.code) {
                    api.toast({
                        msg: '验证码输入不正确...',
                        duration: 2000,
                        location: 'bottom'
                    });

                    return false;
                }
                $app.post(
                    true,
                    forgotPassWordEditURL,
                    {
                       phone: this.phone,
                       passWord: this.newPwd
                   },
                    function(ret){
                        if (ret.status == 1) {
                            $api.setStorage('loginPhone', vm.phone);
                            vm.show = true;
                            vm.timer = null;
                            api.toast({
                                msg: ret.msg,
                                duration: 2000,
                                location: 'bottom'
                            });
                            vm.phone = '';
                            vm.code = '';
                            vm.newPwd = '';
                            vm.comfirgPwd = '';
                            api.sendEvent({
                                name: 'loginPhone',
                                extra: {
                                }
                            });


                            setTimeout(function(){
                                api.closeToWin({
                                    name: 'root'
                                });

                            },500)
                        } else {
                            api.toast({
                                msg: ret.msg,
                                duration: 2000,
                                location: 'bottom'
                            });
                        }
                    }
                )


            }
        }
    })




}

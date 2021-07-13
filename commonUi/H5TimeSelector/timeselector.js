var timeSelector = {
    data: {
        isAfter: true,
        isShowUnit: true
    },
    fnOpenSelector: function(_obj, _cb) {
        var _self = this;
        for( var x in _obj ){
            _self.data[x] = _obj[x];
        }

        _self.data.date = new Date(_obj.date);
        // 判断是否是一个正常的时间x
        if( isNaN(_self.data.date) ){
            _self.data.date = new Date();
        }

        // 判断是否设置过需要显示的时间层级
        if( ! _self.data.len ){
            if( typeof _obj.date === 'string' ){
                var _split = _obj.date.split(/[/ :]/);
                if( _split.length <= 1 ){
                    if( _split[0].length <= 4 ){
                        APP._len = 1;
                    }
                }else if( _split.length == 2 ){
                    // 年月格式补日，处理 ios 不能时间格式化兼容问题
                    _obj.date+='/01';
                    _self.data.date = new Date(_obj.date);
                    _self.data.len = 2;
                }else{
                    _self.data.len = _split.length;
                }
            }
        }
        setTimeout(function(){
            _self.fnStart(_cb);
        }, 100)
    },
    fnStart: function(_cb){
        var _self = this;
        var _date = new Date(_self.data.date);
        var oneLevelId = _self.data.nowYear = _date.getFullYear();

        var twoLevelId = _date.getMonth() + 1;
        var threeLevelId = _date.getDate();
        var fourLevelId = _date.getHours();
        var fiveLevelId = _date.getMinutes();
        var sixLevelId = _date.getSeconds();
        var _sureText = _self.data.sureText || '完成';
        var _title = _self.data.title || '时间选择';

        var yearData = function(callback) {
            callback(_self.formatYear(_self.data.nowYear))
        }
        var monthData = function(year, callback) {
            callback(_self.formatMonth());
        };
        var dateData = function(year, month, callback) {
            if (/^(1|3|5|7|8|10|12)$/.test(month)) {
                callback(_self.formatDate(31));
            } else if (/^(4|6|9|11)$/.test(month)) {
                callback(_self.formatDate(30));
            } else if (/^2$/.test(month)) {
                if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                    callback(_self.formatDate(29));
                } else {
                    callback(_self.formatDate(28));
                }
            } else {
                throw new Error('month is illegal');
            }
        };
        var hourData = function(one, two, three, callback) {
            var hours = [];
            for (var i = 0, len = 24; i < len; i++) {
                hours.push({
                    id: i,
                    value: i + (_self.data.isShowUnit ? '时' : '')
                });
            }
            callback(hours);
        };
        var minuteData = function(one, two, three, four, callback) {
            var minutes = [];
            for (var i = 0, len = 60; i < len; i++) {
                minutes.push({
                    id: i,
                    value: i + (_self.data.isShowUnit ? '分' : '')
                });
            }
            callback(minutes);
        };

        var secondsData = function(one, two, three, four, five, callback) {
            var seconds = [];
            for (var i = 0, len = 60; i < len; i++) {
                seconds.push({
                    id: i,
                    value: i +  (_self.data.isShowUnit ? '秒' : '')
                });
            }
            callback(seconds);
        };

        var _data = [yearData, monthData, dateData, hourData, minuteData, secondsData];
        if( _self.data.len ){
            _data = _data.splice(0, _self.data.len);
        }
        var iosSelect = new IosSelect(_data.length,
            _data,
            {
                sureText: _sureText,
                title: _title,
                oneLevelId: oneLevelId,
                twoLevelId: twoLevelId,
                threeLevelId: threeLevelId,
                fourLevelId: fourLevelId,
                fiveLevelId: fiveLevelId,
                sixLevelId: sixLevelId,
                itemShowCount: _self.data.itemShowCount || 5,
                itemHeight: _self.data.itemHeight || 55,
                callback: function (selectOneObj, selectTwoObj, selectThreeObj, selectFourObj, selectFiveObj, selectSixObj) {
                    var _date = new Date(selectOneObj.id, selectTwoObj.id-1, selectThreeObj.id, selectFourObj.id, selectFiveObj.id, selectSixObj.id);

                    _cb && _cb({
                        date: _date
                    });
                },
                fallback: function () {
                    // 选择取消后的回调函数
                    _cb && _cb();
                },
                maskCallback: function () {
                    // 点击背景层关闭组件时触发的方法
                    _cb && _cb();
                }
        });
    },

    formatYear: function(nowYear) {
        var _self = this;
        nowYear = _self.data.isAfter ? nowYear - 200 : nowYear;
        var arr = [];
        for (var i = nowYear; i <= nowYear + 400; i++) {
            arr.push({
                id: i + '',
                value: i + (_self.data.isShowUnit ? '年' : '')
            });
        }
        return arr;
    },
    formatMonth: function() {
        var _self = this;
        var arr = [];
        for (var i = 1; i <= 12; i++) {
            arr.push({
                id: i + '',
                value: i + (_self.data.isShowUnit ? '月' : '')
            });
        }
        return arr;
    },
    formatDate: function(count) {
        var _self = this;
        var arr = [];
        for (var i = 1; i <= count; i++) {
            arr.push({
                id: i + '',
                value: i + (_self.data.isShowUnit ? '日' : '')
            });
        }
        return arr;
    }
}
